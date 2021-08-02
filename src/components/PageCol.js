// Import rsources
import React from "react";

// Component
function PageCol({ colClass, children, ...rest }) {
  // Return
  return (
    <div className={colClass} {...rest}>
      {children}
    </div>
  );
}

// Export
export default PageCol;
