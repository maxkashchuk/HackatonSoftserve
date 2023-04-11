// import Navbar from "./components/NavMenu/NavMenu";
import Home from './components/Home/Home';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';

const AppRoutes = [
  {
    index: true,
    element: <Home />,
  },
  {
    path: '/signin',
    element: <SignIn />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
];

export default AppRoutes;
