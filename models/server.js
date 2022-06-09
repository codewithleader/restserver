const express = require('express');
require('dotenv').config(); // !: Not used yet.

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 8080;

    this.middlewares();
    this.routes();
  }

  // methods
  routes() {
    this.app.get('/api', (req, res) => {
      res.json({
        msg: 'get API'
      });
    });
    this.app.put('/api', (req, res) => {
      res.json({
        msg: 'put API'
      });
    });
    this.app.post('/api', (req, res) => {
      res.json({
        msg: 'post API'
      });
    });
    this.app.delete('/api', (req, res) => {
      res.json({
        msg: 'delete API'
      });
    });
    this.app.patch('/api', (req, res) => {
      res.json({
        msg: 'patch API'
      });
    });
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }

  middlewares() {
    /* Telling the server to use the public folder as the root folder. */
    this.app.use(express.static('public'));
  }
}

module.exports = Server;
