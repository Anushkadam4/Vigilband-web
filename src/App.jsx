import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { supabase } from "./supabaseClient";

import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import EmergencyContacts from "./pages/EmergencyContacts";
import YourZone from "./pages/YourZone";
import SOS from "./pages/SOS";
import Settings from "./pages/Settings";
import AboutUs from "./pages/AboutUs";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // for initial auth check

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data?.user || null);
      setLoading(false);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <Router>
      {user && <Navbar />} {/* Show Navbar only when logged in */}
      <Routes>
        {/* Public Routes */}
        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <Register />}
        />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />

        {/* Protected Routes */}
        <Route
          path="/"
          element={user ? <Home user={user} /> : <Navigate to="/login" />}
        />
        <Route
          path="/emergency-contacts"
          element={
            user ? <EmergencyContacts user={user} /> : <Navigate to="/login" />
          }
        />
        <Route
          path="/your-zone"
          element={user ? <YourZone user={user} /> : <Navigate to="/login" />}
        />
        <Route
          path="/sos"
          element={user ? <SOS user={user} /> : <Navigate to="/login" />}
        />
        <Route
          path="/settings"
          element={user ? <Settings user={user} /> : <Navigate to="/login" />}
        />
        <Route
          path="/about-us"
          element={user ? <AboutUs user={user} /> : <Navigate to="/login" />}
        />

        {/* Catch-all route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
