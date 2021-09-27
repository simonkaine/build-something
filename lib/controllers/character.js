const { Router } = require('express');
const Service = require('../services/OrderService');

module.exports = Router ()

  // POST method
  .post('/', async (req, res, next) => {
    try {
      const data = await Service.createOrder(req.body);
      console.log('POST CREATED data working>>', data);
      res.send(data);
    } catch (err) {
      next(err);
    }
  })

  // GET method
  .get('/', async (req, res, next) => {
    try {
      const data = await Service.getCharacterData();
      console.log('GET ALL controller working', data);
      res.send(data);
    } catch (err) {
      next(err);
    }
  })

  // GET id method
  .get('/:id', async (req, res, next) => {})

  // PATCH method
  .patch('/:id', async (req, res, next) => {})
  
  // DELETE method
  .delete('/:id', async (req, res, next) => {});

