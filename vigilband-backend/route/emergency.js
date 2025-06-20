const express = require("express");
const router = express.Router();
const { createClient } = require("@supabase/supabase-js");

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

router.post("/add-contact", async (req, res) => {
  const { user_id, name, phone } = req.body;

  if (!user_id || !name || !phone) {
    return res.status(400).json({ error: "Missing fields" });
  }

  const { error } = await supabase
    .from("emergency_contacts1")
    .insert([{ name, phone, user_id }]);

  if (error) return res.status(500).json({ error: error.message });

  return res.status(200).json({ message: "Contact added successfully" });
});

module.exports = router;
