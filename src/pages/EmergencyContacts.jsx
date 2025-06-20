// import React, { useState, useEffect } from 'react';
// import { supabase } from '../supabaseClient';
// import {
//   Box,
//   TextField,
//   Button,
//   Typography,
//   Paper,
//   List,
//   ListItem,
//   ListItemText,
// } from '@mui/material';

// export default function EmergencyContactForm() {
//   const [name, setName] = useState('');
//   const [phone, setPhone] = useState('');
//   const [contacts, setContacts] = useState([]);

//   const fetchContacts = async () => {
//     const { data, error } = await supabase.from('emergency_contacts1').select('*');
//     if (!error) setContacts(data);
//   };

//   useEffect(() => {
//     fetchContacts();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const { error } = await supabase.from('emergency_contacts1').insert([{ name, phone }]);
//     if (!error) {
//       setName('');
//       setPhone('');
//       fetchContacts();
//     }
//   };

//   return (
//     <Box sx={{ maxWidth: 500, mx: 'auto', mt: 5 }}>
//       <Paper elevation={3} sx={{ p: 4 }}>
//         <Typography variant="h5" gutterBottom>
//           Add Emergency Contact
//         </Typography>
//         <form onSubmit={handleSubmit}>
//           <TextField
//             label="Name"
//             variant="outlined"
//             fullWidth
//             required
//             margin="normal"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//           <TextField
//             label="Phone Number"
//             variant="outlined"
//             fullWidth
//             required
//             margin="normal"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//           />
//           <Button variant="contained" color="primary" type="submit" fullWidth sx={{ mt: 2 }}>
//             Add Contact
//           </Button>
//         </form>
//       </Paper>

//       <Paper elevation={1} sx={{ p: 3, mt: 4 }}>
//         <Typography variant="h6">Saved Contacts</Typography>
//         <List>
//           {contacts.map((contact) => (
//             <ListItem key={contact.id}>
//               <ListItemText primary={contact.name} secondary={contact.phone} />
//             </ListItem>
//           ))}
//         </List>
//       </Paper>
//     </Box>
//   );
// }

// import React, { useState, useEffect } from "react";
// import { supabase } from "../supabaseClient";
// import {
//   Box,
//   TextField,
//   Button,
//   Typography,
//   Paper,
//   List,
//   ListItem,
//   ListItemText,
//   Alert,
// } from "@mui/material";

// export default function EmergencyContactForm() {
//   const [name, setName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [contacts, setContacts] = useState([]);
//   const [user, setUser] = useState(null);
//   const [errorMsg, setErrorMsg] = useState("");

//   // useEffect(() => {
//   //   const fetchUserAndContacts = async () => {
//   //     const {
//   //       data: { user },
//   //     } = await supabase.auth.getUser();

//   //     if (user) {
//   //       setUser(user);
//   //       const { data, error } = await supabase
//   //         .from("emergency_contacts1")
//   //         .select("*")
//   //         .eq("user_id", user.id);
//   //       if (!error) setContacts(data);
//   //     }
//   //   };

//   //   fetchUserAndContacts();
//   // }, []);

//   useEffect(() => {
//   const fetchUserAndContacts = async () => {
//     const { data: { user }, error } = await supabase.auth.getUser();

//     if (error || !user) {
//       setErrorMsg("User not logged in.");
//       return;
//     }

//     setUser(user);

//     const { data, error: fetchError } = await supabase
//       .from("emergency_contacts1")
//       .select("*")
//       .eq("user_id", user.id);

//     if (!fetchError) setContacts(data);
//   };

//   fetchUserAndContacts();
// }, []);


  
//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   setErrorMsg("");

//   //   if (!name.trim() || !phone.trim()) {
//   //     setErrorMsg("Both fields are required.");
//   //     return;
//   //   }

//   //   if (!/^\d{10}$/.test(phone)) {
//   //     setErrorMsg("Phone number must be 10 digits.");
//   //     return;
//   //   }

//   //   const { error } = await supabase.from("emergency_contacts1").insert([
//   //     {
//   //       name,
//   //       phone,
//   //       user_id: user.id, // associate contact with the logged-in user
//   //     },
//   //   ]);

//   //   if (error) {
//   //     setErrorMsg("Failed to add contact.");
//   //     console.error(error);
//   //   } else {
//   //     setName("");
//   //     setPhone("");
//   //     const { data, error: fetchError } = await supabase
//   //       .from("emergency_contacts1")
//   //       .select("*")
//   //       .eq("user_id", user.id);
//   //     if (!fetchError) setContacts(data);
//   //   }
//   // };

  

//   const handleSubmit = async (e) => {
//   e.preventDefault();
//   setErrorMsg("");

//   if (!name.trim() || !phone.trim()) {
//     setErrorMsg("Both fields are required.");
//     return;
//   }

//   if (!/^\d{10}$/.test(phone)) {
//     setErrorMsg("Phone number must be 10 digits.");
//     return;
//   }

//   if (!user) {
//     setErrorMsg("You must be logged in to add a contact.");
//     return;
//   }

//   const { error } = await supabase.from("emergency_contacts1").insert([
//     {
//       name,
//       phone,
//       user_id: user.id,
//     },
//   ]);

//   if (error) {
//     setErrorMsg("Failed to add contact.");
//     console.error(error);
//   } else {
//     setName("");
//     setPhone("");

//     const { data, error: fetchError } = await supabase
//       .from("emergency_contacts1")
//       .select("*")
//       .eq("user_id", user.id);

//     if (!fetchError) setContacts(data);
//   }
// };


//   return (
//     <Box sx={{ maxWidth: 500, mx: "auto", mt: 5 }}>
//       <Paper elevation={3} sx={{ p: 4 }}>
//         <Typography variant="h5" gutterBottom>
//           Add Emergency Contact
//         </Typography>

//         {errorMsg && (
//           <Alert severity="error" sx={{ mb: 2 }}>
//             {errorMsg}
//           </Alert>
//         )}

//         <form onSubmit={handleSubmit}>
//           <TextField
//             label="Name"
//             variant="outlined"
//             fullWidth
//             required
//             margin="normal"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//           <TextField
//             label="Phone Number"
//             variant="outlined"
//             fullWidth
//             required
//             margin="normal"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//             inputProps={{ maxLength: 10 }}
//           />
//           <Button
//             variant="contained"
//             color="primary"
//             type="submit"
//             fullWidth
//             sx={{ mt: 2 }}
//           >
//             Add Contact
//           </Button>
//         </form>
//       </Paper>

//       <Paper elevation={1} sx={{ p: 3, mt: 4 }}>
//         <Typography variant="h6" gutterBottom>
//           Saved Contacts
//         </Typography>
//         <List>
//           {contacts.length === 0 ? (
//             <Typography variant="body2" color="text.secondary">
//               No contacts saved yet.
//             </Typography>
//           ) : (
//             contacts.map((contact) => (
//               <ListItem key={contact.id} disablePadding>
//                 <ListItemText
//                   primary={contact.name}
//                   secondary={contact.phone}
//                 />
//               </ListItem>
//             ))
//           )}
//         </List>
//       </Paper>
//     </Box>
//   );
// }

import React, { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  Alert,
} from "@mui/material";

export default function EmergencyContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [contacts, setContacts] = useState([]);
  const [user, setUser] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  // useEffect(() => {
  //   const fetchUserAndContacts = async () => {
  //     const {
  //       data: { user },
  //     } = await supabase.auth.getUser();

  //     if (user) {
  //       setUser(user);
  //       const { data, error } = await supabase
  //         .from("emergency_contacts1")
  //         .select("*")
  //         .eq("user_id", user.id);
  //       if (!error) setContacts(data);
  //     }
  //   };

  //   fetchUserAndContacts();
  // }, []);

  useEffect(() => {
  const fetchUserAndContacts = async () => {
    const { data: { user }, error } = await supabase.auth.getUser();

    if (error || !user) {
      setErrorMsg("User not logged in.");
      return;
    }

    setUser(user);

    const { data, error: fetchError } = await supabase
      .from("emergency_contacts1")
      .select("*")
      .eq("user_id", user.id);

    if (!fetchError) setContacts(data);
  };

  fetchUserAndContacts();
}, []);


  
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setErrorMsg("");

  //   if (!name.trim() || !phone.trim()) {
  //     setErrorMsg("Both fields are required.");
  //     return;
  //   }

  //   if (!/^\d{10}$/.test(phone)) {
  //     setErrorMsg("Phone number must be 10 digits.");
  //     return;
  //   }

  //   const { error } = await supabase.from("emergency_contacts1").insert([
  //     {
  //       name,
  //       phone,
  //       user_id: user.id, // associate contact with the logged-in user
  //     },
  //   ]);

  //   if (error) {
  //     setErrorMsg("Failed to add contact.");
  //     console.error(error);
  //   } else {
  //     setName("");
  //     setPhone("");
  //     const { data, error: fetchError } = await supabase
  //       .from("emergency_contacts1")
  //       .select("*")
  //       .eq("user_id", user.id);
  //     if (!fetchError) setContacts(data);
  //   }
  // };

  

  const handleSubmit = async (e) => {
  e.preventDefault();
  setErrorMsg("");

  if (!name.trim() || !phone.trim()) {
    setErrorMsg("Both fields are required.");
    return;
  }

  if (!/^\d{10}$/.test(phone)) {
    setErrorMsg("Phone number must be 10 digits.");
    return;
  }

  if (!user) {
    setErrorMsg("You must be logged in to add a contact.");
    return;
  }

  const { error } = await supabase.from("emergency_contacts1").insert([
    {
      name,
      phone,
      user_id: user.id,
    },
  ]);

  if (error) {
    setErrorMsg("Failed to add contact.");
    console.error(error);
  } else {
    setName("");
    setPhone("");

    const { data, error: fetchError } = await supabase
      .from("emergency_contacts1")
      .select("*")
      .eq("user_id", user.id);

    if (!fetchError) setContacts(data);
  }
};


  return (
    <Box sx={{ maxWidth: 500, mx: "auto", mt: 5 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h5" gutterBottom>
          Add Emergency Contact
        </Typography>

        {errorMsg && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {errorMsg}
          </Alert>
        )}

        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            required
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="Phone Number"
            variant="outlined"
            fullWidth
            required
            margin="normal"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            inputProps={{ maxLength: 10 }}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
            sx={{ mt: 2 }}
          >
            Add Contact
          </Button>
        </form>
      </Paper>

      <Paper elevation={1} sx={{ p: 3, mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          Saved Contacts
        </Typography>
        <List>
          {contacts.length === 0 ? (
            <Typography variant="body2" color="text.secondary">
              No contacts saved yet.
            </Typography>
          ) : (
            contacts.map((contact) => (
              <ListItem key={contact.id} disablePadding>
                <ListItemText
                  primary={contact.name}
                  secondary={contact.phone}
                />
              </ListItem>
            ))
          )}
        </List>
      </Paper>
    </Box>
  );
} 

