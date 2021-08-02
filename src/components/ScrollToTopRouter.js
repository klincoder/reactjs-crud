// Import resources
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Export component by default
export default function ScrollToTopRouter() {
  // Define path
  const { pathname } = useLocation();

  // Scroll to top on each path
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
