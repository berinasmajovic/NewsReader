import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { logout } from "../../firebase-config";
import { VerticalSplitOutlined } from "@mui/icons-material";

const ButtonAppBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            News Reader
          </Typography>
          <Button variant="contained" onClick={logout} style={{ backgroundColor: "white", color: "#1976d2" }}>
            LOG OUT
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default ButtonAppBar;
