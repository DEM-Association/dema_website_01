import React from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
} from "@mui/material";

function EventCard({
  title = "Event Feature",
  text = "Short description of the event.",
}) {
  return (
    <Card sx={{ boxShadow: 1 }}>
      <Box sx={{ height: 140, bgcolor: "#e9e9e9" }} />
      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default function Home() {
  return (
    <Box>
      {/* Hero - full width visual inside constrained container using vw trick */}
      <Box sx={{ width: "100%", mb: 4 }}>
        <Box
          sx={{
            backgroundColor: "#d9d9d9",
            py: { xs: 8, md: 12 },
            textAlign: "center",
          }}
        >
          <Typography
            variant="h3"
            component="h1"
            sx={{ fontWeight: 800 }}
            gutterBottom
          >
            WELCOME TO DEMA
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{ color: "text.secondary", mb: 1 }}
          >
            Digital Enterprises Management Association
          </Typography>
          <Typography sx={{ maxWidth: 800, mx: "auto", mb: 3 }}>
            Student society for engineering and maritime activities — join us
            for events, projects and networking.
          </Typography>
          <Button variant="contained" color="primary" size="large">
            Join Now
          </Button>
        </Box>
      </Box>

      {/* Featured Events */}
      <Box sx={{ py: 4 }}>
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
          Featured Events
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <EventCard
              title="Event Feature 1"
              text="Short summary of the event and what attendees can expect."
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <EventCard
              title="Event Feature 2"
              text="Short summary of the event and what attendees can expect."
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <EventCard
              title="Event Feature 3"
              text="Short summary of the event and what attendees can expect."
            />
          </Grid>
        </Grid>
      </Box>

      {/* Collaborations & Sponsors */}
      <Box sx={{ py: 4 }}>
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
          Collaborations & Sponsors
        </Typography>
        <Grid container spacing={3}>
          {[...Array(6)].map((_, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Box sx={{ bgcolor: "#efefef", height: 120 }} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
