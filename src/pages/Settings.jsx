// import React from 'react';

// function Settings() {
//   return (
//     <div>
//       <h2>Settings</h2>
//       <p>Customize thresholds, sensitivity, and more.</p>
//     </div>
//   );
// }

// export default Settings;

// src/pages/Settings.jsx

import React, { useState } from "react";
import {
  Box,
  Typography,
  FormControlLabel,
  Switch,
  Button,
  Divider,
  TextField,
  MenuItem,
  Stack,
} from "@mui/material";

const Settings = () => {
  // States for toggles
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [locationTracking, setLocationTracking] = useState(true);

  // Profile info states
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("johndoe@example.com");

  // Password change states
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  // Language select
  const [language, setLanguage] = useState("en");

  const handleLogout = () => {
    alert("Logged out!");
  };

  const handleSaveProfile = () => {
    alert(`Saved name: ${name}, email: ${email}`);
    // Add your save logic here
  };

  const handleChangePassword = () => {
    alert("Password changed!");
    // Add your password change logic here
    setCurrentPassword("");
    setNewPassword("");
  };

  return (
    <Box sx={{ maxWidth: 600, mx: "auto", p: 4 }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: "bold" }}>
        Settings
      </Typography>

      {/* Profile Info */}
      <Typography variant="h6" sx={{ mb: 2 }}>
        Profile Information
      </Typography>
      <Stack spacing={2} sx={{ mb: 4 }}>
        <TextField
          label="Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
        />
        <TextField
          label="Email"
          variant="outlined"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
        />
        <Button variant="contained" onClick={handleSaveProfile}>
          Save Profile
        </Button>
      </Stack>

      <Divider sx={{ mb: 4 }} />

      {/* Preferences */}
      <Typography variant="h6" sx={{ mb: 2 }}>
        Preferences
      </Typography>
      <FormControlLabel
        control={
          <Switch
            checked={notifications}
            onChange={() => setNotifications(!notifications)}
            color="primary"
          />
        }
        label="Enable Notifications"
        sx={{ mb: 2 }}
      />
      <FormControlLabel
        control={
          <Switch
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
            color="primary"
          />
        }
        label="Dark Mode"
        sx={{ mb: 2 }}
      />
      <FormControlLabel
        control={
          <Switch
            checked={locationTracking}
            onChange={() => setLocationTracking(!locationTracking)}
            color="primary"
          />
        }
        label="Location Tracking"
        sx={{ mb: 4 }}
      />

      {/* Language Selector */}
      <Typography variant="h6" sx={{ mb: 2 }}>
        Language
      </Typography>
      <TextField
        select
        label="Select Language"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        sx={{ mb: 4 }}
        fullWidth
      >
        <MenuItem value="en">English</MenuItem>
        <MenuItem value="es">Spanish</MenuItem>
        <MenuItem value="fr">French</MenuItem>
        <MenuItem value="hi">Hindi</MenuItem>
        {/* Add more languages as needed */}
      </TextField>

      <Divider sx={{ mb: 4 }} />

      {/* Password Change */}
      <Typography variant="h6" sx={{ mb: 2 }}>
        Change Password
      </Typography>
      <Stack spacing={2} sx={{ mb: 4 }}>
        <TextField
          label="Current Password"
          variant="outlined"
          type="password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          fullWidth
        />
        <TextField
          label="New Password"
          variant="outlined"
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          fullWidth
        />
        <Button variant="contained" onClick={handleChangePassword}>
          Change Password
        </Button>
      </Stack>

      <Divider sx={{ mb: 3 }} />

      <Button
        variant="contained"
        color="error"
        onClick={handleLogout}
        fullWidth
        sx={{ mb: 2 }}
      >
        Logout
      </Button>

      <Typography variant="body2" color="text.secondary" align="center">
        App Version 1.0.0
      </Typography>
    </Box>
  );
};

export default Settings;
