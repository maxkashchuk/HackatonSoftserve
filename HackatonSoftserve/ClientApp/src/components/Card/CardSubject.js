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

function CardSubjectComponent(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
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

  useEffect(() => {
    console.log(props.subject)
  }, []);

  return (
    <div style={{ display: "inline-block", marginTop: "2vh" }}>
      <Card sx={{ width: 250, marginLeft: "10vh", marginTop: "3vh" }}>
        <CardHeader
          action={
            <IconButton onClick={handleClick} aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={props.subject.name}
        />
        <p style={{marginLeft: "3vh"}}>
          {props.subject.description}
        </p>
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
            Rate subject
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
