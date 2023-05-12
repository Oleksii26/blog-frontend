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
                  fullName: 'Bruce Willis',
                  avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT68f7Uf8JqLkYmSpDWZm9Th5-OQw3-HoGXAw&usqp=CAU',
                },
                text: 'I love to drink coffe in the morning',
              },
              {
                user: {
                  fullName: 'Eva Green',
                  avatarUrl: 'https://ethnicelebs.com/wp-content/uploads/2012/10/Eva-Green-cropped.jpg',
                },
                text: 'I prefer tea',
              },
            ]}
            isLoading={false}
          />
        </Grid>
      </Grid>
    </>
  );
};


