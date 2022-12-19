import Valid from '.';
import cases from 'jest-in-case';

describe('validation.URLValid', () => {
  cases(
    'is valid',
    ({URLs}) => {
      const result = Valid.URLValid(URLs);

      expect(result).toBeTruthy();
    },
    [{URLs: 'http://example.net/faq/'}, {URLs: 'http://udemy.com/login/'}],
  );

  cases(
    'is NOT valid',
    ({URLs}) => {
      const result = Valid.URLValid(URLs);

      expect(result).toBeFalsy();
    },
    [
      {URLs: '/asset.css'},
      {URLs: '/hosting/'},
      {URLs: '@test.com'},
      {URLs: '/'},
      {URLs: undefined},
      {URLs: null},
    ],
  );
});

describe('validation.ipAddressValid', () => {
  cases(
    'is valid',
    ({IPAddress}) => {
      const result = Valid.ipAddressValid(IPAddress);

      expect(result).toBeTruthy();
    },
    [
      {IPAddress: '69.162.81.155'},
      {IPAddress: '192.199.248.75'},
      {IPAddress: '23.81.0.59'},
      {IPAddress: '207.228.238.7'},
    ],
  );

  cases(
    'is NOT valid',
    ({IPAddress}) => {
      const result = Valid.ipAddressValid(IPAddress);

      expect(result).toBeFalsy();
    },
    [
      {IPAddress: '@test.com'},
      {IPAddress: '2.1.0sgt'},
      {IPAddress: '228.tyi '},
      {IPAddress: '!23.56.000.77 '},
      {IPAddress: undefined},
      {IPAddress: null},
    ],
  );
});
