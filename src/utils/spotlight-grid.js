import _ from 'lodash';

export const defaultGrid = [
  {
    gridColumn: 'span 3 / span 3',
    gridRow: 'span 4 / span 4',
  },
  {
    gridColumn: 'span 2 / span 2',
    gridRow: 'span 2 / span 2',
  },
  {
    gridColumn: 'span 1 / span 1',
    gridRow: 'span 2 / span 2',
  },
  {
    gridColumn: 'span 3 / span 3',
    gridRow: 'span 2 / span 2',
  },
];

export const spotlight = _.flow(
  (arr) => _.slice(arr, 0, defaultGrid.length),
  (arr) => _.map(arr, (item, idx) => ({ ...item, ...defaultGrid[idx] })),
);
