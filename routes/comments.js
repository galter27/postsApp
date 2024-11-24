const express = require('express');
const router = express.Router();

// Require the controller
const commentController = require('../controllers/comments');

// Define the routes
router.get('/', commentController.getAllComments);

router.get('/:id', commentController.getCommentById);

router.get('/post/:postId', commentController.getCommentsByPostId);

router.post('/', commentController.createNewComment);

router.delete('/:commentId', commentController.deleteComment);

router.put('/:commentId', commentController.updateComment);

module.exports = router;