// Import resources
import React from "react";
import { Form } from "react-bootstrap";
import { Field } from "formik";

// Component function
function CustomCheckboxRadio(props) {
  // Define props
  const { label, name, options, ...rest } = props;

  // Return
  return (
    // Hook react-bootstrap field to formik
    // Use formik's Field component
    <Field name={name} {...rest}>
      {
        // Destructure Field props
        ({ field, meta }) => {
          // Return a loop
          return (
            <>
              <div className="mb-3">
                <Form.Label className="fw-bold me-3">{label}</Form.Label>
                {options.map((option) => {
                  // Return bootstrap field
                  return (
                    <Form.Check
                      key={option.key}
                      inline="true"
                      type="radio"
                      id={option.value}
                      label={option.key}
                      {...field}
                      value={option.value}
                      checked={field.value === option.value}
                      isInvalid={meta.touched && meta.error}
                    />
                  );
                })}

                {/** Debug */}
                {/* {console.log('Radio Meta', meta)} */}
              </div>
            </>
          );
        }
      }
    </Field>
  );
}

// Export component
export default CustomCheckboxRadio;
