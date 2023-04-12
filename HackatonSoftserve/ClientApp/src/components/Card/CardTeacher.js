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
import Slider from '@mui/material/Slider';
import { Button } from '@mui/material';
import CardTeacherService from './CardTeacherService';

function CardTeacherComponent(props) {
  const [anchorEl, setAnchorEl] = useState(null);

  const [isShow, setIsShow] = useState();

  const [isRatingShow, setIsRatingShow] = useState(props.teacher.rating === null ? false : true);

  const [rating, setRating] = useState(props.teacher.rating);

  const [subjectName, setSubjectName] = useState(props.teacher.email);

  const [Material, setMaterial] = useState();

  const [WishStudent, setWishStudent] = useState();

  function setTeacherRating() {
    console.log(subjectName);
    console.log(Material);
    console.log(WishStudent);
    const user = {
      TeacherEmail: subjectName,
      StudyingQuality: Material,
      StimulatingStudents: WishStudent
    };
    CardTeacherService(user);
  }

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

  function valuetext(value) {
    return `${value}`;
  }

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

  const id = open ? 'simple-popover' : undefined;

  return (
    <div
      style={{
        display: 'inline-block',
        marginLeft: '17vh',
        marginTop: '8vh',
      }}>
      <Card
        sx={{
          width: 250,
          backgroundColor: '#DDDDDD',
          boxShadow:
            'box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;',
        }}>
        <CardHeader
          avatar={
            <Avatar
              src={props.teacher.image}
              sx={{ bgcolor: red[500] }}
              aria-label="recipe"></Avatar>
          }
          action={
            isShow && (
              <IconButton onMouseOver={handleClick} aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            )
          }
          title={props.teacher.name + ' ' + props.teacher.surname}
        />
        {isShow && (
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
                '& > legend': { mt: 8 },
                margin: '5vh',
              }}></Box>
            <div>
              <Typography variant="h5" sx={{ p: 1, marginLeft: '6vh' }} component="legend">
                Rating
              </Typography>
            </div>
            <div>
              <Typography variant="h6" sx={{ p: 1, marginLeft: '3vh' }} component="legend">
                Studying quality
              </Typography>
            </div>
            <div style={{ marginLeft: '2vh', margin: '2vh' }}>
              <Slider
                defaultValue={0}
                getAriaValueText={valuetext}
                step={20}
                marks={marks}
                onChange={(e, val) => {
                  switch (val) {
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
              <Typography variant="h6" sx={{ p: 1, marginLeft: '3vh' }} component="legend">
                Stimulating students
              </Typography>
            </div>
            <div style={{ marginLeft: '2vh', margin: '2vh' }}>
              <Slider
                defaultValue={0}
                getAriaValueText={valuetext}
                step={20}
                marks={marks}
                onChange={(e, val) => {
                  switch (val) {
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
            <div style={{ margin: '2vh', marginLeft: '5vh' }}>
              <Button variant="outlined" onClick={setTeacherRating}>
                Submit
              </Button>
            </div>
            {/* 
            
            <div style={{ marginLeft: '2vh', margin: '2vh' }}>
              <Slider defaultValue={0} getAriaValueText={valuetext} step={20} marks={marks} />
            </div>
            <div>
              <Typography variant="h6" sx={{ p: 1, marginLeft: '3vh' }} component="legend">
                Wish to study
              </Typography>
            </div>
            <div style={{ marginLeft: '2vh', margin: '2vh' }}>
              <Slider defaultValue={0} getAriaValueText={valuetext} step={20} marks={marks} />
            </div>
            <div style={{ margin: '2vh', marginLeft: '5vh' }}>
              <Button variant="outlined">Submit</Button>
            </div> */}
          </Popover>
        )}
        <CardContent>
          <Typography variant="h5" sx={{ p: 1 }} component="legend">
            Rating
          </Typography>
          {isRatingShow && (
            <Rating sx={{ p: 1 }} name="read-only" value={rating} precision={0.5} readOnly />
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
