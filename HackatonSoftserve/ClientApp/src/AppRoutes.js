// import Navbar from "./components/NavMenu/NavMenu";
import Home from './components/Home/Home';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import ChangeUserData from './components/changeuserdata/ChangeUserData';
import StudentProfile from './components/StudentProfile/StudentProfile';

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
  {
    path: '/studentprofile',
    element: <StudentProfile />,
  },
  {
    path: '/changeuserdata',
    element: <ChangeUserData/>,
  }
];

export default AppRoutes;
