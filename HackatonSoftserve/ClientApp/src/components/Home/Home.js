// import Navbar from '../NavMenu/NavMenu';
import './Home.css';
import NavBar from '../NavBar/NavBar';
import CardTeacherComponent from '../Card/CardTeacher';
import CardSubjectComponent from '../Card/CardSubject';
import BottomNavigationComponent from '../BottomNavigation/BottomNavigation';
import { Container } from 'reactstrap';
import { useState } from 'react';

const Home = () => {
  // backend request example
  async function populateWeatherData() {
    const response = await fetch('api/test/example');
    const data = await response.json();
    this.setState({ forecasts: data, loading: false });
  }

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

      {/* <CardSubjectComponent/> */}
      {/* <button onClick={populateWeatherData}>Click</button> */}
    </div>
  );
};

export default Home;
