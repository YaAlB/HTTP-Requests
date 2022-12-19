export default {
  ipAddressValid: (ipAddress: string | undefined | null): boolean =>
    !!ipAddress &&
    new RegExp(
      '^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$',
    ).test(ipAddress),
  isEmpty: (value: string | null | undefined) =>
    value && value.trim().length > 0 ? false : true,
  URLValid: (value: string | null | undefined): boolean =>
    !!value &&
    new RegExp('(http(s)?://)([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?').test(
      value.trim(),
    ),
};
// unit test
