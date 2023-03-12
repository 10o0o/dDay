import { createBrowserRouter } from 'react-router-dom';
import { Home } from './pages/Home';
import { TBD } from './pages/TBD';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/to-be-developed',
    element: <TBD />,
  },
]);
