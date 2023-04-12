import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { styled } from "@mui/material/styles";
import * as SignUpService from "../SignIn/SignInService";
import SignUpServiceStudent from "./SignUpServiceStudent";
import SignUpServiceTeacher from "./SignUpServiceTeacher";

const theme = createTheme();

const FileButton = styled(Button)({
  width: "23vh",
  marginLeft: "12%",
  color: "#f48700",
  borderColor: "#f48700",
  "&:hover": {
    color: "#FFC75F",
    borderColor: "#FFC75F",
  },
  "&:active": {
    color: "f48700",
    borderColor: "f48700",
  },
  "&:focus": {
    color: "f48700",
    borderColor: "f48700",
  },
});

export default function SignUp() {
  const [File, setSelectedFile] = React.useState();

  const [FirstName, setFirstName] = React.useState();

  const [SecondName, setSecondName] = React.useState();

  const [Email, setEmail] = React.useState();

  const [Password, setPassword] = React.useState();

  const [Role, setRole] = React.useState();

  const [Faculty, setFaculty] = React.useState();

  const [Group, setGroup] = React.useState();

  const [Subject, setSubject] = React.useState();

  function register() {
    if (Role === "student") {
      const user = {
        Name: FirstName,
        Surname: SecondName,
        Email: Email,
        Password: Password,
        Role: Role,
        Faculty: Faculty,
        Group: Group,
        Image: File,
      };
      SignUpServiceStudent(user).then(() => navigate("/signin"));
    } else {
      const user = {
        Name: FirstName,
        Surname: SecondName,
        Email: Email,
        Password: Password,
        Role: Role,
        Faculty: Faculty,
        Image: File,
        Subject: Subject,
      };
      SignUpServiceTeacher(user).then(() => navigate("/signin"));
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const navigate = useNavigate();
  function goToSignIn() {
    navigate("/signin");
  }

  const onSelectFile = async (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    const result = await convertBase64(e.target.files[0]);
    setSelectedFile(result);
    e.target.value = "";
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  return (
    <div className="lnu">
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
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
              <Grid sx={{ marginTop: "3vh" }}>
                <FormLabel
                  sx={{ marginLeft: "20vh" }}
                  id="demo-row-radio-buttons-group-label"
                >
                  Who are you?
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  sx={{ marginLeft: "15vh" }}
                >
                  <FormControlLabel
                    value="student"
                    onChange={() => setRole("student")}
                    control={<Radio />}
                    label="Student"
                  />
                  <FormControlLabel
                    value="teacher"
                    onChange={() => setRole("teacher")}
                    control={<Radio />}
                    label="Teacher"
                  />
                </RadioGroup>
              </Grid>
              <Grid item xs={12} sx={{ marginTop: "3vh" }}>
                <TextField
                  required
                  fullWidth
                  name="faculty"
                  label="Faculty"
                  type="faculty"
                  id="faculty"
                  autoComplete="Faculty"
                  onChange={(e) => setFaculty(e.target.value)}
                />
              </Grid>
              {Role === "student" && (
                <Grid item xs={12} sx={{ marginTop: "3vh" }}>
                  <TextField
                    required
                    fullWidth
                    name="group"
                    label="Group"
                    type="group"
                    id="group"
                    autoComplete="Group"
                    onChange={(e) => setGroup(e.target.value)}
                  />
                </Grid>
              )}
              {Role === "teacher" && (
                <Grid item xs={12} sx={{ marginTop: "3vh" }}>
                  <TextField
                    required
                    fullWidth
                    name="subject"
                    label="Subject"
                    type="subject"
                    id="subject"
                    autoComplete="Subject"
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </Grid>
              )}
              <Grid item xs={12} sx={{ marginTop: "3vh" }}>
                <label htmlFor="upload-photo">
                  <input
                    style={{ display: "none" }}
                    name="upload-photo"
                    type="file"
                    id="upload-photo"
                    accept="image/*"
                    onChange={onSelectFile}
                  />
                  <FileButton
                    style={{ marginTop: "13%" }}
                    variant="outlined"
                    component="span"
                  >
                    Pick photo
                  </FileButton>
                </label>
              </Grid>
              <Button
                onClick={register}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link type="submit" onClick={goToSignIn} variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}
