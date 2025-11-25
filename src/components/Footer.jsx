import React from "react";
import { Box, Typography, Button, TextField, Grid, IconButton } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        background: "linear-gradient(135deg, #0a1628 0%, #0d1f59 50%, #1a2b4a 100%)",
        color: "#fff",
        mt: 6,
        py: 5,
      }}
    >
      <Box sx={{ maxWidth: 1200, mx: "auto", px: { xs: 2, sm: 3 } }}>
        <Grid container spacing={4} alignItems="flex-start">
          <Grid item xs={12} md={4}>
            <Typography sx={{ fontWeight: 700, fontSize: "1rem", mb: 1, color: "#fff" }}>
              Get the newest DEMA news
            </Typography>
            <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
              <TextField
                placeholder="Email address here"
                size="small"
                variant="outlined"
                sx={{
                  bgcolor: "rgba(255, 255, 255, 0.15)",
                  borderRadius: 1,
                  flex: 1,
                  "& .MuiOutlinedInput-root": {
                    height: "40px",
                    "& fieldset": {
                      borderColor: "rgba(255, 255, 255, 0.3)",
                    },
                  },
                  "& input": {
                    padding: "10px 12px",
                    fontSize: "0.85rem",
                    color: "#fff",
                    "&::placeholder": {
                      color: "rgba(255, 255, 255, 0.7)",
                      opacity: 1,
                    },
                  },
                }}
              />
              <Button
                variant="contained"
                sx={{
                  background: "linear-gradient(135deg, #d4af37 0%, #c9a961 100%)",
                  color: "#0d1f59",
                  textTransform: "none",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  height: "40px",
                  px: 3,
                  boxShadow: "0 2px 8px rgba(212, 175, 55, 0.3)",
                  "&:hover": {
                    background: "linear-gradient(135deg, #e5c158 0%, #d4af37 100%)",
                    boxShadow: "0 4px 12px rgba(212, 175, 55, 0.5)",
                  },
                }}
              >
                Subscribe
              </Button>
            </Box>
            <Box sx={{ display: "flex", gap: 1 }}>
              <IconButton
                component="a"
                href="https://www.instagram.com/demassociation/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  bgcolor: "rgba(255, 255, 255, 0.15)",
                  color: "white",
                  width: 32,
                  height: 32,
                  "&:hover": { 
                    background: "linear-gradient(135deg, #d4af37 0%, #c9a961 100%)",
                    transform: "translateY(-2px)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                <InstagramIcon sx={{ fontSize: "1.1rem" }} />
              </IconButton>
              <IconButton
                component="a"
                href="https://www.linkedin.com/company/demassociation"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  bgcolor: "rgba(255, 255, 255, 0.15)",
                  color: "white",
                  width: 32,
                  height: 32,
                  "&:hover": { 
                    bgcolor: "rgba(10, 102, 194, 0.8)",
                    transform: "translateY(-2px)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                <LinkedInIcon sx={{ fontSize: "1.1rem" }} />
              </IconButton>
            </Box>
          </Grid>

          <Grid item xs={12} md={5}>
            <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap", justifyContent: { xs: "flex-start", md: "center" } }}>
              <Button
                component={RouterLink}
                to="/"
                sx={{
                  color: "rgba(255, 255, 255, 0.9)",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  textTransform: "uppercase",
                  "&:hover": {
                    color: "#fff",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  },
                }}
              >
                HOME
              </Button>
              <Button
                component={RouterLink}
                to="/events"
                sx={{
                  color: "rgba(255, 255, 255, 0.9)",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  textTransform: "uppercase",
                  "&:hover": {
                    color: "#fff",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  },
                }}
              >
                EVENTS
              </Button>
              <Button
                component={RouterLink}
                to="/events"
                sx={{
                  color: "rgba(255, 255, 255, 0.9)",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  textTransform: "uppercase",
                  "&:hover": {
                    color: "#fff",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  },
                }}
              >
                YEC
              </Button>
              <Button
                component={RouterLink}
                to="/events"
                sx={{
                  color: "rgba(255, 255, 255, 0.9)",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  textTransform: "uppercase",
                  "&:hover": {
                    color: "#fff",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  },
                }}
              >
                ABOUT
              </Button>
              <Button
                component={RouterLink}
                to="/events"
                sx={{
                  color: "rgba(255, 255, 255, 0.9)",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  textTransform: "uppercase",
                  "&:hover": {
                    color: "#fff",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  },
                }}
              >
                MEET OUR TEAM
              </Button>
            </Box>
          </Grid>

          <Grid item xs={12} md={3}>
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "flex-start", md: "flex-end" },
              }}
            >
              <Box
                sx={{
                  background: "linear-gradient(135deg, #d4af37 0%, #c9a961 100%)",
                  color: "#0d1f59",
                  px: 3,
                  py: 1.5,
                  borderRadius: 1,
                  fontWeight: 700,
                  fontSize: "1rem",
                  boxShadow: "0 4px 12px rgba(212, 175, 55, 0.3)",
                }}
              >
                DEMA
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={{
            borderTop: "2px solid rgba(255, 255, 255, 0.2)",
            mt: 4,
            pt: 3,
            textAlign: "center",
          }}
        >
          <Box sx={{ display: "flex", gap: 2, justifyContent: "center", mb: 1.5, flexWrap: "wrap" }}>
            <Typography sx={{ fontSize: "0.75rem", color: "rgba(255, 255, 255, 0.8)", cursor: "pointer", "&:hover": { color: "#fff", textDecoration: "underline" } }}>
              Privacy Policy
            </Typography>
            <Typography sx={{ fontSize: "0.75rem", color: "rgba(255, 255, 255, 0.5)" }}>|</Typography>
            <Typography sx={{ fontSize: "0.75rem", color: "rgba(255, 255, 255, 0.8)", cursor: "pointer", "&:hover": { color: "#fff", textDecoration: "underline" } }}>
              Terms of Use
            </Typography>
            <Typography sx={{ fontSize: "0.75rem", color: "rgba(255, 255, 255, 0.5)" }}>|</Typography>
            <Typography sx={{ fontSize: "0.75rem", color: "rgba(255, 255, 255, 0.8)", cursor: "pointer", "&:hover": { color: "#fff", textDecoration: "underline" } }}>
              Manage Cookies
            </Typography>
          </Box>
          <Typography sx={{ fontSize: "0.7rem", color: "rgba(255, 255, 255, 0.7)" }}>
            Copyright © {new Date().getFullYear()} DEMA - Digital Enterprises Management Association
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
