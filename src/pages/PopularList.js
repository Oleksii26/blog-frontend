import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchPopularPosts } from '../redux/post/operationsPosts';
import { Grid } from '@mui/material';
import { Post } from '../components/Post';

export const PopularList = () => {
    const userData = useSelector(state => state.auth.data)
    const { posts } = useSelector(state => state.posts)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchPopularPosts())
    }, [])

    const isPostsLoading = posts.status === 'Loading'
    return (
        <>
                <Grid xs={16} item> 

                    {(isPostsLoading ? [...Array(5)] : posts.items).map((e, index) => isPostsLoading ? <Post key={index} isLoading={true} /> : (
                        <Post key={e._id}
                            id={e._id}
                            title={e.title}
                            imageUrl={e.imageUrl}
                            user={e.user}
                            fullName={e.fullName}
                            createdAt={e.createdAt}
                            viewCount={e.viewCount}
                            commentsCount={3}
                            tags={e.tags}
                            isEditable={userData?._id === e.user._id}
                        />
                    ))}
                 
             </Grid> 
        </> 
    )
}
