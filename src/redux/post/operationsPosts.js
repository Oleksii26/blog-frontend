import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from '../../axios'

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const { data } = await axios.get('/posts')
    return data
})
export const fetchPopularPosts = createAsyncThunk('popular/fetchPopularPosts', async () => {
    const { data } = await axios.get('/popular')
    return data
})
export const fetchTags = createAsyncThunk('tags/fetchTags', async () => {
    const { data } = await axios.get('/tags')
    return data
})
export const fetchTagsByTag = createAsyncThunk('tags/fetchTagsByTag', async (tag) => {
    const { data } = await axios.get(`/tags/${tag}`)
    return data

})
export const fetchRemovePost = createAsyncThunk('posts/fetchRemovePost', async (id) => {
    await axios.delete(`/posts/${id}`)

})

