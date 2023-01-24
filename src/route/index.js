import Tabs from '../tabs/Tabs'
import Login from '../screens/Login';

const publicRoutes = [
  { name: 'Login', component: Login },
];

const authProtectedRoutes = [
  { name: 'Tabs', component: Tabs },
];

export { publicRoutes, authProtectedRoutes };
