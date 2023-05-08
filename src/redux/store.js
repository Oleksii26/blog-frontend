import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/auth";
import { postsRducer } from "./post/posts";


const store = configureStore({
    reducer: {
        posts: postsRducer,
        auth: authReducer,
    }
})

export default store