const Comment = require('../models/comments');
const Post = require('../models/posts');

// Get all comments
const getAllComments = async (req, res) => {
    try {
        const comments = await Comment.find();
        
        // If no comments are found, return a 404 error
        if (comments.length === 0) {
            return res.status(404).send('No comments found.');
        }

        res.status(200).send(comments);
    } catch (error) {
        res.status(400).send(error.message);
    }
};


// Get all comments for a specific post
const getCommentsByPostId = async (req, res) => {
    const { postId } = req.params;
    try {
        const comments = await Comment.find({ postId });
        res.status(200).send(comments);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

// Create new comment
const createNewComment = async (req, res) => {
    const { postId, sender, content } = req.body;

    try {
        // Check if the post with the given postId exists
        const post = await Post.findOne({ postId });

        if (!post) {
            return res.status(404).send(`Post with postId ${postId} not found.`);
        }

        const latestComment = await Comment.findOne().sort({ commentId: -1 });
        const nextCommentId = latestComment ? latestComment.commentId + 1 : 1;

        // Create the new comment
        const newComment = new Comment({ postId, sender, content, commentId: nextCommentId });
        await newComment.save();

        res.status(201).send(newComment);
    } catch (error) {
        res.status(400).send(error.message);
    }
};


// Update a comment
const updateComment = async (req, res) => {
    const { commentId } = req.params;
    const { content } = req.body;

    try {
        const updatedComment = await Comment.findOneAndUpdate(
            { commentId },
            { content },
            { new: true }
        );

        if (!updatedComment) {
            return res.status(404).send(`Comment with commentId ${commentId} not found.`);
        }

        res.status(200).send(updatedComment);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

// Delete a comment
const deleteComment = async (req, res) => {
    const commentId = req.params.commentId;
    try {
        const result = await Comment.deleteOne({ commentId });
        if (result.deletedCount === 0) {
            return res.status(404).send('Comment not found');
        }
        res.status(202).send({ message: `Comment ${commentId} deleted successfully` });
    } catch (error) {
        res.status(400).send(error.message);
    }
};

// Get comment by ID
const getCommentById = async (req, res) => {
    const commentId = req.params.id;

    try {
        // Find the comment by its commentId
        const comment = await Comment.findOne({ commentId });

        if (!comment) {
            // If comment not found, return a 404 status
            return res.status(404).send(`Comment with commentId ${commentId} not found.`);
        }

        // Send the found comment in the response
        res.status(200).send(comment);
    } catch (error) {
        // Handle any errors that occur
        res.status(400).send(error.message);
    }
};


module.exports = {
    getAllComments,
    createNewComment,
    deleteComment,
    getCommentsByPostId,
    updateComment,
    getCommentById
};