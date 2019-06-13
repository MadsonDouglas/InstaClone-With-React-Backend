const router = require('express').Router()
const multer = require('multer')

const uploadConfig = require('../config/upload')

const postController = require('../controllers/PostController')
const likeController = require('../controllers/LikeController')

const upload = multer(uploadConfig)

router.get('/posts', postController.index)
router.post('/posts', upload.single('image'), postController.store)
router.post('/posts/:id/like', likeController.store)


module.exports = router