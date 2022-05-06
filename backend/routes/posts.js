import express from 'express';

import { getPosts, createPost, updatePost, deletePost, likePost } from '../controllers/posts.js';

// responsible for paths that end with /posts

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
// patch is for updating existing documents
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);

export default router;