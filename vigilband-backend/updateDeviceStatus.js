// updateDeviceStatus.js
const { createClient } = require('@supabase/supabase-js');
require("dotenv").config();


const SUPABASE_URL = 'https://ujgdvhpvthdlbcvijwbd.supabase.co';
const SUPABASE_SERVICE_ROLE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVqZ2R2aHB2dGhkbGJjdmlqd2JkIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1MDE3Mjk0OCwiZXhwIjoyMDY1NzQ4OTQ4fQ.A59az4ZTggyY_Ocys6NSg5lq7s6PX4hMznWf7BwbBFs'; // Keep this secret!


const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const updateDeviceStatus = async (req, res) => {
  const { user_id, battery, connected, device_id } = req.body;

  const { error } = await supabase.from("device_status").upsert([
    {
      user_id,
      battery,
      connected,
      device_id,
      last_sync: new Date().toISOString(),
    },
  ]);

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.status(200).json({ success: true, message: "Device status updated" });
};

module.exports = updateDeviceStatus;
