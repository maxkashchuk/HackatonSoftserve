import { useNavigate } from "react-router-dom"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NavBar from "../NavBar/NavBar";
import './StudentProfile.css'
import { Button, Grid } from "@mui/material";
/*

function saveData() {
    localStorage.getItem("saveLocal")===' '?setStateLocaleStorage(true) : setStateLocaleStorage(false)
                       
    
}*/

const StudentProfile = () => {
    const navigate = useNavigate();
    function goHome() {
        navigate('/')
        
    }
    function changeUser() {
        navigate('/changeuserdata')
    }
    return (
        <div >

            <NavBar></NavBar>
            <div className="vriad">
                <div className="leftData">
                    <AccountCircleIcon sx={{ height: "15%", width: "20%", }}></AccountCircleIcon>
                    <p className="userData"> NAME
                    </p>
                    <p className="userData"> SURNAME
                    </p>
                    <p className="userData"> EMAIL
                    </p>
                    <p className="userData"> ROLE
                    </p>
                    <p className="userData"> FACULTY
                    </p>
                    <p className="userData"> GROUP
                    </p>
                    <Button color="inherit" onClick={changeUser} sx={{ right: "0", marginLeft: "5vh", marginTop: "4vh", marginBottom: "7vh", borderColor: " rgb(80, 67, 49)" }}>
                        Change user data
                    </Button>
                    <Button color="inherit" onClick={goHome} sx={{ right: "0", marginLeft: "5vh", marginTop: "4vh", marginBottom: "7vh", borderColor: " rgb(80, 67, 49)" }}>
                        Back to Home
                    </Button>
                </div>

                <div className="lnuImage">
                </div>
            </div>


        </div>

    );





}

export default StudentProfile
