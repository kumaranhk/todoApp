import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        position: "fixed",
        bottom: 0,
        left: 0,
        backgroundColor: "#6B7AA1",
        color: "white",
        textAlign: "center",
        py: 2,
        boxShadow: "0 -2px 5px rgba(0, 0, 0, 0.2)"
      }}
    >
      <Typography variant="body2">
        © 2025 TaskQ. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
