const express = require('express');
const cors = require('cors');
require('dotenv').config(); // !: Not used yet.

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 8080;
    this.usersPath = '/api/users';

    this.middlewares();
    this.routes();
  }

  // methods
  middlewares() {
    // CORS
    this.app.use(cors());

    // Telling the server to use the public folder as the root folder.
    this.app.use(express.static('public'));
  }

  routes() {
    this.app.use(this.usersPath, require('../routes/users'));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }
}

module.exports = Server;
