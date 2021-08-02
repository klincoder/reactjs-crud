// Import resources
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTopRouter from "./components/ScrollToTopRouter";
import Home from "./pages/Home";

// Component
function App() {
  // Return
  return (
    // Define navigation router
    <Router>
      {/** Define content wrapper */}
      <div className="content-wrapper">
        {/** Scroll to top router */}
        <ScrollToTopRouter />

        {/** Header */}
        <Header />

        {/** Switch route */}
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>

      {/** Define footer wrapper */}
      <footer className="footer-wrapper">
        <Footer />
      </footer>
    </Router>
  );
}

// Export
export default App;
