// import express from "express";
// import cors from "cors";
// import { createClient } from "@supabase/supabase-js";
// import dotenv from "dotenv";

// dotenv.config();

// const app = express();
// const port = process.env.PORT || 4000;

// // Enable CORS if your device/gateway calls from different origin
// app.use(cors());

// // Parse JSON bodies
// app.use(express.json());

// // Initialize Supabase client (use service role key for trusted server environment)
// const supabase = createClient(
//   process.env.SUPABASE_URL,
//   process.env.SUPABASE_SERVICE_ROLE_KEY
// );

// app.post("/device-status", async (req, res) => {
//   const { user_id, battery, connected, device_id } = req.body;

//   if (!user_id) {
//     return res.status(400).json({ error: "user_id is required" });
//   }

//   try {
//     // Upsert the device status row for this user
//     const { data, error } = await supabase
//       .from("device_status")
//       .upsert(
//         {
//           user_id,
//           battery,
//           connected,
//           device_id,
//           last_sync: new Date().toISOString(),
//         },
//         { onConflict: "user_id" }
//       );

//     if (error) throw error;

//     return res.json({ message: "Device status updated", data });
//   } catch (error) {
//     console.error("Error updating device status:", error.message);
//     return res.status(500).json({ error: error.message });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });

const express = require("express");
const cors = require("cors");
const emergencyRoutes = require("./routes/emergency"); // adjust path accordingly

const app = express();
app.use(cors());
app.use(express.json());

// Route for emergency contact submission
app.use("/api", emergencyRoutes);

// Start server
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
