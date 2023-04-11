import './Home.css';
import NavBar from '../NavBar/NavBar';
import CardTeacherComponent from '../Card/CardTeacher';
import CardSubjectComponent from '../Card/CardSubject';
import BottomNavigationComponent from '../BottomNavigation/BottomNavigation';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Home = () => {

  return (
    <div>
      <NavBar />
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent:'center' }}>
        <CardTeacherComponent />
        <CardTeacherComponent />
        <CardTeacherComponent />
        <CardTeacherComponent />
        <CardTeacherComponent />
        <CardTeacherComponent />
        <CardTeacherComponent />
      </div>
      <div>
        <Stack spacing={2} sx={{marginLeft: '76vh', marginTop: '8vh'}}>
          <Pagination count={10} variant="outlined" color="primary" />
        </Stack>
      </div>
      <BottomNavigationComponent />
      {/* <div className='backgroundImage'/> */}

      {/* <CardSubjectComponent/> */}
      {/* <button onClick={populateWeatherData}>Click</button> */}
    </div>
  );
};

export default Home;
