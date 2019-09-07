export default object =>
  Object.keys(object)
    .filter(key => object[key] !== null && typeof object[key] !== 'undefined')
    .reduce((newObj, key) => Object.assign(newObj, { [key]: object[key] }), {});
