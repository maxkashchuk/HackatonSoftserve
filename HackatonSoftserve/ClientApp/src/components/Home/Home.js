import './Home.css';
import NavBar from '../NavBar/NavBar';
import CardTeacherComponent from '../Card/CardTeacher';
import CardSubjectComponent from '../Card/CardSubject';
import BottomNavigationComponent from '../BottomNavigation/BottomNavigation';

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
      <BottomNavigationComponent />
      <div className='backgroundImage'/>

      {/* <CardSubjectComponent/> */}
      {/* <button onClick={populateWeatherData}>Click</button> */}
    </div>
  );
};

export default Home;
