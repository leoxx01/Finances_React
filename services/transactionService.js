const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

// Aqui havia um erro difícil de pegar. Importei como "transactionModel",
// com "t" minúsculo. No Windows, isso não faz diferença. Mas como no Heroku
// o servidor é Linux, isso faz diferença. Gastei umas boas horas tentando
// descobrir esse erro :-/
const TransactionModel = require('../models/TransactionModel');

//Buscar todos
const findAll = async (req, res) => {
    try {
      const data = await TransactionModel.find();
  
      res.send(data);
    } catch (error) {
      res.status(500).send('Erro ao buscar todos os podcasts' + error);
    }
  };
//Pesquisa por ano e mês
const find = async (req, res) => {
   try {
       const {month ,year} = req.params
     const data = await TransactionModel.find({month:month ,year:year});   
     res.send(data);
   } catch (error) {
     res.status(500).send('Erro ao buscar todos os podcasts' + error);
   }
};

module.exports = {findAll, find}