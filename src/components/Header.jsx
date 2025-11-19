import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";

// Reusable Header component. Accepts optional `links` prop: [{label, href}]
export default function Header({ links = [] }) {
  return (
    <AppBar position="static" elevation={0} sx={{ bgcolor: "primary.main" }}>
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          {/* Left: logo */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Avatar
              sx={{
                bgcolor: "white",
                color: "primary.main",
                width: 40,
                height: 40,
              }}
            >
              D
            </Avatar>
            <Box>
              <Typography
                variant="h6"
                sx={{ color: "white", fontWeight: 700, lineHeight: 1 }}
              >
                DEMA
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  color: "rgba(255,255,255,0.85)",
                  display: { xs: "none", sm: "block" },
                }}
              >
                Digital Enterprises Management Association
              </Typography>
            </Box>
          </Box>

          {/* Center: nav links */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            {links.map((l) => (
              <Button
                key={l.label}
                href={l.href}
                color="inherit"
                sx={{ color: "rgba(255,255,255,0.9)" }}
              >
                {l.label}
              </Button>
            ))}
          </Box>

          {/* Right: auth / icons */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <IconButton
              sx={{ bgcolor: "rgba(255,255,255,0.85)", width: 36, height: 36 }}
              aria-label="square-1"
            >
              <Box sx={{ width: 16, height: 16, bgcolor: "primary.main" }} />
            </IconButton>
            <IconButton
              sx={{ bgcolor: "rgba(255,255,255,0.85)", width: 36, height: 36 }}
              aria-label="square-2"
            >
              <Box sx={{ width: 16, height: 16, bgcolor: "primary.main" }} />
            </IconButton>
            <Button
              variant="text"
              sx={{ color: "white", textTransform: "none" }}
            >
              Login
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
