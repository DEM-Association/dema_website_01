import React from "react";
import { Box, Typography, Grid, Container, Button } from "@mui/material";

function EventCard({
  eventNumber = 1,
  date = "October 23, 2024",
  description = "Quick data other than white bang texts Lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
}) {
  return (
    <Box
      sx={{
        background: "#ffffff",
        borderRadius: "12px",
        overflow: "hidden",
        border: "2px solid #d4af37",
        boxShadow: "0 4px 12px rgba(13, 31, 89, 0.1)",
        transition: "all 0.3s ease",
        "&:hover": {
          boxShadow: "0 8px 24px rgba(212, 175, 55, 0.3)",
          transform: "translateY(-4px)",
          borderColor: "#c9a961",
        },
      }}
    >
      {/* Image Placeholder */}
      <Box
        sx={{
          height: 120,
          background: "linear-gradient(135deg, #0d1f59 0%, #1a2b4a 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      />

      {/* Event Content */}
      <Box sx={{ p: 2.5 }}>
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: "0.95rem",
            mb: 0.5,
            color: "#0d1f59",
          }}
        >
          Event {eventNumber}
        </Typography>
        <Typography
          sx={{
            fontSize: "0.75rem",
            color: "#d4af37",
            fontWeight: 600,
            mb: 2,
          }}
        >
          📅 {date}
        </Typography>
        <Typography
          sx={{
            fontSize: "0.75rem",
            lineHeight: 1.5,
            color: "#5a5a5a",
            mb: 2,
          }}
        >
          {description}
        </Typography>

        {/* Action Buttons */}
        <Box sx={{ display: "flex", gap: 1 }}>
          <Button
            sx={{
              background: "#0d1f59",
              color: "#fff",
              fontSize: "0.75rem",
              fontWeight: 600,
              textTransform: "capitalize",
              px: 2,
              py: 0.5,
              boxShadow: "0 2px 8px rgba(13, 31, 89, 0.3)",
              "&:hover": {
                background: "#1a2b4a",
                boxShadow: "0 4px 12px rgba(13, 31, 89, 0.4)",
              },
            }}
          >
            Details
          </Button>
          <Button
            sx={{
              background: "linear-gradient(135deg, #d4af37 0%, #c9a961 100%)",
              color: "#0d1f59",
              fontSize: "0.75rem",
              fontWeight: 600,
              textTransform: "capitalize",
              px: 2,
              py: 0.5,
              boxShadow: "0 2px 8px rgba(212, 175, 55, 0.3)",
              "&:hover": {
                background: "linear-gradient(135deg, #e5c158 0%, #d4af37 100%)",
                boxShadow: "0 4px 12px rgba(212, 175, 55, 0.4)",
              },
            }}
          >
            Register
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default function Events() {
  return (
    <Box sx={{ background: "linear-gradient(180deg, #f5f1e8 0%, #faf8f3 50%, #ffffff 100%)", minHeight: "100vh" }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #0a1628 0%, #0d1f59 50%, #1a2b4a 100%)",
          py: { xs: 6, md: 8 },
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: 250,
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "radial-gradient(circle at 20% 50%, rgba(212, 175, 55, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(212, 175, 55, 0.08) 0%, transparent 50%)",
            pointerEvents: "none",
          },
        }}
      >
        <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              fontSize: { xs: "1.5rem", md: "2rem" },
              color: "#fff",
              textTransform: "uppercase",
            }}
          >
            Join Our Next Event!
          </Typography>
        </Container>
      </Box>

      {/* Upcoming Events Section */}
      <Container maxWidth="lg" sx={{ py: 4, px: 3 }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            mb: 3,
            color: "#0d1f59",
            fontSize: { xs: "1.2rem", md: "1.4rem" },
          }}
        >
          Upcoming Events
        </Typography>

        <Grid container spacing={2.5}>
          <Grid item xs={12} md={4}>
            <EventCard
              eventNumber={1}
              date="October 23, 2024"
              description="Quick data other than white bang texts Lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <EventCard
              eventNumber={2}
              date="November 15, 2024"
              description="Quick data other than white bang texts Lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <EventCard
              eventNumber={3}
              date="December 8, 2024"
              description="Quick data other than white bang texts Lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
            />
          </Grid>
        </Grid>

        {/* Show More Button */}
        <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
          <Button
            sx={{
              bgcolor: "#7a7a7a",
              color: "#fff",
              fontSize: "0.85rem",
              fontWeight: 600,
              textTransform: "capitalize",
              px: 4,
              py: 1,
              boxShadow: "none",
              "&:hover": {
                bgcolor: "#6a6a6a",
                boxShadow: "none",
              },
            }}
          >
            Show More
          </Button>
        </Box>
      </Container>

      {/* Past Events Section */}
      <Container maxWidth="lg" sx={{ py: 4, pb: 6, px: 3 }}>
        <Grid container spacing={2.5}>
          <Grid item xs={12} md={4}>
            <EventCard
              eventNumber={1}
              date="September 10, 2024"
              description="Quick data other than white bang texts Lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <EventCard
              eventNumber={2}
              date="August 5, 2024"
              description="Quick data other than white bang texts Lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <EventCard
              eventNumber={3}
              date="July 22, 2024"
              description="Quick data other than white bang texts Lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
            />
          </Grid>
        </Grid>

        {/* Show More Button */}
        <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
          <Button
            sx={{
              background: "linear-gradient(135deg, #d4af37 0%, #c9a961 100%)",
              color: "#0d1f59",
              fontSize: "0.85rem",
              fontWeight: 600,
              textTransform: "capitalize",
              px: 4,
              py: 1,
              boxShadow: "0 4px 12px rgba(212, 175, 55, 0.3)",
              "&:hover": {
                background: "linear-gradient(135deg, #e5c158 0%, #d4af37 100%)",
                boxShadow: "0 6px 16px rgba(212, 175, 55, 0.4)",
              },
            }}
          >
            Show More
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
