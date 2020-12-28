
import { lazy } from 'react';

// containers
const Home = lazy(() => import('features/Home'));
const About = lazy(() => import('features/About'));
const Foods = lazy(() => import('features/Foods'))
const FoodDetail = lazy(() => import('features/FoodDetail'))

const routes = [
  { path: '/', exact: true, name: 'Home', component: Home },
  { path: '/home', name: 'Dashboard Page', component: Home },
  { path: '/about', name: 'Slider Image', component: About },
  { path: '/foods', name: 'Food Online Page', component: Foods },
  { path: '/foodsdetail/:id', name: 'Food Detail Online Page', component: FoodDetail },
];

export default routes;