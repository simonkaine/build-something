const CharacterModel = require('../models/class-sql');
// const fetchCharApiData = require('../utils/fetch');
// retrieves fetched RICK AND MORTY data 
// my action >>
// I will export these class services to a model class to store the data 

module.exports = class Service {

  // POST
  static async createOrder({ name, status, species }) { ///<<< req.body
    const order = await CharacterModel.createTable({ name, status, species });
    return order;
  }

  // GET character
  static async getCharacterData() {
    const alldata = await CharacterModel.getCharacters();
    return alldata;
  }
};
