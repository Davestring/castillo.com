import styled from '@emotion/styled';

const CalendarWrapper = styled('div')`
  .DateRangePicker,
  .DateRangePicker_1 {
    width: 100% !important;
  }

  .DateRangePickerInput,
  .DateRangePickerInput_1,
  .DateRangePickerInput__withBorder,
  .DateRangePickerInput__withBorder_2 {
    align-items: center;
    display: flex;
  }

  .DateInput,
  .DateInput_1 {
    flex: 1;
  }

  .DateRangePickerInput_arrow_svg,
  .DateRangePickerInput_arrow_svg_1 {
    height: 12px;
    width: 12px;
  }

  .DateInput_input__focused {
    border-bottom: 2px solid ${({ theme }) => theme.colors.gold};
  }

  .CalendarDay__selected,
  .CalendarDay__selected:active,
  .CalendarDay__selected:hover {
    background: ${({ theme }) => theme.colors.gold};
    border: 1px double ${({ theme }) => theme.colors.gold};
  }

  .CalendarDay__hovered_span {
    background: ${({ theme }) => theme.colors.secondary};
    border: 1px double ${({ theme }) => theme.colors.secondary};
    color: white;
  }

  .CalendarDay__hovered_span:hover {
    background: ${({ theme }) => theme.colors.secondary};
    border: 1px double ${({ theme }) => theme.colors.secondary};
    color: white;
  }

  .CalendarDay__selected_span {
    background: ${({ theme }) => theme.colors.secondary};
    border: 1px double ${({ theme }) => theme.colors.secondary};
    color: white;
  }
`;

export default CalendarWrapper;
