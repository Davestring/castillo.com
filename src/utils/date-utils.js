import _ from 'lodash';
import moment from 'moment';

export const betweenDates = (start, end, dates = []) => {
  let aux = start.clone();
  if (!aux.isBefore(end)) return dates;
  aux = moment(aux).add(1, 'days');
  return betweenDates(aux, end, [...dates, aux]);
};

export const flattenDates = (bookedDates) =>
  _.flow(
    (arr) => _.map(arr, ([start, end]) => betweenDates(start, end)),
    (arr) => _.flatten(arr),
  )(bookedDates);
