// Import resources
import React from "react";
import { Form, FloatingLabel } from "react-bootstrap";
import { Field } from "formik";

// Component function
function CustomInputFloat(props) {
  // Define props
  const { label, name, type, placeholder, ...rest } = props;

  // Return
  return (
    // Hook react-bootstrap field to formik
    // Use formik's Field component
    <Field name={name} {...rest}>
      {
        // Destructure Field props
        ({ form, field, meta }) => {
          // Return bootstrap field
          return (
            <Form.Group className="mb-3" controlId={name} {...field}>
              <FloatingLabel controlId={name} label={label}>
                <Form.Control
                  type={type}
                  placeholder={placeholder}
                  value={field.value}
                  onChange={() => form.setFieldValue(field.value)}
                  isInvalid={meta.touched && meta.error}
                />
                {/** Set error message */}
                <Form.Control.Feedback type="invalid" className="error">
                  {meta.error}
                </Form.Control.Feedback>
              </FloatingLabel>
            </Form.Group>
          );
        }
      }
    </Field>
  );
}

// Export component
export default CustomInputFloat;
