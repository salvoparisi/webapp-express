const express = require('express')
const router = express.Router()
const controllers = require('../controllers/posts.js')

router.get('/', controllers.index)
router.get('/:id', controllers.show)
router.delete('/:id', controllers.destroy)


module.exports = router