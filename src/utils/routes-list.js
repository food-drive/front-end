import InputIcon from '@material-ui/icons/Input';
import HomeIcon from '@material-ui/icons/Home';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import StoreMallDirectoryIcon from '@material-ui/icons/StoreMallDirectory';
import PersonIcon from '@material-ui/icons/Person';
import ShowChartIcon from '@material-ui/icons/ShowChart';

export const routesIds = {
  login: 'login',
  home: 'home',
  collectionPoints: 'collectionPoints',
  collectionPoint: 'collectionPoint',
  productLoadsList: 'productLoadsList',
  teamLeader: 'teamLeader',
  reports: 'reports',
};

export const routesMap = {
  [routesIds.login]: {
    id: routesIds.login,
    path: '/login',
    Icon: InputIcon,
    selected: false,
    showInNavigation: false,
  },
  [routesIds.home]: {
    id: routesIds.home,
    path: '/home',
    Icon: HomeIcon,
    selected: true,
    showInNavigation: true,
  },
  [routesIds.collectionPoints]: {
    id: routesIds.collectionPoints,
    path: '/collection-points',
    Icon: StoreMallDirectoryIcon,
    selected: false,
    showInNavigation: true,
  },
  [routesIds.collectionPoint]: {
    id: routesIds.collectionPoint,
    path: '/collection-point',
    Icon: InputIcon,
    selected: false,
    showInNavigation: false,
  },
  [routesIds.productLoadsList]: {
    id: routesIds.productLoadsList,
    path: '/product-loads-list',
    Icon: ShoppingBasketIcon,
    selected: false,
    showInNavigation: false,
  },
  [routesIds.teamLeader]: {
    id: routesIds.teamLeader,
    path: '/team-leader',
    Icon: PersonIcon,
    selected: false,
    showInNavigation: true,
  },
  [routesIds.reports]: {
    id: routesIds.reports,
    path: '/reports',
    Icon: ShowChartIcon,
    selected: false,
    showInNavigation: true,
  },
};

const routes = [
  routesMap[routesIds.login],
  routesMap[routesIds.home],
  routesMap[routesIds.collectionPoints],
  routesMap[routesIds.collectionPoint],
  routesMap[routesIds.productLoadsList],
  routesMap[routesIds.teamLeader],
  routesMap[routesIds.reports],
];

export default routes;
