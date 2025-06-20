// import React from 'react';

// function YourZone() {
//   return (
//     <div>
//       <h1>Your Zone</h1>
//       <p>Welcome to Your Zone page.</p>
//     </div>
//   );
// }

// export default YourZone;

import React, { useState, useCallback } from "react";
import { Container, Typography, Paper, Button, Box } from "@mui/material";
import { GoogleMap, LoadScript, Circle, Marker } from "@react-google-maps/api";

const apiKey= process.env.AIzaSyCCDPXMxO6KpJKPgTm8bfwy7CrCgWh44pc

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 26.7271,  // Example lat (change to your actual safe zone center)
  lng: 92.8012,
};

const zoneRadius = 500; // in meters

const YourZone = () => {
  const [insideZone, setInsideZone] = useState(true); // example status

  const onLoad = useCallback((map) => {
    // Can save map instance or do more advanced stuff here if needed
  }, []);

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom fontWeight="bold" color="primary">
        Your Safe Zone
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        This is your geofenced safe zone. VigilBand will alert you if you leave this area.
      </Typography>

      <Paper elevation={3} sx={{ p: 2, mb: 3 }}>
        <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={15}
            onLoad={onLoad}
          >
            {/* Zone circle */}
            <Circle
              center={center}
              radius={zoneRadius}
              options={{
                fillColor: "#1976d2",
                fillOpacity: 0.2,
                strokeColor: "#1976d2",
                strokeOpacity: 0.7,
                strokeWeight: 2,
              }}
            />
            {/* Marker for center */}
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      </Paper>

      <Paper elevation={3} sx={{ p: 2, mb: 3 }}>
        <Typography variant="h6">Zone Status:</Typography>
        <Typography color={insideZone ? "green" : "error"} sx={{ mb: 2 }}>
          {insideZone ? "You are inside your safe zone." : "You are outside your safe zone!"}
        </Typography>

        <Button variant="contained" color="primary">
          Update Zone
        </Button>
      </Paper>
    </Container>
  );
};

export default YourZone;
