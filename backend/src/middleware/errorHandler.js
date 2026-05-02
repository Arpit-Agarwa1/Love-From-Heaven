/**
 * If any route throws, this sends a clean JSON error back to the client.
 * @type {import('express').ErrorRequestHandler}
 */
export function errorHandler(err, _req, res, _next) {
  const status = err.status && Number.isInteger(err.status) ? err.status : 500;
  const message = status === 500 ? 'Something went wrong on the server.' : err.message;
  res.status(status).json({ error: message });
}
