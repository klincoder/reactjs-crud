// Import rsources
import React from "react";
import { Card } from "react-bootstrap";

// Component
function CustomCard({ cardClass, children, ...rest }) {
  // Return
  return (
    <Card className={cardClass} {...rest}>
      <Card.Body>{children}</Card.Body>
    </Card>
  );
}

// Export
export default CustomCard;
