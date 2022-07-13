const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const commentaireCtrl = require('../controllers/publication');



router.post('/', auth, commentaireCtrl.createCommentaire);
router.get('/', auth, commentaireCtrl.getAllCommentaire);
router.delete('/:id', auth, commentaireCtrl.deleteCommentaire);

module.exports = router;