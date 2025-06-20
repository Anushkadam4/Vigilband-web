
// import React from "react";
// import { Container, Typography, Box, Paper, Grid, Button } from "@mui/material";

// const Home = () => {
//   return (
//     <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
//       <Typography variant="h4" gutterBottom fontWeight="bold" color="primary">
//         Welcome to VigilBand Dashboard
//       </Typography>
//       <Typography variant="body1" sx={{ mb: 3 }}>
//         VigilBand helps keep you safe by detecting emergencies and sending instant alerts.
//         Here’s a quick overview of your device status and recent activity.
//       </Typography>

//       <Grid container spacing={3}>
//         {/* Status Card */}
//         <Grid item xs={12} sm={6}>
//           <Paper elevation={3} sx={{ p: 2 }}>
//             <Typography variant="h6" gutterBottom>
//               Device Status
//             </Typography>
//             <Typography>Battery: 85%</Typography>
//             <Typography>Connection: Connected</Typography>
//             <Typography>Last Sync: 10 minutes ago</Typography>
//             <Button variant="contained" color="primary" sx={{ mt: 2 }}>
//               Sync Now
//             </Button>
//           </Paper>
//         </Grid>

//         {/* Recent Alerts Card */}
//         <Grid item xs={12} sm={6}>
//           <Paper elevation={3} sx={{ p: 2 }}>
//             <Typography variant="h6" gutterBottom>
//               Recent Alerts
//             </Typography>
//             <Typography>No recent alerts</Typography>
//           </Paper>
//         </Grid>

//         {/* Safety Tips Card */}
//         <Grid item xs={12}>
//           <Paper elevation={3} sx={{ p: 2 }}>
//             <Typography variant="h6" gutterBottom>
//               Safety Tips
//             </Typography>
//             <ul>
//               <li>Always wear your VigilBand while outdoors.</li>
//               <li>Update your emergency contacts regularly.</li>
//               <li>Keep your device charged.</li>
//               <li>Stay aware of your surroundings.</li>
//             </ul>
//           </Paper>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// export default Home;

// import React from "react";
// import {
//   Box,
//   Typography,
//   Grid,
//   Paper,
//   Card,
//   CardContent,
//   Divider,
// } from "@mui/material";
// import { People, Warning, Place } from "@mui/icons-material";

// const Home = () => {
//   return (
//     <Box sx={{ p: 4 }}>
//       {/* Title */}
//       <Typography variant="h4" gutterBottom fontWeight="bold" textAlign="center">
//         Welcome to VigilBand Dashboard
//       </Typography>

//       {/* Quick Stats */}
//       <Grid container spacing={3} sx={{ my: 4 }}>
//         <Grid item xs={12} sm={4}>
//           <Card elevation={3}>
//             <CardContent sx={{ textAlign: "center" }}>
//               <People fontSize="large" color="primary" />
//               <Typography variant="h6" fontWeight="medium">Emergency Contacts</Typography>
//               <Typography variant="body2" color="text.secondary">
//                 Manage and update your emergency contacts.
//               </Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//         <Grid item xs={12} sm={4}>
//           <Card elevation={3}>
//             <CardContent sx={{ textAlign: "center" }}>
//               <Warning fontSize="large" color="error" />
//               <Typography variant="h6" fontWeight="medium">Last SOS</Typography>
//               <Typography variant="body2" color="text.secondary">
//                 No recent SOS alerts.
//               </Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//         <Grid item xs={12} sm={4}>
//           <Card elevation={3}>
//             <CardContent sx={{ textAlign: "center" }}>
//               <Place fontSize="large" color="success" />
//               <Typography variant="h6" fontWeight="medium">Location Tracking</Typography>
//               <Typography variant="body2" color="text.secondary">
//                 Real-time zone tracking enabled.
//               </Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//       </Grid>

//       {/* Divider */}
//       <Divider sx={{ my: 4 }} />

//       {/* Getting Started Instructions */}
//       <Typography variant="h5" fontWeight="bold" gutterBottom>
//         How to Get Started
//       </Typography>
//       <ul>
//         <li><Typography>Go to <strong>Emergency Contacts</strong> to add trusted people.</Typography></li>
//         <li><Typography>Enable your <strong>location</strong> in the browser.</Typography></li>
//         <li><Typography>Test the <strong>SOS</strong> feature to see how alerts work.</Typography></li>
//         <li><Typography>Customize alerts and preferences in <strong>Settings</strong>.</Typography></li>
//       </ul>

//       {/* Motivational Quote */}
//       <Paper elevation={2} sx={{ mt: 5, p: 3, backgroundColor: "#f0f4f8" }}>
//         <Typography variant="h6" fontStyle="italic" textAlign="center">
//           "Safety is not expensive, it's priceless."
//         </Typography>
//       </Paper>
//     </Box>
//   );
// };

// export default Home;

// src/pages/Home.jsx


// src/pages/Home.jsx


// 

// import React from "react";
// import {
//   Box,
//   Typography,
//   Grid,
//   Card,
//   CardContent,
//   Button,
//   Divider,
//   CircularProgress,
// } from "@mui/material";
// import ContactsIcon from "@mui/icons-material/Contacts";
// import WarningIcon from "@mui/icons-material/Warning";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import BatteryFullIcon from "@mui/icons-material/BatteryFull";
// import BluetoothConnectedIcon from "@mui/icons-material/BluetoothConnected";
// import SyncIcon from "@mui/icons-material/Sync";
// import { useNavigate } from "react-router-dom";

// const Home = () => {
//   const navigate = useNavigate();
//   const [syncing, setSyncing] = React.useState(false);

//   const handleSync = () => {
//     setSyncing(true);
//     // Simulate a sync process (replace this with real API call)
//     setTimeout(() => {
//       setSyncing(false);
//       alert("Device synced successfully!");
//     }, 2000);
//   };

//   return (
//     <Box sx={{ p: 4 }}>
//       <Typography variant="h4" gutterBottom>
//         Welcome to VigilBand Dashboard
//       </Typography>
//       <Typography variant="subtitle1" sx={{ mb: 4 }}>
//         Your AI-powered safety companion. Stay alert. Stay safe.
//       </Typography>

//       {/* Overview Cards */}
//       <Grid container spacing={3}>
//         <Grid item xs={12} md={4}>
//           <Card>
//             <CardContent>
//               <ContactsIcon fontSize="large" color="primary" />
//               <Typography variant="h6">Emergency Contacts</Typography>
//               <Typography>3 contacts saved</Typography>
//             </CardContent>
//           </Card>
//         </Grid>

//         <Grid item xs={12} md={4}>
//           <Card>
//             <CardContent>
//               <WarningIcon fontSize="large" color="error" />
//               <Typography variant="h6">Last SOS</Typography>
//               <Typography>2 days ago</Typography>
//             </CardContent>
//           </Card>
//         </Grid>

//         <Grid item xs={12} md={4}>
//           <Card>
//             <CardContent>
//               <LocationOnIcon fontSize="large" color="success" />
//               <Typography variant="h6">Your Zone Status</Typography>
//               <Typography>🟢 Safe Zone</Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//       </Grid>

//       {/* Device Info Section */}
//       <Box sx={{ mt: 5 }}>
//         <Typography variant="h6" gutterBottom>
//           Device Status
//         </Typography>
//         <Card>
//           <CardContent>
//             <Grid container spacing={3} alignItems="center">
//               <Grid item xs={12} md={3}>
//                 <BatteryFullIcon color="success" fontSize="large" />
//                 <Typography>Battery: 78%</Typography>
//               </Grid>
//               <Grid item xs={12} md={3}>
//                 <BluetoothConnectedIcon color="primary" fontSize="large" />
//                 <Typography>Status: Connected</Typography>
//               </Grid>
//               <Grid item xs={12} md={3}>
//                 <Typography>Device ID: VB-9342</Typography>
//               </Grid>
//               <Grid item xs={12} md={3}>
//                 <Typography>Last Sync: 10 mins ago</Typography>
//               </Grid>
//             </Grid>

//             {/* Sync Button */}
//             <Box sx={{ mt: 3, textAlign: "right" }}>
//               <Button
//                 variant="outlined"
//                 color="secondary"
//                 startIcon={syncing ? <CircularProgress size={20} /> : <SyncIcon />}
//                 onClick={handleSync}
//                 disabled={syncing}
//               >
//                 {syncing ? "Syncing..." : "Sync Device"}
//               </Button>
//             </Box>
//           </CardContent>
//         </Card>
//       </Box>

//       {/* Quick Actions */}
//       <Box sx={{ mt: 5 }}>
//         <Typography variant="h6" sx={{ mb: 2 }}>
//           Quick Actions
//         </Typography>
//         <Grid container spacing={2}>
//           <Grid item>
//             <Button variant="contained" color="error" onClick={() => navigate("/sos")}>
//               Go to SOS
//             </Button>
//           </Grid>
//           <Grid item>
//             <Button
//               variant="contained"
//               color="primary"
//               onClick={() => navigate("/emergency-contacts")}
//             >
//               Manage Emergency Contacts
//             </Button>
//           </Grid>
//         </Grid>
//       </Box>
//     </Box>
//   );
// };

// export default Home;

// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   Typography,
//   Grid,
//   Card,
//   CardContent,
//   Button,
//   CircularProgress,
// } from "@mui/material";
// import ContactsIcon from "@mui/icons-material/Contacts";
// import WarningIcon from "@mui/icons-material/Warning";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import BatteryFullIcon from "@mui/icons-material/BatteryFull";
// import BluetoothConnectedIcon from "@mui/icons-material/BluetoothConnected";
// import SyncIcon from "@mui/icons-material/Sync";
// import { useNavigate } from "react-router-dom";
// import { supabase } from "../supabaseClient"; // adjust the path if needed

// const Home = ({ user }) => {
//   const navigate = useNavigate();
//   const [syncing, setSyncing] = useState(false);
//   const [loadingData, setLoadingData] = useState(true);

//   const [emergencyContactsCount, setEmergencyContactsCount] = useState(0);
//   const [lastSOSDate, setLastSOSDate] = useState(null);
//   const [zoneStatus, setZoneStatus] = useState(null);
//   const [deviceStatus, setDeviceStatus] = useState(null);

//   // Fetch all required data
//   const fetchData = async () => {
//     if (!user) return;

//     setLoadingData(true);

//     try {
//       // Emergency contacts count
//       const { data: contactsData, error: contactsError } = await supabase
//         .from("emergency_contacts")
//         .select("id", { count: "exact" })
//         .eq("user_id", user.id);

//       if (contactsError) throw contactsError;
//       setEmergencyContactsCount(contactsData.length);

//       // Last SOS alert
//       const { data: sosData, error: sosError } = await supabase
//         .from("sos_alerts")
//         .select("created_at")
//         .eq("user_id", user.id)
//         .order("created_at", { ascending: false })
//         .limit(1)
//         .single();

//       if (sosError && sosError.code !== "PGRST116") throw sosError; // ignore no rows error
//       setLastSOSDate(sosData ? new Date(sosData.created_at) : null);

//       // Zone status
//       const { data: zoneData, error: zoneError } = await supabase
//         .from("user_zones")
//         .select("status")
//         .eq("user_id", user.id)
//         .single();

//       if (zoneError && zoneError.code !== "PGRST116") throw zoneError;
//       setZoneStatus(zoneData?.status || null);

//       // Device status
//       const { data: deviceData, error: deviceError } = await supabase
//         .from("device_status")
//         .select("battery, connected, device_id, last_sync")
//         .eq("user_id", user.id)
//         .single();

//       if (deviceError && deviceError.code !== "PGRST116") throw deviceError;
//       setDeviceStatus(deviceData || null);
//     } catch (error) {
//       console.error("Error fetching home data:", error.message);
//       // You can add some user feedback here if needed
//     }

//     setLoadingData(false);
//   };

//   console.log("Current user:", user);


//   // useEffect(() => {
//   //   fetchData();
//   // }, [user]);

//   React.useEffect(() => {
//     const fetchData = async () => {
//       if (!user) {
//         setLoadingData(false);  // Stop loader if no user
//         return;
//       }
//       // ... existing fetching logic ...
//     };
  
//     fetchData();
//   }, [user]);
  

//   // Sync button handler (replace with your real sync logic)
//   const handleSync = () => {
//     setSyncing(true);
//     setTimeout(() => {
//       setSyncing(false);
//       alert("Device synced successfully!");
//       fetchData(); // refresh data after sync
//     }, 2000);
//   };

//   // Helper to format last SOS time ago
//   const formatTimeAgo = (date) => {
//     if (!date) return "No alerts";
//     const diffMs = Date.now() - date.getTime();
//     const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
//     if (diffDays === 0) return "Today";
//     if (diffDays === 1) return "1 day ago";
//     return `${diffDays} days ago`;
//   };

//   return (
//     <Box sx={{ p: 4 }}>
//       <Typography variant="h4" gutterBottom>
//         Welcome to VigilBand Dashboard
//       </Typography>
//       <Typography variant="subtitle1" sx={{ mb: 4 }}>
//         Your AI-powered safety companion. Stay alert. Stay safe.
//       </Typography>

//       {loadingData ? (
//         <Box sx={{ display: "flex", justifyContent: "center", my: 5 }}>
//           <CircularProgress />
//         </Box>
//       ) : (
//         <>
//           {/* Overview Cards */}
//           <Grid container spacing={3}>
//             <Grid item xs={12} md={4}>
//               <Card>
//                 <CardContent>
//                   <ContactsIcon fontSize="large" color="primary" />
//                   <Typography variant="h6">Emergency Contacts</Typography>
//                   <Typography>{emergencyContactsCount} contacts saved</Typography>
//                 </CardContent>
//               </Card>
//             </Grid>

//             <Grid item xs={12} md={4}>
//               <Card>
//                 <CardContent>
//                   <WarningIcon fontSize="large" color="error" />
//                   <Typography variant="h6">Last SOS</Typography>
//                   <Typography>{formatTimeAgo(lastSOSDate)}</Typography>
//                 </CardContent>
//               </Card>
//             </Grid>

//             <Grid item xs={12} md={4}>
//               <Card>
//                 <CardContent>
//                   <LocationOnIcon fontSize="large" color="success" />
//                   <Typography variant="h6">Your Zone Status</Typography>
//                   <Typography>
//                     {zoneStatus === "safe" ? "🟢 Safe Zone" : "🔴 Danger Zone"}
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </Grid>
//           </Grid>

//           {/* Device Info Section */}
//           <Box sx={{ mt: 5 }}>
//             <Typography variant="h6" gutterBottom>
//               Device Status
//             </Typography>
//             <Card>
//               <CardContent>
//                 <Grid container spacing={3} alignItems="center">
//                   <Grid item xs={12} md={3} sx={{ textAlign: "center" }}>
//                     <BatteryFullIcon
//                       color={deviceStatus?.battery > 20 ? "success" : "error"}
//                       fontSize="large"
//                     />
//                     <Typography>Battery: {deviceStatus?.battery ?? "--"}%</Typography>
//                   </Grid>
//                   <Grid item xs={12} md={3} sx={{ textAlign: "center" }}>
//                     <BluetoothConnectedIcon
//                       color={deviceStatus?.connected ? "primary" : "error"}
//                       fontSize="large"
//                     />
//                     <Typography>
//                       Status: {deviceStatus?.connected ? "Connected" : "Disconnected"}
//                     </Typography>
//                   </Grid>
//                   <Grid item xs={12} md={3} sx={{ textAlign: "center" }}>
//                     <Typography>Device ID: {deviceStatus?.device_id || "--"}</Typography>
//                   </Grid>
//                   <Grid item xs={12} md={3} sx={{ textAlign: "center" }}>
//                     <Typography>
//                       Last Sync:{" "}
//                       {deviceStatus?.last_sync
//                         ? new Date(deviceStatus.last_sync).toLocaleString()
//                         : "--"}
//                     </Typography>
//                   </Grid>
//                 </Grid>

//                 {/* Sync Button */}
//                 <Box sx={{ mt: 3, textAlign: "right" }}>
//                   <Button
//                     variant="outlined"
//                     color="secondary"
//                     startIcon={syncing ? <CircularProgress size={20} /> : <SyncIcon />}
//                     onClick={handleSync}
//                     disabled={syncing}
//                   >
//                     {syncing ? "Syncing..." : "Sync Device"}
//                   </Button>
//                 </Box>
//               </CardContent>
//             </Card>
//           </Box>

//           {/* Quick Actions */}
//           <Box sx={{ mt: 5 }}>
//             <Typography variant="h6" sx={{ mb: 2 }}>
//               Quick Actions
//             </Typography>
//             <Grid container spacing={2}>
//               <Grid item>
//                 <Button variant="contained" color="error" onClick={() => navigate("/sos")}>
//                   Go to SOS
//                 </Button>
//               </Grid>
//               <Grid item>
//                 <Button
//                   variant="contained"
//                   color="primary"
//                   onClick={() => navigate("/emergency-contacts")}
//                 >
//                   Manage Emergency Contacts
//                 </Button>
//               </Grid>
//             </Grid>
//           </Box>
//         </>
//       )}
//     </Box>
//   );
// };

// export default Home;

// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   Typography,
//   Grid,
//   Card,
//   CardContent,
//   Button,
//   CircularProgress,
// } from "@mui/material";
// import ContactsIcon from "@mui/icons-material/Contacts";
// import WarningIcon from "@mui/icons-material/Warning";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import BatteryFullIcon from "@mui/icons-material/BatteryFull";
// import BluetoothConnectedIcon from "@mui/icons-material/BluetoothConnected";
// import SyncIcon from "@mui/icons-material/Sync";
// import { useNavigate } from "react-router-dom";
// import { supabase } from "../supabaseClient";

// const Home = ({ user }) => {
//   const navigate = useNavigate();
//   const [syncing, setSyncing] = useState(false);
//   const [loadingData, setLoadingData] = useState(true);

//   const [emergencyContactsCount, setEmergencyContactsCount] = useState(0);
//   const [lastSOSDate, setLastSOSDate] = useState(null);
//   const [zoneStatus, setZoneStatus] = useState(null);
//   const [deviceStatus, setDeviceStatus] = useState(null);

//   // Fetch data from Supabase
//   const fetchData = async () => {
//     if (!user) {
//       setLoadingData(false);
//       return;
//     }

//     setLoadingData(true);
//     try {
//       const userId = user.id;

//       // Emergency Contacts
//       const { data: contactsData, error: contactsError } = await supabase
//         .from("emergency_contacts")
//         .select("id")
//         .eq("user_id", userId);

//       if (contactsError) throw contactsError;
//       setEmergencyContactsCount(contactsData.length);

//       // SOS Alerts
//       const { data: sosData, error: sosError } = await supabase
//         .from("sos_alerts")
//         .select("created_at")
//         .eq("user_id", userId)
//         .order("created_at", { ascending: false })
//         .limit(1)
//         .maybeSingle();

//       if (sosError) throw sosError;
//       setLastSOSDate(sosData?.created_at ? new Date(sosData.created_at) : null);

//       // Zone Status
//       const { data: zoneData, error: zoneError } = await supabase
//         .from("user_zones")
//         .select("status")
//         .eq("user_id", userId)
//         .maybeSingle();

//       if (zoneError) throw zoneError;
//       setZoneStatus(zoneData?.status ?? null);

//       // Device Status
//       const { data: deviceData, error: deviceError } = await supabase
//         .from("device_status")
//         .select("battery, connected, device_id, last_sync")
//         .eq("user_id", userId)
//         .maybeSingle();

//       if (deviceError) throw deviceError;
//       setDeviceStatus(deviceData ?? null);
//     } catch (err) {
//       console.error("Error loading data:", err.message);
//     }

//     setLoadingData(false);
//   };

//   useEffect(() => {
//     fetchData();
//   }, [user]);

//   const handleSync = () => {
//     setSyncing(true);
//     setTimeout(() => {
//       setSyncing(false);
//       alert("Device synced successfully!");
//       fetchData();
//     }, 2000);
//   };

//   const formatTimeAgo = (date) => {
//     if (!date) return "No alerts";
//     const diffMs = Date.now() - date.getTime();
//     const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
//     if (diffDays === 0) return "Today";
//     if (diffDays === 1) return "1 day ago";
//     return `${diffDays} days ago`;
//   };

//   return (
//     <Box sx={{ p: 4 }}>
//       <Typography variant="h4" gutterBottom>
//         Welcome to VigilBand Dashboard
//       </Typography>
//       <Typography variant="subtitle1" sx={{ mb: 4 }}>
//         Your AI-powered safety companion. Stay alert. Stay safe.
//       </Typography>

//       {loadingData ? (
//         <Box sx={{ display: "flex", justifyContent: "center", my: 5 }}>
//           <CircularProgress />
//         </Box>
//       ) : (
//         <>
//           {/* Overview Cards */}
//           <Grid container spacing={3}>
//             <Grid item xs={12} md={4}>
//               <Card>
//                 <CardContent>
//                   <ContactsIcon fontSize="large" color="primary" />
//                   <Typography variant="h6">Emergency Contacts</Typography>
//                   <Typography>{emergencyContactsCount} contacts saved</Typography>
//                 </CardContent>
//               </Card>
//             </Grid>

//             <Grid item xs={12} md={4}>
//               <Card>
//                 <CardContent>
//                   <WarningIcon fontSize="large" color="error" />
//                   <Typography variant="h6">Last SOS</Typography>
//                   <Typography>{formatTimeAgo(lastSOSDate)}</Typography>
//                 </CardContent>
//               </Card>
//             </Grid>

//             <Grid item xs={12} md={4}>
//               <Card>
//                 <CardContent>
//                   <LocationOnIcon fontSize="large" color="success" />
//                   <Typography variant="h6">Your Zone Status</Typography>
//                   <Typography>
//                     {zoneStatus === "safe" ? "🟢 Safe Zone" : "🔴 Danger Zone"}
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </Grid>
//           </Grid>

//           {/* Device Status */}
//           <Box sx={{ mt: 5 }}>
//             <Typography variant="h6" gutterBottom>
//               Device Status
//             </Typography>
//             <Card>
//               <CardContent>
//                 <Grid container spacing={3} alignItems="center">
//                   <Grid item xs={12} md={3} sx={{ textAlign: "center" }}>
//                     <BatteryFullIcon
//                       color={deviceStatus?.battery > 20 ? "success" : "error"}
//                       fontSize="large"
//                     />
//                     <Typography>Battery: {deviceStatus?.battery ?? "--"}%</Typography>
//                   </Grid>
//                   <Grid item xs={12} md={3} sx={{ textAlign: "center" }}>
//                     <BluetoothConnectedIcon
//                       color={deviceStatus?.connected ? "primary" : "error"}
//                       fontSize="large"
//                     />
//                     <Typography>
//                       Status: {deviceStatus?.connected ? "Connected" : "Disconnected"}
//                     </Typography>
//                   </Grid>
//                   <Grid item xs={12} md={3} sx={{ textAlign: "center" }}>
//                     <Typography>Device ID: {deviceStatus?.device_id || "--"}</Typography>
//                   </Grid>
//                   <Grid item xs={12} md={3} sx={{ textAlign: "center" }}>
//                     <Typography>
//                       Last Sync:{" "}
//                       {deviceStatus?.last_sync
//                         ? new Date(deviceStatus.last_sync).toLocaleString()
//                         : "--"}
//                     </Typography>
//                   </Grid>
//                 </Grid>

//                 <Box sx={{ mt: 3, textAlign: "right" }}>
//                   <Button
//                     variant="outlined"
//                     color="secondary"
//                     startIcon={syncing ? <CircularProgress size={20} /> : <SyncIcon />}
//                     onClick={handleSync}
//                     disabled={syncing}
//                   >
//                     {syncing ? "Syncing..." : "Sync Device"}
//                   </Button>
//                 </Box>
//               </CardContent>
//             </Card>
//           </Box>

//           {/* Quick Actions */}
//           <Box sx={{ mt: 5 }}>
//             <Typography variant="h6" sx={{ mb: 2 }}>
//               Quick Actions
//             </Typography>
//             <Grid container spacing={2}>
//               <Grid item>
//                 <Button variant="contained" color="error" onClick={() => navigate("/sos")}>
//                   Go to SOS
//                 </Button>
//               </Grid>
//               <Grid item>
//                 <Button
//                   variant="contained"
//                   color="primary"
//                   onClick={() => navigate("/emergency-contacts")}
//                 >
//                   Manage Emergency Contacts
//                 </Button>
//               </Grid>
//             </Grid>
//           </Box>
//         </>
//       )}
//     </Box>
//   );
// };

// export default Home;

import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  CircularProgress,
  Skeleton,
} from "@mui/material";
import ContactsIcon from "@mui/icons-material/Contacts";
import WarningIcon from "@mui/icons-material/Warning";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BatteryFullIcon from "@mui/icons-material/BatteryFull";
import BluetoothConnectedIcon from "@mui/icons-material/BluetoothConnected";
import SyncIcon from "@mui/icons-material/Sync";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";

const Home = ({ user }) => {
  const navigate = useNavigate();
  const [syncing, setSyncing] = useState(false);
  const [loadingData, setLoadingData] = useState(true);

  const [emergencyContactsCount, setEmergencyContactsCount] = useState(0);
  const [lastSOSDate, setLastSOSDate] = useState(null);
  const [zoneStatus, setZoneStatus] = useState(null);
  const [deviceStatus, setDeviceStatus] = useState(null);

  // Fetch all required data
  const fetchData = async () => {
    if (!user) {
      setLoadingData(false);
      return;
    }
    setLoadingData(true);

    try {
      // Emergency contacts count
      const { data: contactsData, error: contactsError } = await supabase
        .from("emergency_contacts")
        .select("id", { count: "exact" })
        .eq("user_id", user.id);

      if (contactsError) throw contactsError;
      setEmergencyContactsCount(contactsData.length);

      // Last SOS alert
      const { data: sosData, error: sosError } = await supabase
        .from("sos_alerts")
        .select("created_at")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false })
        .limit(1)
        .single();

      if (sosError && sosError.code !== "PGRST116") throw sosError;
      setLastSOSDate(sosData ? new Date(sosData.created_at) : null);

      // Zone status
      const { data: zoneData, error: zoneError } = await supabase
        .from("user_zones")
        .select("status")
        .eq("user_id", user.id)
        .single();

      if (zoneError && zoneError.code !== "PGRST116") throw zoneError;
      setZoneStatus(zoneData?.status || null);

      // Device status
      const { data: deviceData, error: deviceError } = await supabase
        .from("device_status")
        .select("battery, connected, device_id, last_sync")
        .eq("user_id", user.id)
        .single();

      if (deviceError && deviceError.code !== "PGRST116") throw deviceError;
      setDeviceStatus(deviceData || null);
    } catch (error) {
      console.error("Error fetching home data:", error.message);
    }

    setLoadingData(false);
  };

  useEffect(() => {
    fetchData();
  }, [user]);

  const handleSync = () => {
    setSyncing(true);
    setTimeout(() => {
      setSyncing(false);
      alert("Device synced successfully!");
      fetchData(); // refresh after sync
    }, 2000);
  };

  const formatTimeAgo = (date) => {
    if (!date) return "No alerts";
    const diffMs = Date.now() - date.getTime();
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    if (diffDays === 0) return "Today";
    if (diffDays === 1) return "1 day ago";
    return `${diffDays} days ago`;
  };

  // Style for clickable cards with hover effect
  const cardStyle = {
    cursor: "pointer",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    "&:hover": {
      transform: "scale(1.03)",
      boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
    },
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Welcome to VigilBand Dashboard
      </Typography>
      <Typography variant="subtitle1" sx={{ mb: 4 }}>
        Your AI-powered safety companion. Stay alert. Stay safe.
      </Typography>

      {loadingData ? (
        <Grid container spacing={3}>
          {[1, 2, 3].map((_, i) => (
            <Grid item xs={12} md={4} key={i}>
              <Skeleton variant="rectangular" height={120} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Grid container spacing={3}>
          {/* Emergency Contacts Card */}
          <Grid item xs={12} md={4}>
            <Card
              sx={cardStyle}
              onClick={() => navigate("/emergency-contacts")}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => {
                if (e.key === "Enter") navigate("/emergency-contacts");
              }}
            >
              <CardContent>
                <ContactsIcon fontSize="large" color="primary" />
                <Typography variant="h6">Emergency Contacts</Typography>
                <Typography>{emergencyContactsCount} contacts saved</Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Last SOS Card */}
          <Grid item xs={12} md={4}>
            <Card
              sx={cardStyle}
              onClick={() => navigate("/sos")}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => {
                if (e.key === "Enter") navigate("/sos");
              }}
            >
              <CardContent>
                <WarningIcon fontSize="large" color="error" />
                <Typography variant="h6">Last SOS</Typography>
                <Typography>{formatTimeAgo(lastSOSDate)}</Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Your Zone Status Card */}
          <Grid item xs={12} md={4}>
            <Card
              sx={cardStyle}
              onClick={() => navigate("/your-zone")}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => {
                if (e.key === "Enter") navigate("/your-zone");
              }}
            >
              <CardContent>
                <LocationOnIcon fontSize="large" color="success" />
                <Typography variant="h6">Your Zone Status</Typography>
                <Typography>
                  {zoneStatus === "safe" ? "🟢 Safe Zone" : "🔴 Danger Zone"}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      )}

      {/* Device Info Section */}
      {!loadingData && (
        <Box sx={{ mt: 5 }}>
          <Typography variant="h6" gutterBottom>
            Device Status
          </Typography>
          <Card>
            <CardContent>
              <Grid container spacing={3} alignItems="center">
                <Grid item xs={12} md={3} sx={{ textAlign: "center" }}>
                  <BatteryFullIcon
                    color={deviceStatus?.battery > 20 ? "success" : "error"}
                    fontSize="large"
                  />
                  <Typography>Battery: {deviceStatus?.battery ?? "--"}%</Typography>
                </Grid>
                <Grid item xs={12} md={3} sx={{ textAlign: "center" }}>
                  <BluetoothConnectedIcon
                    color={deviceStatus?.connected ? "primary" : "error"}
                    fontSize="large"
                  />
                  <Typography>
                    Status: {deviceStatus?.connected ? "Connected" : "Disconnected"}
                  </Typography>
                </Grid>
                <Grid item xs={12} md={3} sx={{ textAlign: "center" }}>
                  <Typography>Device ID: {deviceStatus?.device_id || "--"}</Typography>
                </Grid>
                <Grid item xs={12} md={3} sx={{ textAlign: "center" }}>
                  <Typography>
                    Last Sync:{" "}
                    {deviceStatus?.last_sync
                      ? new Date(deviceStatus.last_sync).toLocaleString()
                      : "--"}
                  </Typography>
                </Grid>
              </Grid>

              {/* Sync Button */}
              <Box sx={{ mt: 3, textAlign: "right" }}>
                <Button
                  variant="outlined"
                  color="secondary"
                  startIcon={syncing ? <CircularProgress size={20} /> : <SyncIcon />}
                  onClick={handleSync}
                  disabled={syncing}
                >
                  {syncing ? "Syncing..." : "Sync Device"}
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Box>
      )}

      {/* Quick Actions */}
      {!loadingData && (
        <Box sx={{ mt: 5 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Quick Actions
          </Typography>
          <Grid container spacing={2}>
            <Grid item>
              <Button variant="contained" color="error" onClick={() => navigate("/sos")}>
                Go to SOS
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                onClick={() => navigate("/emergency-contacts")}
              >
                Manage Emergency Contacts
              </Button>
            </Grid>
          </Grid>
        </Box>
      )}
    </Box>
  );
};

export default Home;

// import React, { useState, useEffect } from "react";
// supabase.from("emergency_contacts1").select("id").eq("user_id", user.id)

// import {
//   Box,
//   Typography,
//   Grid,
//   Card,
//   CardContent,
//   Button,
//   CircularProgress,
// } from "@mui/material";
// import {
//   Contacts as ContactsIcon,
//   Warning as WarningIcon,
//   LocationOn as LocationOnIcon,
//   BatteryFull as BatteryFullIcon,
//   BluetoothConnected as BluetoothConnectedIcon,
//   Sync as SyncIcon,
//   Refresh as RefreshIcon,
// } from "@mui/icons-material";
// import { useNavigate } from "react-router-dom";
// import { supabase } from "../supabaseClient";

// const Home = ({ user }) => {
//   const navigate = useNavigate();
//   const [syncing, setSyncing] = useState(false);
//   const [loadingData, setLoadingData] = useState(true);

//   const [emergencyContactsCount, setEmergencyContactsCount] = useState(0);
//   const [lastSOSDate, setLastSOSDate] = useState(null);
//   const [zoneStatus, setZoneStatus] = useState(null);
//   const [deviceStatus, setDeviceStatus] = useState(null);

//   // Main fetch function
//   const fetchData = async () => {
//     if (!user) return;

//     setLoadingData(true);

//     try {
//       const [{ data: contacts }, { data: sos }, { data: zone }, { data: device }] = await Promise.all([
//         supabase.from("emergency_contacts").select("id").eq("user_id", user.id),
//         supabase.from("sos_alerts").select("created_at").eq("user_id", user.id).order("created_at", { ascending: false }).limit(1),
//         supabase.from("user_zones").select("status").eq("user_id", user.id).single(),
//         supabase.from("device_status").select("*").eq("user_id", user.id).single(),
//       ]);

//       setEmergencyContactsCount(contacts?.length || 0);
//       setLastSOSDate(sos?.[0]?.created_at ? new Date(sos[0].created_at) : null);
//       setZoneStatus(zone?.status || "unknown");
//       setDeviceStatus(device || null);
//     } catch (err) {
//       console.error("Fetch error:", err.message);
//     }

//     setLoadingData(false);
//   };

//   // Manual Sync
//   // const handleSync = () => {
//   //   setSyncing(true);
//   //   setTimeout(() => {
//   //     fetchData();
//   //     setSyncing(false);
//   //   }, 1000);
//   // };

//   const handleSync = async () => {
//   setSyncing(true);

//   try {
//     const response = await fetch("http://localhost:4000/update-device", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         user_id: user.id,               // 👈 make sure `user` is passed as prop
//         battery: 78,                    // sample data; replace with real values
//         connected: true,
//         device_id: "VB-9342",
//       }),
//     });

//     const data = await response.json();

//     if (response.ok) {
//       alert("Device synced successfully!");
//       fetchData(); // refresh device status from Supabase
//     } else {
//       alert("Failed to sync: " + data.error);
//     }
//   } catch (err) {
//     alert("Error syncing device: " + err.message);
//   }

//   setSyncing(false);
// };


//   // Auto Refresh every 10 seconds
//   useEffect(() => {
//   const fetchData = async () => {
//     if (!user) {
//       setLoadingData(false);  // stop loading if no user
//       return;
//     }

//     setLoadingData(true);

//     try {
//       // Your Supabase queries here...
//       // ...
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     } finally {
//       setLoadingData(false); // ALWAYS stop loading in finally
//     }
//   };

//   fetchData();
// }, [user]);

//   const formatTimeAgo = (date) => {
//     if (!date) return "No alerts";
//     const diff = Math.floor((Date.now() - new Date(date).getTime()) / 1000);
//     const mins = Math.floor(diff / 60);
//     const hrs = Math.floor(mins / 60);
//     const days = Math.floor(hrs / 24);
//     if (days > 0) return `${days} day(s) ago`;
//     if (hrs > 0) return `${hrs} hour(s) ago`;
//     if (mins > 0) return `${mins} min(s) ago`;
//     return "Just now";
//   };

//   return (
//     <Box sx={{ p: 4 }}>
//       <Typography variant="h4" gutterBottom>
//         Welcome to VigilBand Dashboard
//       </Typography>
//       <Typography variant="subtitle1" sx={{ mb: 4 }}>
//         Your AI-powered safety companion. Stay alert. Stay safe.
//       </Typography>

//       {loadingData ? (
//         <Box sx={{ display: "flex", justifyContent: "center", my: 5 }}>
//           <CircularProgress />
//         </Box>
//       ) : (
//         <>
//           <Grid container spacing={3}>
//             <Grid item xs={12} md={4}>
//               <Card>
//                 <CardContent>
//                   <ContactsIcon fontSize="large" color="primary" />
//                   <Typography variant="h6">Emergency Contacts</Typography>
//                   <Typography>{emergencyContactsCount} contact(s) saved</Typography>
//                 </CardContent>
//               </Card>
//             </Grid>

//             <Grid item xs={12} md={4}>
//               <Card>
//                 <CardContent>
//                   <WarningIcon fontSize="large" color="error" />
//                   <Typography variant="h6">Last SOS</Typography>
//                   <Typography>{formatTimeAgo(lastSOSDate)}</Typography>
//                 </CardContent>
//               </Card>
//             </Grid>

//             <Grid item xs={12} md={4}>
//               <Card>
//                 <CardContent>
//                   <LocationOnIcon fontSize="large" color="success" />
//                   <Typography variant="h6">Zone Status</Typography>
//                   <Typography>
//                     {zoneStatus === "safe" ? "🟢 Safe Zone" : "🔴 Danger Zone"}
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </Grid>
//           </Grid>

//           <Box sx={{ mt: 5 }}>
//             <Typography variant="h6" gutterBottom>
//               Device Status
//             </Typography>
//             <Card>
//               <CardContent>
//                 <Grid container spacing={2} alignItems="center">
//                   <Grid item xs={6} md={3}>
//                     <BatteryFullIcon color={deviceStatus?.battery > 20 ? "success" : "error"} fontSize="large" />
//                     <Typography>Battery: {deviceStatus?.battery ?? "--"}%</Typography>
//                   </Grid>
//                   <Grid item xs={6} md={3}>
//                     <BluetoothConnectedIcon color={deviceStatus?.connected ? "primary" : "error"} fontSize="large" />
//                     <Typography>Status: {deviceStatus?.connected ? "Connected" : "Disconnected"}</Typography>
//                   </Grid>
//                   <Grid item xs={6} md={3}>
//                     <Typography>Device ID: {deviceStatus?.device_id || "--"}</Typography>
//                   </Grid>
//                   <Grid item xs={6} md={3}>
//                     <Typography>
//                       Last Sync:{" "}
//                       {deviceStatus?.last_sync
//                         ? new Date(deviceStatus.last_sync).toLocaleString()
//                         : "--"}
//                     </Typography>
//                   </Grid>
//                 </Grid>

//                 <Box sx={{ mt: 3, textAlign: "right" }}>
//                   <Button
//                     variant="contained"
//                     color="secondary"
//                     startIcon={syncing ? <CircularProgress size={20} /> : <RefreshIcon />}
//                     onClick={handleSync}
//                     disabled={syncing}
//                   >
//                     {syncing ? "Syncing..." : "Sync Device"}
//                   </Button>
//                 </Box>
//               </CardContent>
//             </Card>
//           </Box>

//           <Box sx={{ mt: 5 }}>
//             <Typography variant="h6" sx={{ mb: 2 }}>
//               Quick Actions
//             </Typography>
//             <Grid container spacing={2}>
//               <Grid item>
//                 <Button variant="contained" color="error" onClick={() => navigate("/sos")}>
//                   Go to SOS
//                 </Button>
//               </Grid>
//               <Grid item>
//                 <Button
//                   variant="contained"
//                   color="primary"
//                   onClick={() => navigate("/emergency-contacts")}
//                 >
//                   Manage Emergency Contacts
//                 </Button>
//               </Grid>
//             </Grid>
//           </Box>
//         </>
//       )}
//     </Box>
//   );
// };

// export default Home;

// import React, { useState, useEffect } from "react";
// import { supabase } from "./supabaseClient";
// import {
//   Box,
//   Typography,
//   Grid,
//   Card,
//   CardContent,
//   Button,
//   CircularProgress,
// } from "@mui/material";
// import {
//   Contacts as ContactsIcon,
//   Warning as WarningIcon,
//   LocationOn as LocationOnIcon,
//   BatteryFull as BatteryFullIcon,
//   BluetoothConnected as BluetoothConnectedIcon,
//   Refresh as RefreshIcon,
// } from "@mui/icons-material";
// import { useNavigate } from "react-router-dom";

// const Home = () => {
//   const navigate = useNavigate();
//   const [user, setUser] = useState(null);
//   const [syncing, setSyncing] = useState(false);
//   const [loadingData, setLoadingData] = useState(true);

//   const [emergencyContactsCount, setEmergencyContactsCount] = useState(0);
//   const [lastSOSDate, setLastSOSDate] = useState(null);
//   const [zoneStatus, setZoneStatus] = useState(null);
//   const [deviceStatus, setDeviceStatus] = useState(null);

//   // Fetch user on mount
//   useEffect(() => {
//     const fetchUser = async () => {
//       const {
//         data: { user },
//       } = await supabase.auth.getUser();
//       if (user) {
//         setUser(user);
//       }
//     };
//     fetchUser();
//   }, []);

//   // Main fetch function
//   const fetchData = async () => {
//     if (!user) return;
//     setLoadingData(true);

//     try {
//       const [{ data: contacts }, { data: sos }, { data: zone }, { data: device }] =
//         await Promise.all([
//           supabase.from("emergency_contacts1").select("id").eq("user_id", user.id),
//           supabase
//             .from("sos_alerts")
//             .select("created_at")
//             .eq("user_id", user.id)
//             .order("created_at", { ascending: false })
//             .limit(1),
//           supabase.from("user_zones").select("status").eq("user_id", user.id).single(),
//           supabase.from("device_status").select("*").eq("user_id", user.id).single(),
//         ]);

//       setEmergencyContactsCount(contacts?.length || 0);
//       setLastSOSDate(sos?.[0]?.created_at ? new Date(sos[0].created_at) : null);
//       setZoneStatus(zone?.status || "unknown");
//       setDeviceStatus(device || null);
//     } catch (err) {
//       console.error("Fetch error:", err.message);
//     }

//     setLoadingData(false);
//   };

//   // Manual Sync
//   const handleSync = async () => {
//     if (!user) return;
//     setSyncing(true);

//     try {
//       const response = await fetch("http://localhost:4000/update-device", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           user_id: user.id,
//           battery: 78,
//           connected: true,
//           device_id: "VB-9342",
//         }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         alert("Device synced successfully!");
//         fetchData();
//       } else {
//         alert("Failed to sync: " + data.error);
//       }
//     } catch (err) {
//       alert("Error syncing device: " + err.message);
//     }

//     setSyncing(false);
//   };

//   // Fetch data when user is available
//   useEffect(() => {
//     if (user) {
//       fetchData();
//     }
//   }, [user]);

//   const formatTimeAgo = (date) => {
//     if (!date) return "No alerts";
//     const diff = Math.floor((Date.now() - new Date(date).getTime()) / 1000);
//     const mins = Math.floor(diff / 60);
//     const hrs = Math.floor(mins / 60);
//     const days = Math.floor(hrs / 24);
//     if (days > 0) return `${days} day(s) ago`;
//     if (hrs > 0) return `${hrs} hour(s) ago`;
//     if (mins > 0) return `${mins} min(s) ago`;
//     return "Just now";
//   };

//   return (
//     <Box sx={{ p: 4 }}>
//       <Typography variant="h4" gutterBottom>
//         Welcome to VigilBand Dashboard
//       </Typography>
//       <Typography variant="subtitle1" sx={{ mb: 4 }}>
//         Your AI-powered safety companion. Stay alert. Stay safe.
//       </Typography>

//       {loadingData ? (
//         <Box sx={{ display: "flex", justifyContent: "center", my: 5 }}>
//           <CircularProgress />
//         </Box>
//       ) : (
//         <>
//           <Grid container spacing={3}>
//             <Grid item xs={12} md={4}>
//               <Card>
//                 <CardContent>
//                   <ContactsIcon fontSize="large" color="primary" />
//                   <Typography variant="h6">Emergency Contacts</Typography>
//                   <Typography>{emergencyContactsCount} contact(s) saved</Typography>
//                 </CardContent>
//               </Card>
//             </Grid>

//             <Grid item xs={12} md={4}>
//               <Card>
//                 <CardContent>
//                   <WarningIcon fontSize="large" color="error" />
//                   <Typography variant="h6">Last SOS</Typography>
//                   <Typography>{formatTimeAgo(lastSOSDate)}</Typography>
//                 </CardContent>
//               </Card>
//             </Grid>

//             <Grid item xs={12} md={4}>
//               <Card>
//                 <CardContent>
//                   <LocationOnIcon fontSize="large" color="success" />
//                   <Typography variant="h6">Zone Status</Typography>
//                   <Typography>
//                     {zoneStatus === "safe" ? "🟢 Safe Zone" : "🔴 Danger Zone"}
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </Grid>
//           </Grid>

//           <Box sx={{ mt: 5 }}>
//             <Typography variant="h6" gutterBottom>
//               Device Status
//             </Typography>
//             <Card>
//               <CardContent>
//                 <Grid container spacing={2} alignItems="center">
//                   <Grid item xs={6} md={3}>
//                     <BatteryFullIcon
//                       color={deviceStatus?.battery > 20 ? "success" : "error"}
//                       fontSize="large"
//                     />
//                     <Typography>
//                       Battery: {deviceStatus?.battery ?? "--"}%
//                     </Typography>
//                   </Grid>
//                   <Grid item xs={6} md={3}>
//                     <BluetoothConnectedIcon
//                       color={deviceStatus?.connected ? "primary" : "error"}
//                       fontSize="large"
//                     />
//                     <Typography>
//                       Status: {deviceStatus?.connected ? "Connected" : "Disconnected"}
//                     </Typography>
//                   </Grid>
//                   <Grid item xs={6} md={3}>
//                     <Typography>
//                       Device ID: {deviceStatus?.device_id || "--"}
//                     </Typography>
//                   </Grid>
//                   <Grid item xs={6} md={3}>
//                     <Typography>
//                       Last Sync:{" "}
//                       {deviceStatus?.last_sync
//                         ? new Date(deviceStatus.last_sync).toLocaleString()
//                         : "--"}
//                     </Typography>
//                   </Grid>
//                 </Grid>

//                 <Box sx={{ mt: 3, textAlign: "right" }}>
//                   <Button
//                     variant="contained"
//                     color="secondary"
//                     startIcon={syncing ? <CircularProgress size={20} /> : <RefreshIcon />}
//                     onClick={handleSync}
//                     disabled={syncing}
//                   >
//                     {syncing ? "Syncing..." : "Sync Device"}
//                   </Button>
//                 </Box>
//               </CardContent>
//             </Card>
//           </Box>

//           <Box sx={{ mt: 5 }}>
//             <Typography variant="h6" sx={{ mb: 2 }}>
//               Quick Actions
//             </Typography>
//             <Grid container spacing={2}>
//               <Grid item>
//                 <Button
//                   variant="contained"
//                   color="error"
//                   onClick={() => navigate("/sos")}
//                 >
//                   Go to SOS
//                 </Button>
//               </Grid>
//               <Grid item>
//                 <Button
//                   variant="contained"
//                   color="primary"
//                   onClick={() => navigate("/emergency-contacts")}
//                 >
//                   Manage Emergency Contacts
//                 </Button>
//               </Grid>
//             </Grid>
//           </Box>
//         </>
//       )}
//     </Box>
//   );
// };

// export default Home;
