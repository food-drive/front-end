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
  Icon: InputIcon,
  selected: false
},{
  id: 'home',
  path: '/home',
  Icon: HomeIcon,
  selected: true
},{
  id: 'collectionPointList',
  path: '/collection-point-list',
  Icon: StoreMallDirectoryIcon,
  selected: false
},{
  id: 'collectionPoint',
  path: '/collection-point',
  Icon: InputIcon,
  selected: false
},{
  id: 'productLoadsList',
  path: '/product-loads-list',
  Icon: ShoppingBasketIcon,
  selected: false
},{
  id: 'teamLeader',
  path: '/team-leader',
  Icon: PersonIcon,
  selected: false
},{
  id: 'reports',
  path: '/reports',
  Icon: ShowChartIcon,
  selected: false
}]

export default routes