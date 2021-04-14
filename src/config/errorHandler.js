const errorHandler = (
  err,
  _req,
  res,
  _next
) => {
  const response = Object.assign({ success: false }, err);
  if (!!response.code) {
    const httpCode = response.code;
    delete response.code;
    return (
      res
        .status(httpCode)
        .send(response)
    );
  }

  return (
    res
      .status(500)
      .send(response)
  );
};

module.exports = { errorHandler };
