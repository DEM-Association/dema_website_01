import React from "react";
import { Box, Button, TextField, InputAdornment } from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

export default function Header() {
  const location = useLocation();

  const navItems = [
    { label: "D" },
    { label: "HOME", path: "/" },
    { label: "EVENTS", path: "/events" },
    { label: "YEC", path: "#" },
    { label: "ABOUT", path: "#" },
  ];

  return (
    <Box
      component="header"
      sx={{
        background: "linear-gradient(135deg, #0a1628 0%, #0d1f59 50%, #1a2b4a 100%)",
        py: 1.5,
        px: { xs: 2, sm: 3 },
        boxShadow: "0 2px 12px rgba(0, 0, 0, 0.3)",
      }}
    >
      <Box
        sx={{
          maxWidth: 1200,
          mx: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
          flexWrap: "wrap",
        }}
      >
        {/* Navigation Links */}
        <Box
          sx={{
            display: "flex",
            gap: { xs: 1, sm: 2 },
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {navItems.map((item, index) => (
            <Button
              key={index}
              component={item.path !== "#" ? RouterLink : "button"}
              to={item.path !== "#" ? item.path : undefined}
              sx={{
                color: "#ffffff",
                fontWeight: 550,
                fontSize: { xs: "0.75rem", sm: "0.85rem" },
                textTransform: "uppercase",
                minWidth: "auto",
                px: { xs: 1, sm: 1.5 },
                py: 0.5,
                bgcolor:
                  location.pathname === item.path && item.path !== "#"
                    ? "rgba(0,0,0,0.1)"
                    : "transparent",
                "&:hover": {
                  bgcolor: "rgba(0,0,0,0.15)",
                },
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>

        {/* Search and Login */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          {/* Search Bar */}
          <TextField
            placeholder="Search"
            size="small"
            sx={{
              width: { xs: 120, sm: 160 },
              bgcolor: "rgba(255, 255, 255, 0.2)",
              borderRadius: 1,
              "& .MuiOutlinedInput-root": {
                height: "32px",
                "& fieldset": {
                  borderColor: "rgba(255, 255, 255, 0.3)",
                },
              },
              "& input": {
                padding: "6px 8px",
                fontSize: "0.8rem",
                color: "#fff",
                "&::placeholder": {
                  color: "rgba(255, 255, 255, 0.7)",
                  opacity: 1,
                },
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ fontSize: "1rem", color: "rgba(255, 255, 255, 0.7)" }} />
                </InputAdornment>
              ),
            }}
          />

          {/* Login Button */}
          <Button
            sx={{
              background: "linear-gradient(135deg, #d4af37 0%, #c9a961 100%)",
              color: "#0d1f59",
              fontWeight: 700,
              fontSize: { xs: "0.75rem", sm: "0.85rem" },
              textTransform: "uppercase",
              px: 2,
              py: 0.5,
              height: "32px",
              minWidth: "auto",
              boxShadow: "0 2px 8px rgba(212, 175, 55, 0.3)",
              "&:hover": {
                background: "linear-gradient(135deg, #e5c158 0%, #d4af37 100%)",
                boxShadow: "0 4px 12px rgba(212, 175, 55, 0.5)",
              },
            }}
          >
            Login
          </Button>
          </Box>
        </Box>
      </Box>
  );
}
