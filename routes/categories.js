const { Router } = require('express');

const router = Router();

// Get all categories - Public
router.get('/', (req, res) => {
  res.send('Get all categories');
});

// Get a category - Public
router.get('/:id', (req, res) => {
  res.send('Get a category');
});

// Create a category - Private. Anyone with a valid token can create a category
router.post('/', (req, res) => {
  res.send('Post a category');
});

// Update a category - Private. Anyone with a valid token can update a category
router.put('/:id', (req, res) => {
  res.send('Put: Update a category');
});

// Delete a category - Admin. Only the admin can disable a category.
router.delete('/:id', (req, res) => {
  res.send('Disable a category');
});

// router.get('/', validateGetCategories, getCategories);


module.exports = router;