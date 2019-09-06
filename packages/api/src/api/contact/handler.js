module.exports.post = (event, context, callback) => {
  const data = JSON.parse(event.body || '{}');

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Submitted',
      data,
    }),
  };

  callback(null, response);
};
