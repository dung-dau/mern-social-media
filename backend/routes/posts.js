import express from 'express';

import { getPosts, createPost, updatePost } from '../controllers/posts.js';

// responsible for paths that end with /posts

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
// patch is for updating existing documents
router.patch('/:id', updatePost);

export default router;