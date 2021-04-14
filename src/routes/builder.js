const express = require('express');

exports.default = function routerBuilder(routes) {
  const router = express.Router();

  for (const r of routes) {
    router[r.method](
      r.path,
      (req, res, next) => {
        !!r.middleware ? r.middleware(req, res, next) : next();
      },
      (req, res, next) => {
        r.action(req, res)
          .then((response) =>
            res
              .status(response?.statusCode || 200)
              .send(response)
          )
          .catch((err) => next(err));
      }
    );
  }

  return router;
}
