// import React from 'react';

// export default function SOS() {
//   return (
//     <div style={{ padding: '2rem' }}>
//       <h1>SOS</h1>
//       <p>This is the SOS page. Emergency help and quick actions will be handled here.</p>
//     </div>
//   );
// }

// src/pages/SOS.jsx

// import React, { useState } from "react";
// import { Box, Button, Typography, Alert } from "@mui/material";

// const SOS = () => {
//   const [alertSent, setAlertSent] = useState(false);

//   const handleSOSClick = () => {
//     // Here you’d trigger your SOS logic, e.g., sending alert via supabase, API call, etc.
//     setAlertSent(true);
//   };

//   return (
//     <Box
//       sx={{
//         p: 4,
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center",
//         minHeight: "80vh",
//         bgcolor: "#fff3f3",
//       }}
//     >
//       <Typography variant="h4" gutterBottom sx={{ color: "#b71c1c" }}>
//         Emergency SOS
//       </Typography>

//       <Typography variant="body1" sx={{ mb: 3, maxWidth: 500, textAlign: "center" }}>
//         Press the big red button below to immediately send an emergency alert to your contacts.
//       </Typography>

//       <Button
//         variant="contained"
//         onClick={handleSOSClick}
//         sx={{
//           backgroundColor: "#d32f2f",
//           color: "white",
//           width: 150,
//           height: 150,
//           borderRadius: "50%",
//           fontSize: "2rem",
//           "&:hover": { backgroundColor: "#9a0007" },
//           mb: 3,
//           boxShadow: "0 0 15px 5px rgba(211, 47, 47, 0.7)",
//         }}
//       >
//         SOS
//       </Button>

//       {alertSent && (
//         <Alert severity="success" sx={{ maxWidth: 400, textAlign: "center" }}>
//           Emergency alert sent successfully!
//         </Alert>
//       )}

//       <Typography variant="caption" sx={{ mt: 4, color: "#555" }}>
//         Your location and details will be shared with your emergency contacts.
//       </Typography>
//     </Box>
//   );
// };

// export default SOS;

import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  CircularProgress,
  Alert,
} from "@mui/material";
import { styled } from "@mui/system";

// 🔴 Blinking Red Circular Button
const BlinkingSOSButton = styled(Button)(({ theme }) => ({
  backgroundColor: "red",
  color: "white",
  width: 120,
  height: 120,
  borderRadius: "50%",
  fontSize: "1.2rem",
  fontWeight: "bold",
  animation: "blinker 1s infinite",
  "&:hover": {
    backgroundColor: "#cc0000",
  },
  "@keyframes blinker": {
    "50%": {
      opacity: 0.6,
    },
  },
}));

const predefinedMessages = [
  "I need immediate help!",
  "Emergency! Please come quickly!",
  "I'm in danger. Call help!",
  "Medical emergency, need assistance!",
];

const SOS = () => {
  const [message, setMessage] = useState(predefinedMessages[0]);
  const [countdown, setCountdown] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [lastStatus, setLastStatus] = useState(null);
  const [location, setLocation] = useState(null);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (countdown === null) return;
    if (countdown === 0) {
      setDialogOpen(false);
      sendSOS();
      setCountdown(null);
      return;
    }
    const timerId = setTimeout(() => setCountdown(countdown - 1), 1000);
    return () => clearTimeout(timerId);
  }, [countdown]);

  const fetchLocation = () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLocation({
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
        });
      },
      () => {
        setError("Unable to retrieve your location.");
      }
    );
  };

  const sendSOS = () => {
    setSending(true);
    setError(null);

    // Simulate sending SOS (you can integrate Supabase call here)
    setTimeout(() => {
      setSending(false);
      setLastStatus("🚨 SOS alert sent successfully!");
      alert(
        `🚨 SOS sent!\nMessage: ${message}\nLocation: ${
          location ? JSON.stringify(location) : "Not shared"
        }`
      );
    }, 2000);
  };

  const handleSendClick = () => {
    fetchLocation();
    setDialogOpen(true);
    setCountdown(5); // 5-second countdown
  };

  const cancelSend = () => {
    setDialogOpen(false);
    setCountdown(null);
    setLastStatus("SOS sending canceled.");
  };

  const handleCallEmergency = () => {
    window.location.href = "tel:112";
  };

  return (
    <Box sx={{ maxWidth: 600, mx: "auto", p: 4, textAlign: "center" }}>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: "bold" }}>
        SOS Emergency
      </Typography>

      <FormControl fullWidth sx={{ mb: 3 }}>
        <InputLabel id="message-label">Emergency Message</InputLabel>
        <Select
          labelId="message-label"
          value={message}
          label="Emergency Message"
          onChange={(e) => setMessage(e.target.value)}
        >
          {predefinedMessages.map((msg, idx) => (
            <MenuItem key={idx} value={msg}>
              {msg}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* 🔴 Blinking Round SOS Button */}
      <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
        <BlinkingSOSButton onClick={handleSendClick} disabled={sending}>
          {sending ? <CircularProgress size={24} color="inherit" /> : "SOS"}
        </BlinkingSOSButton>
      </Box>

      {/* ☎️ Call Emergency Button */}
      <Button
        variant="outlined"
        color="primary"
        onClick={handleCallEmergency}
        sx={{ mb: 3, width: "100%" }}
      >
        Call Emergency Number (112)
      </Button>

      {/* Alerts */}
      {lastStatus && (
        <Alert severity="success" sx={{ mb: 2 }}>
          {lastStatus}
        </Alert>
      )}
      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      {/* Confirmation Dialog */}
      <Dialog open={dialogOpen} onClose={cancelSend}>
        <DialogTitle>Confirm SOS</DialogTitle>
        <DialogContent>
          <Typography>
            Sending the following message in <strong>{countdown}</strong> seconds:
          </Typography>
          <Typography sx={{ mt: 2, fontWeight: "bold" }}>{message}</Typography>
          <Typography sx={{ mt: 2, fontStyle: "italic", fontSize: "0.9rem" }}>
            Location will {location ? "be included" : "not be included"}.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={cancelSend}>Cancel</Button>
          <Button onClick={() => setCountdown(0)} color="error">
            Send Now
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default SOS;
