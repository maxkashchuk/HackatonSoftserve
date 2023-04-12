import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import AdminPanelService from './AdminPanelService';
import Snackbar from '@mui/material/Snackbar';
import Slide from '@mui/material/Slide';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import AdminPanelServiceDelete from './AdminPanelServiceDelete';
import { useNavigate } from 'react-router-dom';
import Navigation from '../BottomNavigation/BottomNavigation';

function TransitionLeft(props) {
  return <Slide {...props} direction="right" />;
}

const theme = createTheme();

export default function AdminPanel() {
  const [open, setOpen] = React.useState(false);

  const [transition, setTransition] = React.useState(undefined);

  const [transitionDel, setTransitionDel] = React.useState(undefined);

  const [FirstName, setFirstName] = React.useState();

  const [SecondName, setSecondName] = React.useState();

  const [Email, setEmail] = React.useState();

  const [delEmail, setDelEmail] = React.useState();

  const [Password, setPassword] = React.useState();

  function addAdmin() {
    const user = {
      Name: FirstName,
      Surname: SecondName,
      Email: Email,
      Password: Password,
      Role: 'admin',
    };
    AdminPanelService(user).then((res) => handleClick());
  }

  function delAdmin() {
    const user = {
      Email: delEmail,
    };
    AdminPanelServiceDelete(user).then((res) => handleClickDel());
  }

  const handleClick = () => {
    setTransition(() => TransitionLeft);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickDel = () => {
    setTransitionDel(() => TransitionLeft);
    setOpen(true);
  };

  const handleCloseDel = () => {
    setOpen(false);
  };

  const navigate = useNavigate();

  function goToHome() {
    navigate('/');
  }

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Button onClick={goToHome} sx={{ marginTop: '2vh', marginLeft: '2vh', fontSize: '1.5rem' }}>
          Dekanat
        </Button>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <SupervisorAccountIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Add new admin
            </Typography>
            <Box component="form" noValidate sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                    onChange={(e) => setSecondName(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Grid>
              </Grid>
              <Button onClick={addAdmin} fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                Add
              </Button>
            </Box>
            <Typography sx={{ marginTop: '3vh' }} component="h1" variant="h5">
              Delete admin by Email
            </Typography>
            <Grid sx={{ marginTop: '3vh' }} item xs={12}>
              <TextField
                required
                fullWidth
                name="delemail"
                label="Email"
                type="email"
                id="delemail"
                onChange={(e) => setDelEmail(e.target.value)}
              />
            </Grid>
            <Button
              onClick={delAdmin}
              fullWidth
              color="error"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}>
              Delete
            </Button>
          </Box>
        </Container>
        <Snackbar
          open={open}
          onClose={handleClose}
          autoHideDuration={6000}
          TransitionComponent={transition}
          message={
            <div>
              <p style={{ display: 'inline' }}>Admin was successfully added</p>
              <AdminPanelSettingsIcon sx={{ marginLeft: '2vh' }} />
            </div>
          }
          key={transition ? transition.name : ''}
        />
        <Snackbar
          open={open}
          onClose={handleCloseDel}
          autoHideDuration={6000}
          TransitionComponent={transitionDel}
          message={
            <div>
              <p style={{ display: 'inline' }}>Admin was successfully deleted</p>
              <AdminPanelSettingsIcon sx={{ marginLeft: '2vh' }} />
            </div>
          }
          key={transitionDel ? transitionDel.name + '1' : '1'}
        />
      </ThemeProvider>
    </div>
  );
}
