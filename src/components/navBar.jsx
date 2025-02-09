import { AppBar, Toolbar, Typography, Box } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        padding: "0 20px",
        backgroundColor: "#6B7AA1",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Left Side - App Name */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img
            src="/to-do-list.png"
            alt="Logo"
            style={{ width: "40px", height: "40px", marginRight: "10px" }}
          />
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          TaskQ
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
