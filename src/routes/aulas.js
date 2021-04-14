const routerBuilder = require('./builder').default;
const Aulas = require('../controllers/aula').default;

exports.default = routerBuilder([
  {
    method: 'get',
    path: '/:id?',
    action: (request) => new Aulas().find(request),
    middleware: (
      _req,
      _response,
      next
    ) => {
      next();
    },
  },
  {
    method: 'post',
    path: '/',
    action: (request) => new Aulas().create(request),
    middleware: (
      _req,
      _response,
      next
    ) => {
      next();
    },
  },
  {
    method: 'put',
    path: '/:id',
    action: (request) => new Aulas().update(request),
    middleware: (
      _request,
      _response,
      next
    ) => {
      next();
    },
  },
  {
    method: 'delete',
    path: '/:id',
    action: (request) => new Aulas().remove(request),
    middleware: (
      _request,
      _response,
      next
    ) => {
      next();
    },
  },
]);
