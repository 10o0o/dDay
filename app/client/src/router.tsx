import { createBrowserRouter } from 'react-router-dom';
import { AddDDay } from './pages/AddDDay';
import { Home } from './pages/Home';
import { TBD } from './pages/TBD';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/add-d-day',
    element: <AddDDay />,
  },
  {
    path: '/to-be-developed',
    element: <TBD />,
  },
]);
