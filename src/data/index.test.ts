import fnc from '.';
import cases from 'jest-in-case';

describe('fnc.collectTopThree', () => {
  cases(
    'returns correct value',
    ({array, expected}) => {
      const result = fnc.collectTopThree(array);

      expect(result).toEqual(expected);
    },
    [
      {
        array: undefined,
        expected: [],
      },
      {
        array: null,
        expected: [],
      },
      {
        array: [{key: 0, occurence: 4, value: '168.41.191.40'}],
        expected: [{key: 0, occurence: 4, value: '168.41.191.40'}],
      },
      {
        array: [
          {key: 0, occurence: 3, value: '168.41.191.40'},
          {key: 1, occurence: 2, value: '177.71.128.21'},
          {key: 2, occurence: 0, value: '50.112.00.11'},
        ],
        expected: [
          {key: 0, occurence: 3, value: '168.41.191.40'},
          {key: 1, occurence: 2, value: '177.71.128.21'},
          {key: 2, occurence: 0, value: '50.112.00.11'},
        ],
      },
      {
        array: [
          {key: 0, occurence: 4, value: '168.41.191.40'},
          {key: 1, occurence: 3, value: '177.71.128.21'},
          {key: 2, occurence: 3, value: '50.112.00.11'},
          {key: 3, occurence: 3, value: '72.44.32.10'},
          {key: 4, occurence: 2, value: '168.41.191.9'},
          {key: 5, occurence: 2, value: '168.41.191.34'},
          {key: 5, occurence: 1, value: '168.41.191.34'},
        ],
        expected: [
          {key: 0, occurence: 4, value: '168.41.191.40'},
          {key: 1, occurence: 3, value: '177.71.128.21'},
          {key: 2, occurence: 3, value: '50.112.00.11'},
          {key: 3, occurence: 3, value: '72.44.32.10'},
          {key: 4, occurence: 2, value: '168.41.191.9'},
          {key: 5, occurence: 2, value: '168.41.191.34'},
        ],
      },
    ],
  );
});

//[{"key": 0, "occurence": 4, "value": "168.41.191.40"}, {"key": 1, "occurence": 3, "value": "177.71.128.21"}, {"key": 2, "occurence": 3, "value": "50.112.00.11"}, {"key": 3, "occurence": 3, "value": "72.44.32.10"}, {"key": 4, "occurence": 2, "value": "168.41.191.9"}, {"key": 5, "occurence": 2, "value": "168.41.191.34"}, {"key": 6, "occurence": 2, "value": "168.41.191.43"}]
