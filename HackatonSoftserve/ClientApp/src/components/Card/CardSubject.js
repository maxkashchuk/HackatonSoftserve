import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Popover from "@mui/material/Popover";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { useEffect, useState } from "react";
import LoggedInService from "../LoggedInService";
import { Button } from "@mui/material";
import Slider from '@mui/material/Slider';

const marks = [
  {
    value: 0,
    label: '0',
  },
  {
    value: 20,
    label: '1',
  },
  {
    value: 40,
    label: '2',
  },
  {
    value: 60,
    label: '3',
  },
  {
    value: 80,
    label: '4',
  },
  {
    value: 100,
    label: '5',
  },
];

function CardSubjectComponent(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  
  const [isShow, setIsShow] = useState();
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    console.log("Subject name");
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const [rating, setRating] = React.useState(2);

  const [isRatingShow, setIsRatingShow] = useState(
    props.subject.rating === null ? false : true
  );
  
  const [subjectName, setSubjectName] = useState(props.subject.name);

  const [Material, setMaterial] = useState();

  const [WishStudent, setWishStudent] = useState();

  function setSubjectRating()
  {
    console.log(subjectName);
    console.log(Material);
    console.log(WishStudent);
  }

  useEffect(() => {
    setIsShow(LoggedInService());
  }, []);

  function valuetext(value) {
    return `${value}`;
  }

  return (
    <div style={{ display: "inline-block", marginTop: "2vh" }}>
      <Card sx={{ width: 250, marginLeft: "10vh", marginTop: "3vh" }}>
        <CardHeader
          action={ isShow &&
            <IconButton aria-label="settings">
              <MoreVertIcon onMouseOver={handleClick}/>
            </IconButton>
          }
          title={props.subject.name}
        />
        <p style={{marginLeft: "3vh"}}>
          {props.subject.description}
        </p>
        {isShow && 
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <Box
              sx={{
                "& > legend": { mt: 8 },
                margin: '5vh'
              }}
            ></Box>
            <div>
            <Typography variant="h5" sx={{ p: 1, marginLeft: "6vh" }} component="legend">
            Rating
          </Typography>
            </div>
            <div>
            <Typography variant="h6" sx={{ p: 1, marginLeft: "3vh" }} component="legend">
            Material quality
          </Typography>
            </div>
            <div style={{marginLeft: "2vh", margin: "2vh"}}>
            <Slider
              defaultValue={0}
              getAriaValueText={valuetext}
              step={20}
              marks={marks}
              onChange={(e, val) => {
                switch(val)
                {
                  case 0:
                    setMaterial(0);
                    break;
                  case 20:
                    setMaterial(1);
                    break;
                  case 40:
                    setMaterial(2);
                    break;
                  case 60:
                    setMaterial(3);
                    break;
                  case 80:
                    setMaterial(4);
                    break;
                  case 100:
                    setMaterial(5);
                    break;
                }
              }}
            />
            </div>
            <div>
            <Typography variant="h6" sx={{ p: 1, marginLeft: "3vh" }} component="legend">
            Wish to study
          </Typography>
            </div>
            <div style={{marginLeft: "2vh", margin: "2vh"}}>
            <Slider
              defaultValue={0}
              getAriaValueText={valuetext}
              step={20}
              marks={marks}
              onChange={(e, val) => {
                switch(val)
                {
                  case 0:
                    setWishStudent(0);
                    break;
                  case 20:
                    setWishStudent(1);
                    break;
                  case 40:
                    setWishStudent(2);
                    break;
                  case 60:
                    setWishStudent(3);
                    break;
                  case 80:
                    setWishStudent(4);
                    break;
                  case 100:
                    setWishStudent(5);
                    break;
                }
              }}
            />
            </div>
            <div style={{margin: "2vh", marginLeft: "5vh"}}>
            <Button variant='outlined' onClick={setSubjectRating}>Submit</Button>
            </div>
          </Popover>
        }
        <CardContent>
          <Typography variant="h5" sx={{ p: 1 }} component="legend">
            Rating
          </Typography>
          {
            isRatingShow &&
            <Rating
            sx={{ p: 1 }}
            name="read-only"
            value={rating}
            precision={0.5}
            readOnly
          />
          }
        </CardContent>
      </Card>
    </div>
  );
}

export default CardSubjectComponent;
