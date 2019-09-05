module.exports.post = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Submitted',
    }),
  };

  callback(null, response);
};
