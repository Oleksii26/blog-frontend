import { useEffect } from 'react';
import { NavBar } from './navbar.tsx';
import { Grid } from '@mui/material';
import { TagsBlock } from '../components/TagsBlock';
import { CommentsBlock } from '../components/CommentsBlock';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTags } from '../redux/post/operationsPosts';

export const Home = () => {
  const { tags } = useSelector(state => state.posts)
  const isTagsLoading = tags.status === 'Loading'
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTags())
  }, []);
  return (
    <>
      <Grid container spacing={4}>

        <Grid xs={8} item>
          <NavBar />
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


