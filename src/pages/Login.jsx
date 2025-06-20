// import React, { useState } from "react";
// import { supabase } from "../supabaseClient";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = async () => {
//     const { error } = await supabase.auth.signInWithPassword({ email, password });
//     if (error) alert(error.message);
//     else window.location.href = "/dashboard";
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
//       <input value={password} type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
//       <button onClick={handleLogin}>Log In</button>
//     </div>
//   );
// }


// src/Login.jsx
// import React, { useState } from 'react';
// import { supabase } from './supabaseClient';
// import { Box, TextField, Button, Typography } from '@mui/material';

// export default function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMsg, setErrorMsg] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleLogin = async () => {
//     setLoading(true);
//     const { error } = await supabase.auth.signInWithPassword({ email, password });
//     setLoading(false);
//     if (error) setErrorMsg(error.message);
//   };

//   return (
//     <Box sx={{ maxWidth: 400, mx: 'auto', mt: 10 }}>
//       <Typography variant="h5" mb={2}>Login</Typography>
//       <TextField label="Email" fullWidth margin="normal" value={email} onChange={(e) => setEmail(e.target.value)} />
//       <TextField
//         label="Password"
//         type="password"
//         fullWidth
//         margin="normal"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       {errorMsg && <Typography color="error">{errorMsg}</Typography>}
//       <Button variant="contained" onClick={handleLogin} disabled={loading} sx={{ mt: 2 }} fullWidth>
//         {loading ? 'Logging in...' : 'Login'}
//       </Button>
//     </Box>
//   );
// }

import React, { useState } from 'react';
import { supabase } from '../supabaseClient';
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Alert
} from '@mui/material';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleLogin = async () => {
    setErrorMsg('');
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error) {
      setErrorMsg(error.message);
    } else {
      onLogin(); // Navigate to Home or reload
    }
  };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 10 }}>
      <Paper elevation={4} sx={{ p: 4 }}>
        <Typography variant="h5" gutterBottom>
          Login to VigilBand
        </Typography>
        {errorMsg && <Alert severity="error" sx={{ mb: 2 }}>{errorMsg}</Alert>}
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ mb: 2 }}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{ mb: 3 }}
        />
        <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>
          Login
        </Button>
      </Paper>
    </Box>
  );
};

export default Login;
