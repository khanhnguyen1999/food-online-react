
import { lazy } from 'react';

// containers
const Home = lazy(() => import('features/Home'));
const About = lazy(() => import('features/About'));
const Register = lazy(() => import('features/Register'))
const Login = lazy(() => import('features/Login'))

const routes = [
  { path: '/', exact: true, name: 'Home', component: Home },
  { path: '/home', name: 'Dashboard Page', component: Home },
  { path: '/about', name: 'Slider Image', component: About },
  { path: '/login', name: 'Login Page', component: Login },
  { path: '/register', name: 'Register Page', component: Register }
];

export default routes;