import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

import _ from 'lodash';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { DateRangePicker } from 'react-dates';

import CalendarWrapper from './components/CalendarWrapper';

function Calendar(props) {
  const [end, setEnd] = useState();
  const [start, setStart] = useState();
  const [focusedInput, setFocusedInput] = useState();

  const { bookedDates, endLabel, minimum, startLabel } = props;

  const handleOnDateChange = ({ startDate, endDate }) => {
    setEnd(endDate);
    setStart(startDate);
  };

  const getDisableDates = (day) =>
    _.filter(bookedDates, (d) => d.isSame(day, 'day')).length > 0;

  return (
    <CalendarWrapper>
      <DateRangePicker
        endDate={end}
        endDateId="end-date"
        endDatePlaceholderText={endLabel}
        focusedInput={focusedInput}
        hideKeyboardShortcutsPanel
        isDayBlocked={getDisableDates}
        minimumNights={minimum}
        startDate={start}
        startDateId="start-date"
        startDatePlaceholderText={startLabel}
        onDatesChange={handleOnDateChange}
        onFocusChange={(focusedInput) => setFocusedInput(focusedInput)}
      />
    </CalendarWrapper>
  );
}

Calendar.propTypes = {
  bookedDates: PropTypes.arrayOf(PropTypes.string),
  endLabel: PropTypes.string,
  minimum: PropTypes.number,
  startLabel: PropTypes.string,
};

Calendar.defaultProps = {
  bookedDates: [],
  minimum: 1,
};

export default Calendar;
