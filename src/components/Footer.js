// Import resources
import React from "react";
import { Container } from "react-bootstrap";

// Component
function Footer() {
  // Return
  return (
    <>
      {/** Copyright section */}
      <Container fluid className="footer">
        <p>KLIN CODER &copy; {new Date().getFullYear()}</p>
      </Container>
    </>
  );
}

// Export
export default Footer;
