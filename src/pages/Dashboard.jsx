// src/pages/Dashboard.jsx

import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  List,
  ListItem,
  Alert,
} from "@mui/material";

export default function Dashboard() {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [userId, setUserId] = useState("");

  // ✅ Get current user
  const fetchUser = async () => {
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();

    if (user) {
      setUserId(user.id);
    } else {
      setErrorMsg("You must be logged in.");
    }
  };

  // ✅ Fetch contacts
  const fetchContacts = async () => {
    const { data, error } = await supabase
      .from("emergency_contacts1")
      .select("*")
      .eq("user_id", userId);

    if (error) setErrorMsg("Failed to fetch contacts.");
    else setContacts(data);
  };

  // ✅ Add new contact
  const addContact = async () => {
    if (!name || !phone) {
      setErrorMsg("Name and phone are required.");
      return;
    }

    const { error } = await supabase
      .from("emergency_contacts1")
      .insert({ name, phone, user_id: userId });

    if (error) {
      setErrorMsg("Failed to add contact.");
    } else {
      setName("");
      setPhone("");
      fetchContacts();
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  useEffect(() => {
    if (userId) fetchContacts();
  }, [userId]);

  return (
    <Box sx={{ maxWidth: 600, mx: "auto", mt: 6 }}>
      <Paper elevation={4} sx={{ p: 4 }}>
        <Typography variant="h5" gutterBottom>
          Emergency Contacts
        </Typography>

        {errorMsg && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {errorMsg}
          </Alert>
        )}

        <TextField
          label="Name"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{ mb: 2 }}
        />
        <TextField
          label="Phone"
          fullWidth
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          sx={{ mb: 2 }}
        />
        <Button
          variant="contained"
          fullWidth
          onClick={addContact}
          sx={{ mb: 3 }}
        >
          Add Contact
        </Button>

        <Typography variant="h6">Your Contacts</Typography>
        <List>
          {contacts.map((c) => (
            <ListItem key={c.id}>
              {c.name} - {c.phone}
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
}
