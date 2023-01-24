import Login from '../src/screens/Login';
import QRCodeScanner from '../src/components/QRCodeScanner';
import DriverHome from '../src/screens/DriverHome';
import OperatorHome from '../src/screens/OperatorHome';
import InspectorHome from '../src/screens/InspectorHome';
import JobDetailsScreen from '../src/screens/JobDetailsScreen';
import VehicleDetailsScreen from '../src/screens/VehicleDetailsScreen';
import TimeLine from '../src/screens/TimeLine';
import OperatorJobs from '../src/screens/OperatorJobs';
import CouponsPage from '../src/screens/CouponsPage';
import Area from '../src/components/Zones/Area'
import SubArea from '../src/components/Zones/SubArea'
import InspectorEntityDetailsScreen from '../src/screens/InspectorEntityDetailsScreen';
import SearchResults from '../src/screens/SearchResults';
import EntityInfoPage from '../src/screens/EntityInfoPage';
import GreaseTrapDetailsPage from '../src/screens/GreaseTrapDetailsPage';
import FixtureDetailsPage from '../src/screens/FixtureDetailsPage';
import DumpingReviewPage from '../src/screens/DumpingReviewPage';

const publicRoutes = [
  { name: 'Login', component: Login },
];

const authProtectedRoutesForDriver = [
  { name: 'DriverHome', component: DriverHome },
  { name: 'JobDetailsScreen', component: JobDetailsScreen },
  { name: 'TimeLine', component: TimeLine },
];

const authProtectedRoutesForOperator = [
  { name: 'OperatorHome', component: OperatorHome },
  { name: 'QRCodeScanner', component: QRCodeScanner },
  { name: 'VehicleDetailsScreen', component: VehicleDetailsScreen },
  { name: 'OperatorJobs', component: OperatorJobs },
  { name: 'CouponsPage', component: CouponsPage },
  { name: 'JobDetailsScreen', component: JobDetailsScreen },
  { name: 'TimeLine', component: TimeLine },
  { name: 'DumpingReviewPage', component: DumpingReviewPage },
];

const authProtectedRoutesForInspector = [
  { name: 'InspectorHome', component: InspectorHome },
  { name: 'Area', component: Area },
  { name: 'SubArea', component: SubArea },
  { name: 'InspectorEntityDetailsScreen', component: InspectorEntityDetailsScreen },
  { name: 'SearchResults', component: SearchResults },
  { name: 'EntityInfoPage', component: EntityInfoPage },
  { name: 'GreaseTrapDetailsPage', component: GreaseTrapDetailsPage },
  { name: 'FixtureDetailsPage', component: FixtureDetailsPage },
];

export { publicRoutes, authProtectedRoutesForDriver, authProtectedRoutesForOperator, authProtectedRoutesForInspector };
