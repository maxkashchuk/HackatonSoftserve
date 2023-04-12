import Home from './components/Home/Home';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import ChangeUserData from './components/changeuserdata/ChangeUserData';
import StudentProfile from './components/StudentProfile/StudentProfile';
import AdminPanel from './components/AdminPanel/AdminPanel';
import AddSubject from './components/AddSubject/AddSubject';
import SubjectHome from './components/SubjectHome/SubjectHome';

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
    path: '/addsubject',
    element: <AddSubject />,
  },
  {
    path: '/adminpanel',
    element: <AdminPanel />,
  },
  {
    path: '/studentprofile',
    element: <StudentProfile />,
  },
  {
    path: '/changeuserdata',
    element: <ChangeUserData />,
  },
  {
    path: '/subjecthome',
    element: <SubjectHome />,
  },
];

export default AppRoutes;
