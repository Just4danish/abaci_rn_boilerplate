import Tabs from '../tabs/Tabs'
import Login from '../screens/Login';
import CamView from '../screens/CamView';

const publicRoutes = [
  { name: 'Login', component: Login },
];

const authProtectedRoutes = [
  { name: 'Tabs', component: Tabs },
  { name: 'CamView', component: CamView },
];

export { publicRoutes, authProtectedRoutes };
