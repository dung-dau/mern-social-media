import express from 'express';

import { getPosts, createPost } from '../controllers/posts.js';

// responsible for paths that end with /posts

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);

export default router;