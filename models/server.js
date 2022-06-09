const express = require('express');
require('dotenv').config(); // !: Not used yet.

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 8080;
    this.routes();
  }

  // methods
  routes() {
    this.app.get('/', (req, res) => {
      res.send('Hello world');
    });
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }
}

module.exports = Server;
