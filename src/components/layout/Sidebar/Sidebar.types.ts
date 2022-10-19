import { IconType } from 'react-icons';

export interface INavigationItem {
  /**
   * Icon that will be rendered on the left side of the navigation item.
   */
  icon: IconType;
  /**
   * Label that will describe the navigation item.
   */
  label: string;
  /**
   * Route to redirect on click events.
   */
  to: string;
}
