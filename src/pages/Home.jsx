import React from 'react';
import Grid from '@mui/material/Grid';


import { Post } from '../components/Post';
import { TagsBlock } from '../components/TagsBlock';
import { CommentsBlock } from '../components/CommentsBlock';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, fetchTags } from '../redux/post/operationsPosts';
import { NavBar } from './navbar.tsx';

export const Home = () => {
  const dispatch = useDispatch()
  const userData = useSelector(state => state.auth.data)
  const { posts, tags } = useSelector(state => state.posts)

  const isPostsLoading = posts.status === 'Loading'
  const isTagsLoading = tags.status === 'Loading'

  useEffect(() => {
    dispatch(fetchPosts())
    dispatch(fetchTags())
  }, [dispatch]);

  return (
    <>
      <NavBar />
      <Grid container spacing={4}>
        <Grid xs={8} item>

          {(isPostsLoading ? [...Array(5)] : posts.items).map((e, index) => isPostsLoading ? <Post key={index} isLoading={true} /> : (
            <Post key={e._id}
              id={e._id}
              title={e.title}
              imageUrl={e.imageUrl}
              user={e.user}
              fullName={e.fullName}
              createdAt={e.createdAt}
              viewsCount={e.viewsCount}
              commentsCount={3}
              tags={e.tags}
              isEditable={userData?._id === e.user._id}
            />
          ))}
        </Grid>
        <Grid xs={4} item>
          <TagsBlock items={tags.items} isLoading={isTagsLoading} />
          <CommentsBlock
            items={[
              {
                user: {
                  fullName: 'Вася Пупкин',
                  avatarUrl: 'https://mui.com/static/images/avatar/1.jpg',
                },
                text: 'Это тестовый комментарий',
              },
              {
                user: {
                  fullName: 'Иван Иванов',
                  avatarUrl: 'https://mui.com/static/images/avatar/2.jpg',
                },
                text: 'When displaying three lines or more, the avatar is not aligned at the top. You should set the prop to align the avatar at the top',
              },
            ]}
            isLoading={false}
          />
        </Grid>
      </Grid>
    </>
  );
};


