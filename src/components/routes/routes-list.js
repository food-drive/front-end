import Home from '../../pages/home'
import Login from '../../pages/login'
import CollectionPointList from '../../pages/collection-point-list'
import CollectionPoint from '../../pages/collection-point'
import ProductLoadsList from '../../pages/product-loads-list'
import TeamLeader from '../../pages/team-leader'
import Reports from '../../pages/reports'

import InputIcon from '@material-ui/icons/Input'
import HomeIcon from '@material-ui/icons/Home'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import StoreMallDirectoryIcon from '@material-ui/icons/StoreMallDirectory'
import PersonIcon from '@material-ui/icons/Person'
import ShowChartIcon from '@material-ui/icons/ShowChart'

export const routesIds = {
  login: 'login',
  home: 'home',
  collectionPointList: 'collectionPointList',
  collectionPoint: 'collectionPoint',
  productLoadsList: 'productLoadsList',
  teamLeader: 'teamLeader',
  reports: 'reports'
}

const routes = [{
  id: 'login',
  path: '/login',
  component: Login,
  Icon: InputIcon,
  selected: false
},{
  id: 'home',
  path: '/home',
  component: Home,
  Icon: HomeIcon,
  selected: true
},{
  id: 'collectionPointList',
  path: '/collection-point-list',
  component: CollectionPointList,
  Icon: StoreMallDirectoryIcon,
  selected: false
},{
  id: 'collectionPoint',
  path: '/collection-point',
  component: CollectionPoint,
  Icon: InputIcon,
  selected: false
},{
  id: 'productLoadsList',
  path: '/product-loads-list',
  component: ProductLoadsList,
  Icon: ShoppingBasketIcon,
  selected: false
},{
  id: 'teamLeader',
  path: '/team-leader',
  component: TeamLeader,
  Icon: PersonIcon,
  selected: false
},{
  id: 'reports',
  path: '/reports',
  component: Reports,
  Icon: ShowChartIcon,
  selected: false
}]

export default routes