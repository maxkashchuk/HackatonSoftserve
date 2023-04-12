import { Button, TextField } from "@mui/material";
import NavBar from "../NavBar/NavBar";
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./ChangeUserData.css";

const ChangeUserData = () => {
  const navigate = useNavigate();
  function goHome() {
    navigate("/");
  }
  function backToUser() {
    navigate("/studentprofile");
  }

  return (
    <div>
      <NavBar></NavBar>

      <div className="lnuImage">
        <div className="leftData">
          <AccountCircleIcon
            sx={{ height: "15%", width: "20%" }}
          ></AccountCircleIcon>

          <div>
            <div className="input2">
              <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                className="input1"
                sx={{ borderColor: "#000", backgroundColor: "#FBFAF0" }}
              />
            </div>

            <div className="input2">
              <TextField
                id="outlined-basic"
                label="Surname"
                variant="outlined"
                className="input1"
                sx={{ borderColor: "#000", backgroundColor: "#FBFAF0" }}
              />
            </div>

            <div className="input2">
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                className="input1"
                sx={{ borderColor: "#000", backgroundColor: "#FBFAF0" }}
              />
            </div>

            <div className="input2">
              <TextField
                id="outlined-basic"
                label="Role"
                variant="outlined"
                className="input1"
                sx={{ borderColor: "#000", backgroundColor: "#FBFAF0" }}
              />
            </div>

            <div className="input2">
              <TextField
                id="outlined-basic"
                label="Faculty"
                variant="outlined"
                className="input1"
                sx={{ borderColor: "#000", backgroundColor: "#FBFAF0" }}
              />
            </div>

            <div className="input2">
              <TextField
                id="outlined-basic"
                label="Group"
                variant="outlined"
                className="input1"
                sx={{ borderColor: "#000", backgroundColor: "#FBFAF0" }}
              />
            </div>
          </div>

          <Button
            color="inherit"
            onClick={backToUser}
            sx={{
              right: "0",
              marginLeft: "5vh",
              marginTop: "4vh",
              marginBottom: "7vh",
              borderColor: " rgb(80, 67, 49)",
            }}
          >
            Back to User
          </Button>
          <Button
            color="inherit"
            onClick={goHome}
            sx={{
              right: "0",
              marginLeft: "5vh",
              marginTop: "4vh",
              marginBottom: "7vh",
              borderColor: " rgb(80, 67, 49)",
            }}
          >
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChangeUserData;
