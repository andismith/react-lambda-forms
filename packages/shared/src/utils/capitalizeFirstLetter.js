const capitalizeFirstLetter = value => {
  if (!value) {
    return '';
  }

  return value.substr(0, 1).toUpperCase() + value.substr(1);
};

export default capitalizeFirstLetter;
