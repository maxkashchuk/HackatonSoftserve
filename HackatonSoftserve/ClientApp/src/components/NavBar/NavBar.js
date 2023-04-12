import "./NavBar.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import LoggedInService from "../LoggedInService";

const NavBar = () => {
  const navigate = useNavigate();

  const [isShow, setIsShow] = useState();

  useEffect(() => {
    setIsShow(LoggedInService());
  });

  function logOut() {
    localStorage.removeItem("isLogged");
    localStorage.removeItem("User");
    navigate("/");
    window.location.reload(false);
  }

  function goToLogin() {
    navigate("/signin");
  }
  function goToSignUp() {
    navigate("/signup");
  }

  function goToStudentProfile() {
    navigate("/studentprofile");
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ backgroundColor: "#000" }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dekanat
          </Typography>
          {!isShow && (
            <div>
              <Button variant="outlined" onClick={goToLogin} color="inherit">
                Log In
              </Button>
            </div>
          )}
          {isShow && (
            <Button onClick={logOut} color="inherit">
              Log Out
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
