import './NavMenu.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

const NavMenu = () => {
  const navigate = useNavigate();

  function goToLogin() {
    navigate('/signin');
    
  }

  function goToStudentProfile() {
    navigate('/studentprofile');
    
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx= {{backgroundColor: "#494737", zIndex: "1", shadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;"}}>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Home
          </Typography>
          <Button onClick={goToStudentProfile} color="inherit">	
            Profile
          </Button>
          <Button color="inherit">
            Chart
          </Button>
          <Button onClick={goToLogin} color="inherit">	
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavMenu;
