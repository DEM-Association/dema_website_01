import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Container from "@mui/material/Container";

export default function Layout({ children }) {
  const links = [
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    { label: "Events", href: "#" },
  ];

  return (
    <>
      <Header links={links} />
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        {children}
      </Container>
      <Footer />
    </>
  );
}
