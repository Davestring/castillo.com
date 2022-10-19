import { useEffect } from 'react';

export const useSidebar = (
  ref: React.RefObject<HTMLDivElement>,
  isCollapsed: boolean,
  collapse: (v: boolean) => void,
): void => {
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        !ref?.current?.contains(event.target as Node) &&
        !!ref?.current &&
        isCollapsed
      ) {
        collapse(!isCollapsed);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [ref?.current, isCollapsed]);
};
