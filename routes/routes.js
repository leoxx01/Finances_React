const express = require('express');
const transactionRouter = express.Router();
const controller = require('../services/transactionService.js')


transactionRouter.get('/teste',controller.findAll)
transactionRouter.get('/pesquisa/:year/:month',controller.find)

module.exports = transactionRouter;

