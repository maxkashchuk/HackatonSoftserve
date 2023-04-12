import * as React from "react";
import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Popover from "@mui/material/Popover";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import LoggedInService from "../LoggedInService";

function CardTeacherComponent(props) {
  const [anchorEl, setAnchorEl] = useState(null);

  const [isShow, setIsShow] = useState();

  const [isRatingShow, setIsRatingShow] = useState(
    props.teacher.rating === null ? false : true
  );

  const [rating, setRating] = useState(props.teacher.rating);

  useEffect(() => {
    setIsShow(LoggedInService());
  }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const id = open ? "simple-popover" : undefined;

  return (
    <div
      style={{
        display: "inline-block",
        marginLeft: "17vh",
        marginTop: "8vh",
      }}
    >
      <Card sx={{ width: 250 }}>
        <CardHeader
          avatar={
            <Avatar
              src={props.teacher.image}
              sx={{ bgcolor: red[500] }}
              aria-label="recipe"
            ></Avatar>
          }
          action={
            isShow && (
              <IconButton onClick={handleClick} aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            )
          }
          title={props.teacher.name + " " + props.teacher.surname}
        />
        {isShow && (
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
                "& > legend": { mt: 2 },
              }}
            ></Box>
            <Typography sx={{ p: 1 }} component="legend">
              Rate teacher
            </Typography>
            <Rating
              sx={{ p: 1 }}
              name="simple-controlled"
              value={rating}
              precision={0.5}
              onChange={(event, newValue) => {
                setRating(newValue);
              }}
            />
          </Popover>
        )}
        <CardContent>
          <Typography variant="h5" sx={{ p: 1 }} component="legend">
            Rating
          </Typography>
          {isRatingShow && (
            <Rating
              sx={{ p: 1 }}
              name="read-only"
              value={rating}
              precision={0.5}
              readOnly
            />
          )}
          {!isRatingShow && <p>Not rated yet</p>}
          <Typography variant="h5" color="text.secondary">
            {props.teacher.subject}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default CardTeacherComponent;
