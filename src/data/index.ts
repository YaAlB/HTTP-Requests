import {log} from './logData';
import Validator from '../validation/index';

export default {
  collectTopThree: (array: any) => {
    var topThree: any = [];
    if (array) {
      var topThreeNum: number = array.length < 3 ? array.length : 3;
      var count: number = 0;
      var i = 0;
      var isSkip = false;
      while (i < array.length && count < topThreeNum) {
        if (array[i] && !isSkip) {
          topThree.push(array[i]);
        }
        if (
          array[i] &&
          array[i + 1] &&
          array[i].occurence === array[i + 1].occurence
        ) {
          topThree.push(array[i + 1]);
          isSkip = true;
        } else {
          isSkip = false;
          count++;
        }
        i++;
      }
    }
    return topThree;
  },
  uniqueIPAdresses: (IPAdresses: string[]) => {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const uniqueIPAdresses: string[] = [];
    IPAdresses.map(item => {
      if (uniqueIPAdresses.indexOf(item) === -1) {
        uniqueIPAdresses.push(item);
      }
    });
    return uniqueIPAdresses ? uniqueIPAdresses.length : 0;
  },
  sortValues: (data: string[] | string, n: number) => {
    var mp = new Map();
    var arrayMap = [];
    for (var i = 0; i < n; i++) {
      if (mp.has(data[i])) {
        mp.set(data[i], mp.get(data[i]) + 1);
      } else {
        mp.set(data[i], 1);
      }
    }
    arrayMap.push(...mp);
    var arrayMapSort = arrayMap.sort((a, b) => b[1] - a[1]);
    let objArrays = [];
    for (var i = 0; i < n; i++) {
      objArrays.push({
        key: i,
        value: arrayMapSort[i] ? arrayMapSort[i][0] : null,
        occurence: arrayMapSort[i] ? arrayMapSort[i][1] : null,
      });
    }
    return objArrays;
  },
  getData: (value: string) => {
    var URLs: string[] = [];
    var IPAddresses: string[] = [];
    log
      .toString()
      .split(' ')
      .map(item => {
        if (Validator.URLValid(item)) {
          URLs.push(item);
        } else if (Validator.ipAddressValid(item)) {
          IPAddresses.push(item);
        }
      });
    return value === 'URLs' ? URLs : IPAddresses;
  },
};
