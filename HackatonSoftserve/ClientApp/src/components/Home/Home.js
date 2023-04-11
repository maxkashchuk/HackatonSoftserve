import Navbar from '../NavMenu/NavMenu';
import './Home.css'

const Home = () => {

  // backend request example
  async function populateWeatherData(){
    const response = await fetch('api/test/example');
    const data = await response.json();
    this.setState({ forecasts: data, loading: false });
  }

  
  return (
    <div>
      <Navbar/>
      <button onClick={populateWeatherData}>Click</button>
    </div>
  );
}

export default Home