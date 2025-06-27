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
                  <Typography>
                    Battery: {deviceStatus?.battery ?? "--"}%
                  </Typography>
                </Grid>
                <Grid item xs={12} md={3} sx={{ textAlign: "center" }}>
                  <BluetoothConnectedIcon
                    color={deviceStatus?.connected ? "primary" : "error"}
                    fontSize="large"
                  />
                  <Typography>
                    Status:{" "}
                    {deviceStatus?.connected ? "Connected" : "Disconnected"}
                  </Typography>
                </Grid>
                <Grid item xs={12} md={3} sx={{ textAlign: "center" }}>
                  <Typography>
                    Device ID: {deviceStatus?.device_id || "--"}
                  </Typography>
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
                  startIcon={
                    syncing ? <CircularProgress size={20} /> : <SyncIcon />
                  }
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
              <Button
                variant="contained"
                color="error"
                onClick={() => navigate("/sos")}
              >
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
