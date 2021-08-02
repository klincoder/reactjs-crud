// Import rsources
import React from "react";

// Component
function PageSection({ sectionClass, isFluid, children, ...rest }) {
  // Return
  return (
    <section className={sectionClass}>
      <div className={`container ${isFluid && "container-fluid"}`} {...rest}>
        <div className="row">{children}</div>
      </div>
    </section>
  );
}

// Export
export default PageSection;
