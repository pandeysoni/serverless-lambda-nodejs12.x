const commonResponseHeaders = {
  "Access-Control-Allow-Origin": '*',
  "Content-Type": "application/json "
};
/**
* @fileOverview Create an error response
* @param {Object} ex Exception object
* @param {String} ex.message Exception message
* @param {Number} [ex.statusCode] Exception message
* */
const createErrorResponse = (ex) => ({
  statusCode:  500 || ex.statusCode,
  message: "Internal Server Error" || ex.message,
  headers: commonResponseHeaders
});
/**
* @fileOverview Create a successful response
* @param {String} body Stringified body object
* @param {Number} [statusCode] Success code
* */
const createSuccessResponse = (body, statusCode) => {
  const bodyString = typeof body === 'object' ?  JSON.stringify(body) : body;
  return {
      statusCode:  200 || statusCode,
      body: bodyString,
      headers: commonResponseHeaders
  };
};

module.exports = {
  createErrorResponse,
  createSuccessResponse
};
