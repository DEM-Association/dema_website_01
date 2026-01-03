import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Container,
  Chip,
  IconButton,
} from "@mui/material";
import { useTheme, alpha } from "@mui/material/styles";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { allEvents, getEventImage } from "../data/eventsData";

export default function Events() {
  const theme = useTheme();
  const [carouselIndex, setCarouselIndex] = useState(0);

  const upcomingEvents = allEvents.upcoming;
  const previousEvents = allEvents.past;

  const itemsPerPage = 3;
  const maxIndex = Math.ceil(previousEvents.length / itemsPerPage) - 1;

  const handleNextCarousel = () => {
    setCarouselIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  const handlePrevCarousel = () => {
    setCarouselIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const displayedPreviousEvents = previousEvents.slice(
    carouselIndex * itemsPerPage,
    (carouselIndex + 1) * itemsPerPage
  );

  return (
    <Box sx={{ bgcolor: "background.default", color: "text.primary" }}>
      <Container maxWidth="lg" sx={{ py: 3, pt: 6, pb: 3 }}>
        <Box sx={{ mb: 3 }}>
          <Typography
            variant="overline"
            sx={{
              display: "inline-block",
              color: "secondary.main",
              fontWeight: 700,
              mb: 1,
            }}
          >
            EVENTS
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
            Upcoming Events
          </Typography>
          <Typography
            sx={{
              fontSize: "0.95rem",
              color: "text.secondary",
              maxWidth: 600,
              lineHeight: 1.6,
            }}
          >
            Join us for engaging events designed to connect, inspire, and
            empower the DEMA community. From networking mixers to technical
            workshops and our flagship conference.
          </Typography>
        </Box>

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
            flexDirection: { xs: "column", md: "row" },
            "&:hover": {
              borderColor: "secondary.main",
              boxShadow: (theme) =>
                `0 8px 24px ${alpha(theme.palette.primary.main, 0.12)}`,
              transform: "translateY(-4px)",
            },
          }}
        >
          {/* Featured Event Image */}
          <Box
            sx={{
              height: { xs: 250, md: 350 },
              width: { xs: "100%", md: "40%" },
              backgroundImage: `url('${getEventImage(
                upcomingEvents[0]?.image
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
                    0.3
                  )} 0%, ${alpha(theme.palette.primary.main, 0.1)} 100%)`,
              },
            }}
          />

          {/* Event Content */}
          <Box
            sx={{
              p: { xs: 2.5, md: 4 },
              width: { xs: "100%", md: "60%" },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="overline"
              sx={{
                color: "secondary.main",
                fontWeight: 700,
                mb: 1.5,
                fontSize: "0.8rem",
                letterSpacing: 1,
              }}
            >
              Upcoming
            </Typography>

            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                mb: 2,
                fontSize: { xs: "1.8rem", md: "2.5rem" },
                color: "primary.main",
              }}
            >
              {upcomingEvents.length > 0
                ? upcomingEvents[0].title
                : "Coming Soon"}
            </Typography>

            {upcomingEvents.length > 0 ? (
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {upcomingEvents.map((event, i) => (
                  <Box key={i}>
                    <Typography
                      sx={{
                        fontSize: "1.1rem",
                        fontWeight: 600,
                        color: "secondary.main",
                        mb: 1,
                      }}
                    >
                      {event.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "0.95rem",
                        color: "text.secondary",
                        display: "flex",
                        flexDirection: "column",
                        gap: 0.5,
                      }}
                    >
                      <span>📅 {event.date}</span>
                      <span>🕐 {event.time}</span>
                      <span>📍 {event.location}</span>
                    </Typography>
                  </Box>
                ))}
              </Box>
            ) : (
              <Typography
                sx={{
                  fontSize: "1.1rem",
                  lineHeight: 1.8,
                  color: "text.secondary",
                  mb: 2.5,
                }}
              >
                We're currently planning exciting events for the DEMA community.
                Check back soon for announcements!
              </Typography>
            )}

            <Typography
              sx={{
                fontSize: "0.9rem",
                fontWeight: 600,
                color: "secondary.main",
                p: 2,
                bgcolor: (theme) => alpha(theme.palette.secondary.main, 0.08),
                borderRadius: "6px",
                borderLeft: (theme) =>
                  `4px solid ${theme.palette.secondary.main}`,
                mt: 2,
              }}
            >
              📧 Interested in collaborating? Reach out to organize an event
              with DEMA.
            </Typography>
          </Box>
        </Box>
      </Container>

      {/* Previous Events Section */}
      <Container maxWidth="lg" sx={{ py: 3, pb: 4 }}>
        <Box sx={{ mb: 3 }}>
          <Typography
            variant="overline"
            sx={{
              display: "inline-block",
              color: "secondary.main",
              fontWeight: 700,
              mb: 1,
            }}
          >
            PAST EVENTS
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              mb: 1,
              fontSize: { xs: "1.6rem", md: "2.2rem" },
              color: "primary.main",
            }}
          >
            Previous Events
          </Typography>
          <Typography
            sx={{
              fontSize: "0.95rem",
              color: "text.secondary",
              lineHeight: 1.6,
            }}
          >
            Explore our past events and see the impact we've made with our
            community.
          </Typography>
        </Box>

        {/* Carousel with Overlay Arrow Controls */}
        <Box sx={{ position: "relative" }}>
          <Grid container spacing={2.5}>
            {displayedPreviousEvents.map((event, i) => (
              <Grid item xs={12} md={4} key={i}>
                <Box
                  sx={{
                    borderRadius: "10px",
                    overflow: "hidden",
                    height: "100%",
                    transition: "all 0.3s ease",
                    backgroundColor: "background.paper",
                    border: (theme) =>
                      `1.5px solid ${alpha(theme.palette.primary.main, 0.12)}`,
                    boxShadow: (theme) =>
                      `0 2px 8px ${alpha(theme.palette.primary.main, 0.04)}`,
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 3,
                      bgcolor: "secondary.main",
                      zIndex: 1,
                    },
                    "&:hover": {
                      borderColor: "secondary.main",
                      boxShadow: (theme) =>
                        `0 8px 24px ${alpha(theme.palette.primary.main, 0.12)}`,
                      transform: "translateY(-4px)",
                    },
                  }}
                >
                  {/* Event Image */}
                  <Box
                    sx={{
                      height: 140,
                      backgroundImage: `url('${getEventImage(event.image)}')`,
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
                            0.3
                          )} 0%, ${alpha(
                            theme.palette.primary.main,
                            0.1
                          )} 100%)`,
                      },
                    }}
                  />

                  {/* Event Content */}
                  <Box
                    sx={{
                      p: 2.5,
                      flexGrow: 1,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    {/* Category Badge */}
                    <Box sx={{ mb: 1.5 }}>
                      <Chip
                        label={event.category}
                        size="small"
                        sx={{
                          bgcolor: (theme) =>
                            alpha(theme.palette.secondary.main, 0.15),
                          color: "secondary.main",
                          fontWeight: 700,
                          fontSize: "0.75rem",
                        }}
                      />
                    </Box>

                    {/* Title */}
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        mb: 1.5,
                        fontSize: "1.1rem",
                        color: "primary.main",
                      }}
                    >
                      {event.title}
                    </Typography>

                    {/* Date & Time */}
                    <Box
                      sx={{
                        mb: 1,
                        display: "flex",
                        flexDirection: "column",
                        gap: 0.5,
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "0.85rem",
                          fontWeight: 600,
                          color: "secondary.main",
                        }}
                      >
                        📅 {event.date}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "0.85rem",
                          fontWeight: 600,
                          color: "secondary.main",
                        }}
                      >
                        🕐 {event.time}
                      </Typography>
                    </Box>

                    {/* Description */}
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: "0.95rem",
                        lineHeight: 1.6,
                        color: "text.secondary",
                        flexGrow: 1,
                      }}
                    >
                      {event.description}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>

          {/* Left Arrow Control */}
          <IconButton
            onClick={handlePrevCarousel}
            sx={{
              position: "absolute",
              left: -80,
              top: "50%",
              transform: "translateY(-50%)",
              bgcolor: (theme) => alpha(theme.palette.primary.main, 0.2),
              color: (theme) => alpha(theme.palette.primary.main, 0.4),
              transition: "all 0.3s ease",
              "&:hover": {
                bgcolor: (theme) => alpha(theme.palette.primary.main, 0.9),
                color: "white",
                transform: "translateY(-50%) scale(1.15)",
              },
              display: { xs: "none", md: "flex" },
              zIndex: 10,
            }}
          >
            <ChevronLeftIcon fontSize="large" />
          </IconButton>

          {/* Right Arrow Control */}
          <IconButton
            onClick={handleNextCarousel}
            sx={{
              position: "absolute",
              right: -80,
              top: "50%",
              transform: "translateY(-50%)",
              bgcolor: (theme) => alpha(theme.palette.primary.main, 0.2),
              color: (theme) => alpha(theme.palette.primary.main, 0.4),
              transition: "all 0.3s ease",
              "&:hover": {
                bgcolor: (theme) => alpha(theme.palette.primary.main, 0.9),
                color: "white",
                transform: "translateY(-50%) scale(1.15)",
              },
              display: { xs: "none", md: "flex" },
              zIndex: 10,
            }}
          >
            <ChevronRightIcon fontSize="large" />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
}
