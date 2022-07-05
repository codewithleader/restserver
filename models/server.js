const express = require('express');
const cors = require('cors');
require('dotenv').config();

const { dbConnection } = require('../database/config');
const fileUpload = require('express-fileupload');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    // this.usersPath = '/api/users';
    // this.authPath = '/api/auth';
    this.paths = {
      auth: '/api/auth',
      categories: '/api/categories',
      products: '/api/products',
      search: '/api/search',
      uploads: '/api/uploads',
      users: '/api/users',
    };

    this.connectDB();

    this.middlewares();

    this.routes();
  }

  async connectDB() {
    await dbConnection();
  }

  // methods
  middlewares() {
    // CORS
    this.app.use(cors());

    // Body Parser
    this.app.use(express.json());

    // Public directory
    this.app.use(express.static('public'));

    // FileUpload
    this.app.use(
      fileUpload({
        useTempFiles: true,
        tempFileDir: '/tmp/',
        createParentPath: true, // Create the upload directory if it doesn't exist
      })
    );
  }

  routes() {
    this.app.use(this.paths.auth, require('../routes/auth'));
    this.app.use(this.paths.categories, require('../routes/categories'));
    this.app.use(this.paths.products, require('../routes/products'));
    this.app.use(this.paths.search, require('../routes/search'));
    this.app.use(this.paths.uploads, require('../routes/uploads'));
    this.app.use(this.paths.users, require('../routes/users'));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }
}

module.exports = Server;
