import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchPopularPosts } from '../redux/post/operationsPosts';
import { Grid } from '@mui/material';
import { Post } from '../components/Post';
import { FadeLoader } from 'react-spinners';

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
            {isPostsLoading ? <FadeLoader style={{
                position: 'absolute',
                left: '50%',
                top: '50',
                transform: 'translateY(-50%)'
            }} color="rgba(54, 108, 214, 1)" /> :
                <Grid xs={16} item>

                    {(isPostsLoading ? [...Array(5)] : posts.items).map((e, index) => isPostsLoading ? <Post key={index} isLoading={true} /> : (
                        <Post key={e._id}
                            id={e._id}
                            title={e.title}
                            imageUrl={e.imageUrl}
                            user={e.user}
                            fullName={e.fullName}
                            createdAt={e.createdAt.slice(0, 16)}
                            viewCount={e.viewCount}
                            commentsCount={3}
                            tags={e.tags}
                            isEditable={userData?._id === e.user._id}
                        />
                    ))}
                </Grid>
            }
        </>
    )
}
