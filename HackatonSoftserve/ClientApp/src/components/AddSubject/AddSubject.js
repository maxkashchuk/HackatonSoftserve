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
import Snackbar from '@mui/material/Snackbar';
import Slide from '@mui/material/Slide';
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import AddSubjectService from './AddSubjectService';
import DeleteSubjectService from './DeleteSubjectService';
import BookIcon from '@mui/icons-material/Book';
import PlaylistAddCheckCircleIcon from '@mui/icons-material/PlaylistAddCheckCircle';

function TransitionLeft(props) {
    return <Slide {...props} direction="right" />;
  }
  
  const theme = createTheme();
  
  export default function AddSubject() {

    const [open, setOpen] = React.useState(false);

    const [openDel, setOpenDel] = React.useState(false);

    const [transition, setTransition] = React.useState(undefined);

    const [transitionDel, setTransitionDel] = React.useState(undefined);

    const [Name, setName] = React.useState();

    const [Description, setDescription] = React.useState();

    const [delName, setDelName] = React.useState();

    const [Student, setStudent] = React.useState();

    function addAdmin()
    {
        const user = {
            Name: Name,
            Description: Description
          };
          AddSubjectService(user).then((res) => handleClick());
    }

    function delAdmin()
    {
        const user = {
            Name: delName
          };
          DeleteSubjectService(user).then((res) => handleClickDel());
    }

    const handleClick = () => {
        setTransition(() => TransitionLeft);
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpenDel(false);
      };

      const handleClickDel = () => {
        setTransitionDel(() => TransitionLeft);
        setOpenDel(true);
      };
    
      const handleCloseDel = () => {
        setOpenDel(false);
      };
    
  
    return (
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <BookIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Add new subject
            </Typography>
            <Box component="form" noValidate sx={{ mt: 3 }}>
              <Grid container spacing={2}>
              <TextField
                    autoComplete="given-name"
                    name="Name"
                    required
                    fullWidth
                    id="Name"
                    label="Name"
                    autoFocus
                    onChange={(e) => setName(e.target.value)}
                  />
                <TextField
                        sx={{marginTop: '5vh'}}
                        required
                        fullWidth
                        name="description"
                        label="Description"
                        type="description"
                        id="description"
                        onChange={(e) => setDescription(e.target.value)}
                    />
              </Grid>
              <Button
                onClick={addAdmin}
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Add
              </Button>
            </Box>
            <Typography sx={{marginTop: '3vh'}} component="h1" variant="h5">
              Delete subject by Name
            </Typography>
            <Grid sx={{marginTop: '3vh'}} item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="delname"
                    label="Name"
                    type="delname"
                    id="delname"
                    onChange={(e) => setDelName(e.target.value)}
                  />
                </Grid>
                <Button
                onClick={delAdmin}
                fullWidth
                color='error'
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Delete
              </Button>
          </Box>
        </Container>
        <Snackbar
        open={openDel}
        onClose={handleCloseDel}
        autoHideDuration={6000}
        TransitionComponent={transitionDel}
        message={
            <div>
                <p style={{display: 'inline'}}>Subject was successfully deleted</p>
                <PlaylistAddCheckCircleIcon sx={{marginLeft: '2vh'}}/>
            </div>
        }
        key={transitionDel ? transitionDel.name : ''}
      />
      <Snackbar
        open={open}
        onClose={handleClose}
        autoHideDuration={6000}
        TransitionComponent={transition}
        message={
            <div>
                <p style={{display: 'inline'}}>Subject was successfully added</p>
                <PlaylistAddCheckCircleIcon sx={{marginLeft: '2vh'}}/>
            </div>
        }
        key={transition ? transition.name + '1' : '1'}
      />
      </ThemeProvider>
    );
  }