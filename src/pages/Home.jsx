import React from "react";
import { Box, Typography, Grid, Container } from "@mui/material";
import { useTheme, alpha } from "@mui/material/styles";

function EventCard({
  title = "Event Feature",
  text = "Short description of the event.",
}) {
  return (
    <Box
      sx={{
        borderRadius: "12px",
        overflow: "hidden",
        transition: "all 0.3s ease",
        cursor: "pointer",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        background: "#ffffff",
        border: "2px solid #d4af37",
        boxShadow: "0 4px 12px rgba(13, 31, 89, 0.1)",
        "&:hover": {
          boxShadow: "0 8px 24px rgba(212, 175, 55, 0.3)",
          transform: "translateY(-4px)",
          borderColor: "#c9a961",
        },
      }}
    >
      <Box
        sx={{
          height: 100,
          background: "linear-gradient(135deg, #0d1f59 0%, #1a2b4a 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      />
      <Box sx={{ p: 2, flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            mb: 1,
            fontSize: "0.95rem",
            color: "#0d1f59",
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{ fontSize: "0.75rem", lineHeight: 1.5, color: "#5a5a5a" }}
        >
          {text}
        </Typography>
      </Box>
    </Box>
  );
}

export default function Home() {
  const theme = useTheme();
  return (
    <Box sx={{ background: "linear-gradient(180deg, #f5f1e8 0%, #faf8f3 50%, #ffffff 100%)", minHeight: "100vh" }}>
      {/* Welcome to DEMA */}
      <Box
        component="section"
        sx={{
          background: "linear-gradient(135deg, #0a1628 0%, #0d1f59 50%, #1a2b4a 100%)",
          color: "#fff",
          py: { xs: 6, md: 8 },
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: 300,
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
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 700,
              fontSize: { xs: "1.5rem", md: "2rem" },
              mb: 2,
              textTransform: "uppercase",
              background: "linear-gradient(135deg, #d4af37 0%, #f5e6c8 50%, #d4af37 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            WELCOME TO DEMA
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "0.75rem", md: "0.85rem" },
              maxWidth: 650,
              mx: "auto",
              lineHeight: 1.5,
              color: "rgba(255, 255, 255, 0.9)",
            }}
          >
            vnejvbnejvevheujovb
          </Typography>
        </Container>
      </Box>

      {/* Featured Events Section */}
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
          Featured Events
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <EventCard
              title="Event Feature 1"
              text="Quick data is that we've had more bang than Lorem ipsum dolor sit amet, vitae nisl diam a vero. Felis nec porta aliquam eros varius tellus."
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <EventCard
              title="Event Feature 2"
              text="Quick data is that we've had more bang than Lorem ipsum dolor sit amet, vitae nisl diam a vero. Felis nec porta aliquam eros varius tellus."
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <EventCard
              title="Event Feature 3"
              text="Quick data is that we've had more bang than Lorem ipsum dolor sit amet, vitae nisl diam a vero. Felis nec porta aliquam eros varius tellus."
            />
          </Grid>
        </Grid>
      </Container>

      {/* Collaborators & Sponsors Section */}
      <Container maxWidth="lg" sx={{ py: 4, pb: 6, px: 3 }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            mb: 3,
            color: "#0d1f59",
            fontSize: { xs: "1.2rem", md: "1.4rem" },
          }}
        >
          Collaborations & Sponsors
        </Typography>

        <Grid container spacing={2}>
          {[...Array(6)].map((_, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Box
                sx={{
                  height: 100,
                  borderRadius: "12px",
                  background: "linear-gradient(135deg, #d4af37 0%, #c9a961 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  boxShadow: "0 4px 12px rgba(212, 175, 55, 0.2)",
                  "&:hover": {
                    background: "linear-gradient(135deg, #e5c158 0%, #d4af37 100%)",
                    boxShadow: "0 8px 20px rgba(212, 175, 55, 0.4)",
                    transform: "translateY(-2px)",
                  },
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
