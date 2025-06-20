import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import EmergencyContacts from "./pages/EmergencyContacts";
import YourZone from "./pages/YourZone";
import SOS from "./pages/SOS";
import Settings from "./pages/Settings";
import AboutUs from "./pages/AboutUs";

import Navbar from "./Components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/emergency-contacts" element={<EmergencyContacts />} />
        <Route path="/your-zone" element={<YourZone />} />
        <Route path="/sos" element={<SOS />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;

// import React, { useEffect, useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { supabase } from './supabaseClient';
// import Navbar from './Components/Navbar';
// import Home from './pages/Home';
// import EmergencyContacts from './pages/EmergencyContacts';
// import YourZone from './pages/YourZone';
// import SOS from './pages/SOS';
// import Settings from './pages/Settings';
// import AboutUs from './pages/AboutUs';
// import Login from './pages/Login';

// function App() {
//   const [session, setSession] = useState(null);

//   useEffect(() => {
//     supabase.auth.getSession().then(({ data: { session } }) => {
//       setSession(session);
//     });

//     supabase.auth.onAuthStateChange((_event, session) => {
//       setSession(session);
//     });
//   }, []);

//   if (!session) return <Login onLogin={() => window.location.reload()} />;

//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/emergency-contacts" element={<EmergencyContacts />} />
//         <Route path="/your-zone" element={<YourZone />} />
//         <Route path="/sos" element={<SOS />} />
//         <Route path="/settings" element={<Settings />} />
//         <Route path="/about-us" element={<AboutUs />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

// import React, { useEffect, useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Navbar from "./Components/Navbar";
// import Home from "./pages/Home";
// import EmergencyContacts from "./pages/EmergencyContacts";
// import YourZone from "./pages/YourZone";
// import SOS from "./pages/SOS";
// import Settings from "./pages/Settings";
// import AboutUs from "./pages/AboutUs";
// import Login from "./pages/Login";

// function App() {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     supabase.auth.getUser().then(({ data }) => {
//       setUser(data?.user || null);
//     });

//     supabase.auth.onAuthStateChange((_event, session) => {
//       setUser(session?.user || null);
//     });
//   }, []);

//   if (!user) return <Login onLogin={() => window.location.reload()} />;

//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home user={user} />} />
//         <Route path="/emergency-contacts" element={<EmergencyContacts user={user} />} />
//         <Route path="/your-zone" element={<YourZone user={user} />} />
//         <Route path="/sos" element={<SOS user={user} />} />
//         <Route path="/settings" element={<Settings user={user} />} />
//         <Route path="/about-us" element={<AboutUs />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

