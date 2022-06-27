## Structure of the routes:

```
router.petition('path', [middleware:Validators], [callback:Controller]);
```

Example:
```
const login = require('./controller/auth');
const validatorGet = require('./validators');

router.get('/auth/login', validatorGet, login);
```