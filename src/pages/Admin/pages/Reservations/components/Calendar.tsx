// eslint-disable-next-line simple-import-sort/imports
import { Icon, useMediaQuery } from '@chakra-ui/react';

import FullCalendar, { CalendarOptions } from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import listGridPlugin from '@fullcalendar/list';
import { useCrudContext } from 'contexts';
import { useMemo } from 'react';
import { FaCalendar, FaList } from 'react-icons/fa';
import { IBookingResource } from 'services/resources';
import { getFullname } from 'utils';

export type ICalendarProps = CalendarOptions;

export const Calendar: React.FC<ICalendarProps> = (
  props,
): JSX.Element | null => {
  const { data, preparePatch } = useCrudContext<IBookingResource>();

  const events = useMemo(
    () =>
      data?.results?.map((item) => ({
        end: `${item?.check_out} 15:00:00`,
        meta: item,
        start: `${item?.check_in} 12:00:00`,
        title: `${getFullname(item)} - ${item?.phone}`,
      })),
    [data],
  );

  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');

  return (
    <FullCalendar
      eventClick={(info) => preparePatch(info?.event?.extendedProps?.meta)}
      events={events}
      footerToolbar={isLargerThan768 ? false : { right: 'prev,next' }}
      headerToolbar={{
        center: isLargerThan768 ? 'title' : '',
        left: isLargerThan768 ? 'prev,next' : 'title',
        right: 'dayGridMonth,listMonth',
      }}
      {...props}
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
