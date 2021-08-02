// Import resources
import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { fireDB } from "../api/firebase";
import firebase from "firebase";
import { Form, Button } from "react-bootstrap";

// Import custom files
import CustomInputFloat from "./CustomInputFloat";
import CustomTextareaFloat from "./CustomTextareaFloat";

// Component
function ContactListForm({ updateID, setShowCreate, setShowEdit }) {
  // Close modal on for submit - create
  const handleFormCloseCreate = () => setShowCreate(false);

  // Close modal on for submit - edit
  const handleFormCloseEdit = () => setShowEdit(false);

  // Declare initial values variable
  let initialValues;

  // Check if update exist
  if (updateID) {
    // Define existing db values as initialValues
    initialValues = {
      fullName: updateID.name,
      emailAddr: updateID.email,
      phoneNumb: updateID.phone,
      homeAddr: updateID.address,
    };
  } else {
    // Define normal values
    initialValues = {
      fullName: "",
      emailAddr: "",
      phoneNumb: "",
      homeAddr: "",
    };
  }

  // Debug
  // console.log(initialValues);

  // Define validations
  const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/; // Phone regex
  const validate = Yup.object({
    fullName: Yup.string()
      .required("Required")
      .min(3, "Must be 3 or more letters"),
    emailAddr: Yup.string().required("Required").email("Invalid email address"),
    phoneNumber: Yup.string()
      .required("Required")
      .matches(phoneRegex, "Invalid phone number"),
    homeAddr: Yup.string()
      .required("Required")
      .min(5, "Address must be 5 or more letters"),
  });

  // Define submit function
  const onSubmit = (values, onSubmitProps) => {
    // alert(JSON.stringify(values, null, 2));
    // Check if updateID exist
    if (updateID) {
      // Update record
      fireDB.collection("gratitudes").doc(updateID.id).set(
        {
          name: values.fullName,
          email: values.emailAddr,
          phone: values.phoneNumber,
          address: values.homeAddr,
          dateUpdated: firebase.firestore.FieldValue.serverTimestamp(),
        },
        { merge: true }
      );
      // Close modal
      handleFormCloseEdit();
    } else {
      // Create record in database
      fireDB.collection("gratitudes").add({
        name: values.fullName,
        email: values.emailAddr,
        phone: values.phoneNumber,
        address: values.homeAddr,
        dateCreated: firebase.firestore.FieldValue.serverTimestamp(),
        dateUpdated: firebase.firestore.FieldValue.serverTimestamp(),
      });

      // Close modal
      handleFormCloseCreate();
    }
    // Reset form values
    onSubmitProps.resetForm();
    // Set isSubmitting to false
    onSubmitProps.setSubmitting(false);
  };

  // Return
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validate}
        onSubmit={onSubmit}
        enableReinitialize
      >
        {(formik) => (
          <Form onSubmit={formik.handleSubmit} autoComplete="off">
            {/** Full Name */}
            <CustomInputFloat
              type="text"
              name="fullName"
              label="Full Name"
              placeholder="Enter full name"
            />
            {/** Email Address */}
            <CustomInputFloat
              type="text"
              name="emailAddr"
              label="Email Address"
              placeholder="Enter email address"
            />
            {/** Phone Number */}
            <CustomInputFloat
              type="text"
              name="phoneNumber"
              label="Phone Number"
              placeholder="Enter phone number"
            />
            {/** Home Address */}
            <CustomTextareaFloat
              label="Home Address"
              name="homeAddr"
              placeholder="Enter your address"
            />

            <Button
              type="submit"
              variant="primary"
              className="btn-lg w-100"
              disabled={!formik.isValid || formik.isSubmitting}
            >
              {updateID ? "Update" : "Submit"}
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
}

// Export
export default ContactListForm;
