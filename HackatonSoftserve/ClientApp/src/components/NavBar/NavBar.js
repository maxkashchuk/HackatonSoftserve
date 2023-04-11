import './NavBar.css';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const NavBar = () => {
  const navigate = useNavigate();

  function goToLogin() {
    navigate('/signin');
    
  }
  function goToSignUp() {
    navigate('/signup');
  }

  function goToStudentProfile() {
    navigate('/studentprofile');
    
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{backgroundColor:'#000'}}>
          {/* <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Name and Surname
          </Typography>
          <Button onClick={goToLogin} color="inherit">
            SignIn
          </Button>
          <Button onClick={goToSignUp} color="inherit">
            SignUp
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
