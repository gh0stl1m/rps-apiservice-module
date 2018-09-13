module.exports = (fields) => {
  const fieldSelector = {};
  // Split string separated by comma
  if (fields) {
    const fieldsArr = fields.split(',');
    if (fieldsArr.length === 0 || fieldsArr[0] === '') return fieldSelector;
    // Build selector
    fieldsArr.forEach((value) => {
      if (value === 'id') {
        fieldSelector._id = 1;
        return true;
      }
      fieldSelector[value] = 1;
      return fieldSelector;
    });
  }

  return fieldSelector;
};
