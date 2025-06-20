// const express = require("express");
// const cors = require("cors");
// const dotenv = require("dotenv");
// const updateDeviceStatus = require("./updateDeviceStatus");

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(cors());
// app.use(express.json());

// app.post("/update-device", updateDeviceStatus);

// app.listen(PORT, () => {
//   console.log(`✅ Backend server running on port ${PORT}`);
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
