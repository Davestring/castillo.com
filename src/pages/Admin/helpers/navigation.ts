import {
  FaCalendarAlt,
  FaChartBar,
  FaCreditCard,
  FaTv,
  FaUsers,
} from 'react-icons/fa';

export const SIDE_NAVIGATION = [
  {
    icon: FaChartBar,
    label: 'sidebar.dashboard',
    to: '/dashboard',
  },
  {
    icon: FaCalendarAlt,
    label: 'sidebar.reservations',
    to: '/reservations',
  },
  {
    icon: FaCreditCard,
    label: 'sidebar.payments',
    to: '/payments',
  },
  {
    icon: FaTv,
    label: 'sidebar.services',
    to: '/services',
  },
  {
    icon: FaUsers,
    label: 'sidebar.users',
    to: '/users',
  },
];
