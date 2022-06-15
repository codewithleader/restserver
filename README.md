# WebServer + REST Server with Node JS

## Elis Antonio Pérez
Follow me: [Instagram](https://www.instagram.com/elisperezmusic)

### Server code skeleton.

#### Add public folder.
- Middlewares: use.static

#### Postman: HTTP Requests
- GET
- POST
- PUT
- DELETE
- PATCH

#### CORS
- Installed middleware 'CORS' with 'yarn add cors'.
##### Cross-Origin Resource Sharing (CORS)
Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request. [More...](https://developer.mozilla.org/es/docs/Web/HTTP/CORS)

## Mongoose
#### URI
A URI (Uniform Resource Identifier) is a string that refers to a resource.
The most common are URLs, which identify the resource by giving its location on the Web. [More...](https://developer.mozilla.org/es/docs/Glossary/URI)

#### No More Deprecation Warning Options
useNewUrlParser, useUnifiedTopology, useFindAndModify, and useCreateIndex are no longer supported options. Mongoose 6 always behaves as if useNewUrlParser, useUnifiedTopology, and useCreateIndex are true, and useFindAndModify is false. Please remove these options from your code.
```
// No longer necessary:
mongoose.set('useFindAndModify', false);

await mongoose.connect('mongodb://localhost:27017/test', {
  useNewUrlParser: true, // <-- no longer necessary
  useUnifiedTopology: true // <-- no longer necessary
});
```
[More](https://mongoosejs.com/docs/migrating_to_6.html#no-more-deprecation-warning-options)

### Express-validator
- Created validateHelper and /validator/user.js
  [More...](https://youtu.be/VMRgFfmv6j0)
- [Official documentation](https://express-validator.github.io/docs/custom-error-messages.html)
- [All validators](https://github.com/validatorjs/validator.js#validators)