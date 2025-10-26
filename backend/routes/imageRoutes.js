const express = require('express');
const router = express.Router();
const { getAllImages, uploadImage, upload } = require('../controllers/imageController');

// GET /api/images - Fetch all images
router.get('/', getAllImages);

// POST /api/images - Upload a new image
router.post('/', upload.single('image'), uploadImage);

module.exports = router;
