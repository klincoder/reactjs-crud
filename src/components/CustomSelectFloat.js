// Import resources
import React from "react";
import { Form, FloatingLabel } from "react-bootstrap";
import { Field } from "formik";

// Component function
function CustomSelectFloat(props) {
  // Define props
  const { label, name, options, ...rest } = props;

  // Return
  return (
    // Hook react-bootstrap field to formik
    // Use formik's Field component
    <Field name={name} id={name} {...rest}>
      {
        // Destructure Field props
        ({ form, field, meta }) => {
          // Return bootstrap field
          return (
            <Form.Group className="mb-3" controlId={name}>
              <FloatingLabel controlId={name} label={label}>
                <Form.Select
                  {...field}
                  value={field.value}
                  isInvalid={meta.touched && meta.error}
                >
                  {/** Loop options */}
                  {options.map((option) => {
                    // Return bootstrap field
                    return (
                      <option key={option.key} value={option.value}>
                        {option.key}
                      </option>
                    );
                  })}
                </Form.Select>
              </FloatingLabel>
            </Form.Group>
          );
        }
      }
    </Field>
  );
}

// Export component
export default CustomSelectFloat;
