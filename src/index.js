import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  createBrowserRouter as Router,
  RouterProvider
} from 'react-router-dom'


import Home from './routes/Home';
import Menus from './routes/Menus';
import About from './routes/About';
import LocationAndTime from './routes/LocationAndTime';
import Reservation from './routes/Reservation';
import User from './routes/User';
import MenuCategories from './routes/MenuCategories';
import Thanks from './routes/Thanks'
import EditReservation from './routes/EditReservation'
import ErrorElement from './routes/Error';

import loaders from './helper/loaders';
import actions from './helper/actions';



const router = Router([{
  path: '/resturant',
  element: <App />,
  errorElement: <ErrorElement />,
  children: [{
    path: '',
    element: <Home />
  }, {

    path: 'menu',
    element: <Menus />,
    loader: loaders.menusLoader,

    // TODO: Each menu category
    children: [{
      path: 'bbq',
      element: <MenuCategories />
    }, {
      path: 'drinks',
      element: <MenuCategories />
    }, {
      path: '',
      element: <MenuCategories />
    }]
  }, {

    path: 'about',
    element: <About />
  }, {

    path: 'location',
    element: <LocationAndTime />
  }, {

    path: 'reservation/',
    element: <Reservation />,
    action: actions.reservationCreator
  }, {

    path: 'users/:userId',
    element: <User />,
    loader: loaders.userLoader,
  }, {
    path: 'thanks/:username',
    element: <Thanks />,
  }, {
    path: 'reservation/:reservationId/edit',
    element: <EditReservation />,
    loader: loaders.loadReservationToEdit
  }]
}])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);