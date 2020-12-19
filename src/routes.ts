
import { lazy } from 'react';

// containers
const Home = lazy(() => import('features/Home'));
const About = lazy(() => import('features/About'));

const routes = [
  { path: '/', exact: true, name: 'Home', component: Home },
  { path: '/home', name: 'Dashboard Page', component: Home },
  { path: '/about', name: 'Slider Image', component: About },
];

export default routes;