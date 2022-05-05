import PostMessage from '../models/postMessage.js';

export const getPosts = async (req, res) => {
    try {
        // retrieves all posts from the database
        // this is asyncronous so it must be prepended
        // with await
        const postMessages = await PostMessage.find();
        // returns the retrieved database as the response
        res.status(200).json(postMessages);
    } catch(error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPost = async (req, res) => {
    const post = req.body;
    const newPost = new PostMessage(post);

    try {
        // saves the new post into the database
        await newPost.save();
        res.status(201).json(newPost);
    } catch(error) {
        res.status(409).json({ message: error.message });
    }
}