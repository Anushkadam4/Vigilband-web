// import React from 'react';

// export default function AboutUs() {
//   return (
//     <div style={{ padding: '2rem' }}>
//       <h1>About Us</h1>
//       <p>Welcome to the About Us page. Learn more about VigilBand and our mission here.</p>
//     </div>
//   );
// }

// src/pages/AboutUs.jsx

import React from "react";
import { Box, Typography, Divider, Avatar, Grid, Link } from "@mui/material";

const teamMembers = [
  {
    name: "Anushka Dam",
    role: "Project Lead",
    img: "https://i.pravatar.cc/150?img=1",
    linkedin: "https://linkedin.com/in/anushkadam",
  },
  {
    name: "ResQtech Team",
    role: "Development Team",
    img: "https://i.pravatar.cc/150?img=2",
    linkedin: "https://linkedin.com/company/resqtech",
  },
  // Add more members as needed
];

const AboutUs = () => {
  return (
    <Box sx={{ p: 4, maxWidth: 900, margin: "auto" }}>
      <Typography variant="h3" sx={{ mb: 2, fontWeight: "bold" }}>
        About VigilBand
      </Typography>

      <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6 }}>
        VigilBand is a smart wearable device designed by Team ResQtech to enhance personal safety using AI-driven distress detection, sensor monitoring, and instant alerts to your emergency contacts.
      </Typography>

      <Typography variant="h5" sx={{ mb: 1, fontWeight: "600" }}>
        Our Mission
      </Typography>
      <Typography variant="body2" sx={{ mb: 4 }}>
        To create innovative, reliable, and accessible technology that empowers individuals to feel safe and connected, especially during emergencies.
      </Typography>

      <Divider sx={{ mb: 4 }} />

      <Typography variant="h5" sx={{ mb: 3, fontWeight: "600" }}>
        Meet the Team
      </Typography>

      <Grid container spacing={4}>
        {teamMembers.map((member, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ textAlign: "center" }}>
            <Avatar
              alt={member.name}
              src={member.img}
              sx={{ width: 100, height: 100, margin: "auto", mb: 1 }}
            />
            <Typography variant="h6">{member.name}</Typography>
            <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
              {member.role}
            </Typography>
            <Link href={member.linkedin} target="_blank" rel="noopener" underline="hover">
              LinkedIn Profile
            </Link>
          </Grid>
        ))}
      </Grid>

      <Divider sx={{ mt: 5, mb: 3 }} />

      <Typography variant="body2" color="text.secondary" align="center">
        © {new Date().getFullYear()} VigilBand by Team ResQtech. All rights reserved.
      </Typography>
    </Box>
  );
};

export default AboutUs;
