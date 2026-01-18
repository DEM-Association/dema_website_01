import React from "react";
import { Box, Typography, Grid, Container } from "@mui/material";
import { useTheme, alpha } from "@mui/material/styles";
import demaLogo from "../assets/dema_logo.jpg";
import { allEvents, getEventImage } from "../data/eventsData";
import cmlImg from "../assets/partners/homepage_DEMA_CML_2025_1.png";
import isacaImg from "../assets/partners/homepage_DEMA_ISACA_2025_1.png";
import microsoftImg from "../assets/partners/homepage_DEMA_Microsoft_2025_1.jpg";
import tmuImg from "../assets/partners/homepage_DEMA_TMU_2025_1.png";
import utmccImg from "../assets/partners/homepage_DEMA_UTMCC_2025_1.png";
import yorkuImg from "../assets/partners/homepage_DEMA_YorkU_2025_1.png";

function EventCard({
  title = "Event Feature",
  text = "Short description of the event.",
  imageUrl = null,
}) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        borderRadius: "10px",
        overflow: "hidden",
        transition: "all 0.3s ease",
        cursor: "pointer",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "background.paper",
        border: (theme) =>
          `1.5px solid ${alpha(theme.palette.primary.main, 0.12)}`,
        boxShadow: (theme) =>
          `0 2px 8px ${alpha(theme.palette.primary.main, 0.04)}`,
        "&:hover": {
          borderColor: "secondary.main",
          boxShadow: (theme) =>
            `0 8px 24px ${alpha(theme.palette.primary.main, 0.12)}`,
          transform: "translateY(-4px)",
        },
      }}
    >
      <Box
        sx={{
          height: 120,
          background: imageUrl
            ? `url('${imageUrl}') center/cover no-repeat`
            : `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)`,
          transition: "transform 0.3s ease",
        }}
      />
      <Box
        sx={{ p: 2.5, flexGrow: 1, display: "flex", flexDirection: "column" }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            mb: 1,
            fontSize: "1.05rem",
            color: "primary.main",
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontSize: "0.95rem", lineHeight: 1.6 }}
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
    <Box sx={{ bgcolor: "background.default", color: "text.primary" }}>
      {/* Hero */}
      <Box
        component="section"
        sx={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&h=600&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: { xs: "scroll", md: "fixed" },
          color: "#fff",
          py: { xs: 8, md: 12 },
          mb: 5,
          overflow: "visible",
          position: "relative",
          borderRadius: 4,
          margin: { xs: "20px 1.5rem", md: "30px 2rem" },
          boxShadow: (theme) =>
            `0 20px 60px ${alpha(
              theme.palette.primary.main,
              0.25
            )}, inset 0 1px 0 ${alpha("#fff", 0.1)}`,
          border: (theme) => `1px solid ${alpha("#fff", 0.15)}`,
          transition: "all 0.6s cubic-bezier(0.23, 1, 0.320, 1)",
          animation: "heroGlow 6s ease-in-out infinite",
          "@keyframes heroGlow": {
            "0%, 100%": {
              boxShadow: (theme) =>
                `0 20px 60px ${alpha(
                  theme.palette.primary.main,
                  0.25
                )}, inset 0 1px 0 ${alpha("#fff", 0.1)}`,
            },
            "50%": {
              boxShadow: (theme) =>
                `0 30px 80px ${alpha(
                  theme.palette.secondary.main,
                  0.2
                )}, inset 0 1px 0 ${alpha("#fff", 0.15)}`,
            },
          },
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: (theme) =>
              `linear-gradient(120deg, ${alpha(
                theme.palette.primary.main,
                0.75
              )} 0%, ${alpha(theme.palette.primary.dark, 0.75)} 65%)`,
            zIndex: 1,
            borderRadius: 4,
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
          <Box sx={{ maxWidth: 800 }}>
            <Box
              component="img"
              src={demaLogo}
              alt="DEMA Logo"
              sx={{
                height: 80,
                width: 80,
                objectFit: "contain",
                mb: 2.5,
                borderRadius: 2,
                boxShadow: (theme) =>
                  `0 8px 24px ${alpha(theme.palette.primary.main, 0.2)}`,
              }}
            />

            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontWeight: 800,
                lineHeight: 1.1,
                fontSize: { xs: "2rem", md: "3.2rem" },
                mb: 2.5,
                letterSpacing: "-0.5px",
                color: "secondary.main",
              }}
            >
              Connect, Innovate, and Lead
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "1rem", md: "1.15rem" },
                mb: 3.5,
                maxWidth: 680,
                color: "rgba(255,255,255,0.95)",
                lineHeight: 1.7,
              }}
            >
              Digital Enterprise Management Association (DEMA) is your gateway
              to connecting with industry professionals, building real-world
              projects, and developing leadership skills that matter.
            </Typography>

            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1,
                  fontWeight: 600,
                  fontSize: "0.95rem",
                }}
              >
                ✓ Industry Networking
              </Box>
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1,
                  fontWeight: 600,
                  fontSize: "0.95rem",
                }}
              >
                ✓ Hands-on Projects
              </Box>
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1,
                  fontWeight: 600,
                  fontSize: "0.95rem",
                }}
              >
                ✓ Mentorship
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Featured Events Section */}
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Box sx={{ mb: 5 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 800,
              mb: 1,
              color: "primary.main",
              fontSize: { xs: "1.5rem", md: "1.8rem" },
            }}
          >
            Featured Events
          </Typography>
          <Box
            sx={{
              height: 3,
              width: 50,
              bgcolor: "secondary.main",
              borderRadius: 1,
              mb: 3.5,
            }}
          />
        </Box>
        <Grid container spacing={1.5}>
          {allEvents.past.slice(0, 3).map((event) => (
            <Grid item xs={12} md={4} key={event.id}>
              <EventCard
                title={event.title}
                text={event.description}
                imageUrl={getEventImage(event.image)}
              />
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Partners Section */}
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Box sx={{ mb: 5 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 800,
              mb: 1,
              color: "primary.main",
              fontSize: { xs: "1.5rem", md: "1.8rem" },
            }}
          >
            Partners
          </Typography>
          <Box
            sx={{
              height: 3,
              width: 50,
              bgcolor: "secondary.main",
              borderRadius: 1,
              mb: 3.5,
            }}
          />
        </Box>
        <Grid container spacing={2}>
          {[
            { img: cmlImg, alt: "CML Partner" },
            { img: isacaImg, alt: "ISACA Partner" },
            { img: microsoftImg, alt: "Microsoft Partner" },
            { img: tmuImg, alt: "TMU Partner" },
            { img: utmccImg, alt: "UTMCC Partner" },
            { img: yorkuImg, alt: "YorkU Partner" },
          ].map((partner, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Box
                sx={{
                  height: 120,
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  backgroundColor: "white",
                  backgroundImage: `url('${partner.img}')`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  position: "relative",
                  border: (theme) =>
                    `1.5px solid ${alpha(theme.palette.primary.main, 0.15)}`,
                  "&:hover": {
                    borderColor: "secondary.main",
                    boxShadow: (theme) =>
                      `0 6px 16px ${alpha(theme.palette.primary.main, 0.12)}`,
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
