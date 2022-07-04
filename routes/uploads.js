const { Router } = require('express');

const { uploadFile, updatePictureCloudinary, getPicture } = require('../controllers/uploads');
const { validateUploadFile } = require('../middlewares');
const { validateUpdatePicture, validateGetPicture } = require('../validators');

const router = Router();

router.post('/', validateUploadFile, uploadFile);

router.put('/:collection/:id', validateUpdatePicture, updatePictureCloudinary);
// , updatePicture);

router.get('/:collection/:id', validateGetPicture, getPicture);

module.exports = router;
