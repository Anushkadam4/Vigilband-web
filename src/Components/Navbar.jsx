// import React from "react";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";


// const Navbar = () => {
//   return (
//     <nav style={{ padding: "10px", background: "#1976d2", color: "white" }}>
//       <Link to="/" style={{ margin: "0 10px", color: "white", textDecoration: "none" }}>Home</Link>
//       <Link to="/emergency-contacts" style={{ margin: "0 10px", color: "white", textDecoration: "none" }}>Emergency Contacts</Link>
//       <Link to="/your-zone" style={{ margin: "0 10px", color: "white", textDecoration: "none" }}>Your Zone</Link>
//       <Link to="/sos" style={{ margin: "0 10px", color: "white", textDecoration: "none" }}>SOS</Link>
//       <Link to="/settings" style={{ margin: "0 10px", color: "white", textDecoration: "none" }}>Settings</Link>
//       <Link to="/about-us" style={{ margin: "0 10px", color: "white", textDecoration: "none" }}>About Us</Link>
//     </nav>
//   );
// };

// export default Navbar;

import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate(); // ✅ use inside component

  // Optional example of programmatic navigation (not used here)
  const goToSettings = () => {
    navigate("/settings");
  };

  return (
    <nav style={{ padding: "10px", background: "#1976d2", color: "white" }}>
      <Link to="/" style={{ margin: "0 10px", color: "white", textDecoration: "none" }}>Home</Link>
      <Link to="/emergency-contacts" style={{ margin: "0 10px", color: "white", textDecoration: "none" }}>Emergency Contacts</Link>
      <Link to="/your-zone" style={{ margin: "0 10px", color: "white", textDecoration: "none" }}>Your Zone</Link>
      <Link to="/sos" style={{ margin: "0 10px", color: "white", textDecoration: "none" }}>SOS</Link>
      <Link to="/settings" style={{ margin: "0 10px", color: "white", textDecoration: "none" }}>Settings</Link>
      <Link to="/about-us" style={{ margin: "0 10px", color: "white", textDecoration: "none" }}>About Us</Link>

      {/* Optional button example */}
      {/* <button onClick={goToSettings} style={{ marginLeft: 20 }}>Go to Settings</button> */}
    </nav>
  );
};

export default Navbar;
