import mongoose from "mongoose";

// creates the schema for a post
const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

// creates a model for the post schema named PostMessage
const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;