import React from "react";
import { Box, Typography, Grid, Container } from "@mui/material";
import { useTheme, alpha } from "@mui/material/styles";
import { teamMembers, getTeamMemberImage } from "../data/teamData";

export default function Team() {
  const theme = useTheme();

  const teamDescription = `As we step into 2026, the DEM Association is proud to continue building on the legacy that earned us club of the year 2024 and the prestigious club of excellence award 2025. This year's team is driven by the same commitment to leadership, community and innovation that has made DEMA one of the most valued and respected clubs on campus. With renewed ambition and a passion for empowering students, our 2025 - 2026 team is determined to uphold and elevate the standard of excellence that defines the DEM Experience.`;

  return (
    <Box sx={{ bgcolor: "background.default", color: "text.primary" }}>
      <Container maxWidth="lg" sx={{ py: 3, pt: 6, pb: 3 }}>
        <Box sx={{ mb: 5 }}>
          <Typography
            variant="overline"
            sx={{
              display: "inline-block",
              color: "secondary.main",
              fontWeight: 700,
              mb: 1,
            }}
          >
            OUR TEAM
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              mb: 1.5,
              fontSize: { xs: "1.6rem", md: "2.2rem" },
              color: "primary.main",
            }}
          >
            Meet the Team
          </Typography>
          <Typography
            sx={{
              fontSize: "0.95rem",
              color: "text.secondary",
              maxWidth: 600,
              lineHeight: 1.6,
            }}
          >
            The talented individuals driving DEMA's mission to empower and
            inspire the community.
          </Typography>
        </Box>

        {/* Team Members Grid */}
        <Grid container spacing={3} sx={{ mb: 6 }}>
          {teamMembers.map((member) => (
            <Grid item xs={12} sm={6} md={3} key={member.id}>
              <Box
                sx={{
                  borderRadius: "10px",
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                  backgroundColor: "background.paper",
                  border: (theme) =>
                    `1.5px solid ${alpha(theme.palette.primary.main, 0.12)}`,
                  boxShadow: (theme) =>
                    `0 2px 8px ${alpha(theme.palette.primary.main, 0.04)}`,
                  display: "flex",
                  flexDirection: "column",
                  "&:hover": {
                    borderColor: "secondary.main",
                    boxShadow: (theme) =>
                      `0 8px 24px ${alpha(theme.palette.primary.main, 0.12)}`,
                    transform: "translateY(-4px)",
                  },
                }}
              >
                {/* Member Image */}
                <Box
                  sx={{
                    height: 180,
                    backgroundImage: `url('${getTeamMemberImage(
                      member.image
                    )}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: (theme) =>
                        `linear-gradient(135deg, ${alpha(
                          theme.palette.primary.main,
                          0.2
                        )} 0%, ${alpha(
                          theme.palette.primary.main,
                          0.05
                        )} 100%)`,
                    },
                  }}
                />

                {/* Member Info */}
                <Box
                  sx={{
                    p: 1.5,
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    gap: 0.25,
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      fontSize: "0.95rem",
                      color: "primary.main",
                    }}
                  >
                    {member.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      color: "secondary.main",
                    }}
                  >
                    {member.role}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Team Description */}
        <Box
          sx={{
            bgcolor: (theme) => alpha(theme.palette.primary.main, 0.04),
            border: (theme) =>
              `1.5px solid ${alpha(theme.palette.primary.main, 0.12)}`,
            borderRadius: "10px",
            p: { xs: 2.5, md: 4 },
            lineHeight: 1.8,
          }}
        >
          <Typography
            sx={{
              fontSize: "1rem",
              color: "text.secondary",
              fontWeight: 500,
            }}
          >
            {teamDescription}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
