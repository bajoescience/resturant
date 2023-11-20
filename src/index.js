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


import homeImg from './images/one.jpg'
import twoImg from './images/two.jpg'
import threeImg from './images/three.jpg'
import fourImg from './images/four.jpg'

// Home image contains {img, title}
const homeImage = {img: homeImg, title: "Joe's Resturant"}

// This list must contain type which is either image or text
// arranged the way it is meant to be displayed
const stack = [
  {src: twoImg, alt: 'image', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus volutpat interdum nulla, eget laoreet mi commodo id. Etiam ac augue odio. Vestibulum sed mauris imperdiet, gravida ex vitae, volutpat mauris. Donec venenatis, justo a sodales convallis, metus mauris sagittis massa, in aliquet massa tellus ut eros. Nulla facilisi. Nullam imperdiet, metus id convallis blandit, sem diam elementum metus, quis gravida urna nibh eget mauris. Etiam eget sapien sodales, vestibulum ligula non, elementum ipsum. Fusce molestie commodo lorem, nec tempor augue molestie hendrerit. Proin mauris felis, ultrices ut augue id, mollis fermentum enim. Quisque venenatis magna a enim molestie, ac hendrerit ligula commodo. Morbi elit leo, molestie a tellus eu, venenatis feugiat urna. Curabitur vitae ante sit amet nisi ultrices posuere. Pellentesque egestas sapien sit amet metus placerat, nec consequat elit fermentum. Vivamus lorem felis, consequat in porttitor ut, luctus at odio. Nullam ut molestie erat. Sed scelerisque tortor non malesuada iaculis.'},
  {src: threeImg, alt: 'image', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus volutpat interdum nulla, eget laoreet mi commodo id. Etiam ac augue odio. Vestibulum sed mauris imperdiet, gravida ex vitae, volutpat mauris. Donec venenatis, justo a sodales convallis, metus mauris sagittis massa, in aliquet massa tellus ut eros. Nulla facilisi. Nullam imperdiet, metus id convallis blandit, sem diam elementum metus, quis gravida urna nibh eget mauris. Etiam eget sapien sodales, vestibulum ligula non, elementum ipsum. Fusce molestie commodo lorem, nec tempor augue molestie hendrerit. Proin mauris felis, ultrices ut augue id, mollis fermentum enim. Quisque venenatis magna a enim molestie, ac hendrerit ligula commodo. Morbi elit leo, molestie a tellus eu, venenatis feugiat urna. Curabitur vitae ante sit amet nisi ultrices posuere. Pellentesque egestas sapien sit amet metus placerat, nec consequat elit fermentum. Vivamus lorem felis, consequat in porttitor ut, luctus at odio. Nullam ut molestie erat. Sed scelerisque tortor non malesuada iaculis.'},
  {src: fourImg, alt: 'image', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus volutpat interdum nulla, eget laoreet mi commodo id. Etiam ac augue odio. Vestibulum sed mauris imperdiet, gravida ex vitae, volutpat mauris. Donec venenatis, justo a sodales convallis, metus mauris sagittis massa, in aliquet massa tellus ut eros. Nulla facilisi. Nullam imperdiet, metus id convallis blandit, sem diam elementum metus, quis gravida urna nibh eget mauris. Etiam eget sapien sodales, vestibulum ligula non, elementum ipsum. Fusce molestie commodo lorem, nec tempor augue molestie hendrerit. Proin mauris felis, ultrices ut augue id, mollis fermentum enim. Quisque venenatis magna a enim molestie, ac hendrerit ligula commodo. Morbi elit leo, molestie a tellus eu, venenatis feugiat urna. Curabitur vitae ante sit amet nisi ultrices posuere. Pellentesque egestas sapien sit amet metus placerat, nec consequat elit fermentum. Vivamus lorem felis, consequat in porttitor ut, luctus at odio. Nullam ut molestie erat. Sed scelerisque tortor non malesuada iaculis.'}
]

// Must contain resturant address in address property
const locations = {address: '36 E 20TH ST NEW YORK, NY 10003', phone: '(212) 203-6460'}



const router = Router([{
  path: '/resturant',
  element: <App locations={locations}/>,
  errorElement: <ErrorElement />,
  children: [{
    path: '',
    element: <Home homeImage={homeImage} list={stack} />
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
    element: <LocationAndTime locations={locations} />
  }, {

    path: 'reservation',
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