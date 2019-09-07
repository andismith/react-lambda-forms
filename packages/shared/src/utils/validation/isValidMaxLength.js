export default (value, maxLength) =>
  !!(
    typeof maxLength === 'undefined' ||
    !value ||
    (value && value.length <= maxLength)
  );
