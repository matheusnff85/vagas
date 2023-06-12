const { Router } = require('express');

const teste1Controller = require('../controllers/teste1.controller');
const teste2Controller = require('../controllers/teste2.controller');
const teste3Controller = require('../controllers/teste3.controller');
// const teste4Controller = require('../controllers/teste4.controller');
// const teste5Controller = require('../controllers/teste5.controller');

const testesRouter = Router();

testesRouter.get('/user', teste1Controller.getUser);
testesRouter.get('/users', teste1Controller.getUsers);
testesRouter.post('/users', teste2Controller.createUser);
testesRouter.delete('/users',teste3Controller.deleteUser);
// testesRouter.put('/users', teste4Controller);
// testesRouter.get('/users/access', teste5Controller);

module.exports = testesRouter;

