import * as React from 'react';
import { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Popover from '@mui/material/Popover';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import LoggedInService from '../LoggedInService';

function CardTeacherComponent() {
  
  const [anchorEl, setAnchorEl] = useState(null);

  const [isShow, setIsShow] = useState();

  useEffect(() => {
    setIsShow(LoggedInService());
  });

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const [rating, setRating] = React.useState(2);

  return (
    <div
      style={{
        display: 'inline-block',
        marginLeft: '2vh',
        marginTop: '3vh',
      }}>
      <Card sx={{}}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          action={ isShow &&
            <IconButton onClick={handleClick} aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Name Surname"
        />
        {
          isShow &&
          <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}>
          <Box
            sx={{
              '& > legend': { mt: 2 },
            }}></Box>
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
        }
        <CardContent>
          <Typography variant="h5" sx={{ p: 1 }} component="legend">
            Rating
          </Typography>
          <Rating sx={{ p: 1 }} name="read-only" value={rating} precision={0.5} readOnly />
          <Typography variant="h5" color="text.secondary">
            Subject
          </Typography>
        </CardContent>
      </Card>

    </div>
  );
}

export default CardTeacherComponent;
