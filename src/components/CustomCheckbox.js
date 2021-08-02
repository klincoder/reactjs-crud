// Import resources
import React from "react";
import { Form } from "react-bootstrap";
import { Field } from "formik";

// Component function
function CustomCheckbox(props) {
  // Define props
  const { label, name, ...rest } = props;

  // Return
  return (
    // Hook react-bootstrap field to formik
    // Use formik's Field component
    <Field name={name} {...rest}>
      {
        // Destructure Field props
        ({ field, meta }) => {
          // Return
          return (
            <>
              <div className="mb-3">
                <Form.Check
                  type="checkbox"
                  label={label}
                  id={label}
                  {...field}
                  value={field.value}
                  isInvalid={meta.touched && meta.error}
                />
              </div>

              {/** Debug */}
              {/* {console.log('Checkbox', meta)} */}
            </>
          );
        }
      }
    </Field>
  );
}

// Export component
export default CustomCheckbox;
