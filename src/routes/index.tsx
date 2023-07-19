import { Navigate, useRoutes } from 'react-router-dom';
import MasterLayout from '../layout/MasterLayout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Favorites from '../pages/Favorites';
import Details from '../pages/Details';

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <MasterLayout />,
      children: [
        { element: <Home />, index: true },
        { element: <Favorites />, path: '/favorites' },
        { element: <Details />, path: '/details/:id' },
      ],
    },
    {
      path: '/login',
      element: <Login />,
    },

    { path: '*', element: <Navigate to='/404' replace /> },
  ]);
}
