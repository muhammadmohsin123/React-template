import DashboardIcon from '@mui/icons-material/Dashboard';
import BusinessIcon from '@mui/icons-material/Business';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Home, Activity, ShoppingCart } from 'react-feather';

export const SIDEBAR_ITEMS = [
  {
    path: '/dashboard',
    label: 'Dashboard',
    icon: <Home size={20} />,
  },
  {
    path: '/company-profile',
    label: 'Company Profile',
    icon: <AssignmentIcon />,
  },
  {
    path: '/projects',
    label: 'Projects',
    icon: <BusinessIcon />,
  },
];
