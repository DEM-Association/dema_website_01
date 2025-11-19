import React from "react";
import { Box, Typography, Link, Grid, Button, TextField } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{ bgcolor: "primary.main", color: "white", mt: 6 }}
    >
      <Box sx={{ maxWidth: 1200, mx: "auto", px: 2, py: 6 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={5}>
            <Typography variant="h6" sx={{ mb: 1 }}>
              Get the newest DEMA news
            </Typography>
            <Typography variant="caption" sx={{ display: "block", mb: 1 }}>
              Digital Enterprises Management Association
            </Typography>
            <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
              <TextField
                placeholder="Enter email here"
                size="small"
                variant="filled"
                sx={{ bgcolor: "white", borderRadius: 1, flex: 1 }}
                InputProps={{ disableUnderline: true }}
              />
              <Button
                variant="contained"
                color="secondary"
                sx={{ textTransform: "none" }}
              >
                Subscribe
              </Button>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box
              sx={{
                display: "flex",
                gap: 3,
                justifyContent: { xs: "flex-start", md: "center" },
              }}
            >
              <Link href="#" color="inherit" underline="hover">
                HOME
              </Link>
              <Link href="#" color="inherit" underline="hover">
                EVENTS
              </Link>
              <Link href="#" color="inherit" underline="hover">
                ABOUT
              </Link>
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
                  width: 72,
                  height: 72,
                  bgcolor: "white",
                  color: "primary.main",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography variant="h6">LOGO</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={{
            borderTop: "1px solid rgba(255,255,255,0.2)",
            mt: 4,
            pt: 3,
            textAlign: "center",
          }}
        >
          <Typography variant="caption" sx={{ display: "block", mb: 1 }}>
            Privacy Policy | Terms of Use | Manage Cookies
          </Typography>
          <Typography variant="caption">
            © {new Date().getFullYear()} DEMA
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
