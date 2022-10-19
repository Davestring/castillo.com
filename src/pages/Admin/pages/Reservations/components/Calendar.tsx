// eslint-disable-next-line simple-import-sort/imports
import FullCalendar, { CalendarOptions } from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import listGridPlugin from '@fullcalendar/list';
import { Icon, useMediaQuery } from '@chakra-ui/react';
import { FaCalendar, FaList } from 'react-icons/fa';

export type ICalendarProps = CalendarOptions;

export const Calendar: React.FC<ICalendarProps> = (props): JSX.Element => {
  const { events, ...rest } = props;

  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');

  return (
    <FullCalendar
      events={events}
      footerToolbar={isLargerThan768 ? false : { right: 'prev,next' }}
      headerToolbar={{
        center: isLargerThan768 ? 'title' : '',
        left: isLargerThan768 ? 'prev,next' : 'title',
        right: 'dayGridMonth,listMonth',
      }}
      {...rest}
    />
  );
};

Calendar.defaultProps = {
  buttonText: {
    list: (
      <Icon as={FaList} color="white" mt="0.425rem" mx={2} />
    ) as unknown as string,
    month: (
      <Icon as={FaCalendar} color="white" mt="0.425rem" mx={2} />
    ) as unknown as string,
  },
  eventColor: '#101D2C',
  eventTimeFormat: {
    hour: '2-digit',
    minute: '2-digit',
  },
  initialView: 'dayGridMonth',
  locale: navigator?.language,
  plugins: [dayGridPlugin, listGridPlugin],
  titleFormat: { month: 'short', year: 'numeric' },
};
