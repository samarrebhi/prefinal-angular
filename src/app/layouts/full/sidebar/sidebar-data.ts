import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'Home',
  },
  {
    displayName: 'Foyer',
    iconName: 'layout-dashboard',
    route: '/Foyer',
  },
  {
    displayName: 'Bloc',
    iconName: 'rosette',
    route: '/bloc',
  },
  {
    displayName: 'Chambre',
    iconName: 'poker-chip',
    route: '/Chambre',
  },
  {
    displayName: 'Etudiant',
    iconName: 'poker-chip',
    route: '/etudiant',
  },
  {
    displayName: '',
    iconName: 'list',
    route: '/ui-components/lists',
  },
  {
    displayName: 'Menu',
    iconName: 'layout-navbar-expand',
    route: '/ui-components/menu',
  },
  {
    displayName: 'Tooltips',
    iconName: 'tooltip',
    route: '/ui-components/tooltips',
  },
  {
    navCap: 'Auth',
  },
  {
    displayName: 'Login',
    iconName: 'lock',
    route: '/authentication/login',
  },
  {
    displayName: 'Register',
    iconName: 'user-plus',
    route: '/authentication/register',
  },
  {
    navCap: 'Extra',
  },
  {
    displayName: 'Icons',
    iconName: 'mood-smile',
    route: '/extra/icons',
  },
  {
    displayName: 'Sample Page',
    iconName: 'aperture',
    route: '/extra/sample-page',
  },
];
