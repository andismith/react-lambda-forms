export default value =>
  !!value &&
  value.length > 0 &&
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value);
