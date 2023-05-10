import { fetchPopularPosts, fetchPosts, fetchRemovePost, fetchTags } from "./operationsPosts"

const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
    posts: {
        items: [],
        status: 'Loading',
    },
    tags: {
        items: [],
        status: 'Loading'
    },
}

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
    },
    extraReducers: {
        [fetchPosts.pending]: (state) => {
            state.posts.items = []
            state.posts.status = 'Loading'
        },
        [fetchPosts.fulfilled]: (state, action) => {
            state.posts.items = action.payload
            state.posts.status = 'Loaded'
        },
        [fetchPosts.rejected]: (state) => {
            state.posts.items = []
            state.posts.status = 'error'
        },
        [fetchPopularPosts.pending]: (state) => {
            state.posts.items = []
            state.posts.status = 'Loading'
        },
        [fetchPopularPosts.fulfilled]: (state, action) => {
            state.posts.items = action.payload
            state.posts.status = 'Loaded'
        },
        [fetchPopularPosts.rejected]: (state) => {
            state.posts.items = []
            state.posts.status = 'error'
        },
        [fetchTags.pending]: (state) => {
            state.tags.items = []
            state.tags.status = 'Loading'
        },
        [fetchTags.fulfilled]: (state, action) => {
            state.tags.items = action.payload
            state.tags.status = 'Loaded'
        },
        [fetchTags.rejected]: (state) => {
            state.tags.items = []
            state.tags.status = 'error'
        },
        [fetchRemovePost.pending]: (state, action) => {
            state.posts.items = state.posts.items.filter(e => e._id !== action.meta.arg)
        },
    }
})

export const postsRducer = postSlice.reducer

