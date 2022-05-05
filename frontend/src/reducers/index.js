import { combineReducers } from "redux";

import posts from "./posts";

export default combineReducers({
    // if the key and the value are the same,
    // posts: posts can be reduced to posts
    posts,
})