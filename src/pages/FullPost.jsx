import React, { useEffect, useState } from "react";
import axios from '../axios'
import { useParams } from "react-router-dom";

import { Post } from "../components/Post";
import { Index } from "../components/AddComment";
import { CommentsBlock } from "../components/CommentsBlock";

export const FullPost = () => {

  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const { id } = useParams()

  useEffect(() => {
    axios.get(`/posts/${id}`)
      .then(res => {
        setData(res.data)
        setLoading(false)
      }).catch(e => console.log(e))
  }, []);

  if (isLoading) {
    return <Post isLoading={isLoading} isFullPost />
  }
  return (
    <>
      <Post
        key={data._id}
        id={data._id}
        title={data.title}
        imageUrl={data.imageUrl}
        user={data.user}
        fullName={data.fullName}
        createdAt={data.createdAt.slice(0, 16)}
        viewCount={data.viewCount}
        commentsCount={3}
        tags={data.tags}
        isFullPost
      >
        <p>
          {data.text}
        </p>
      </Post>
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
      >
        <Index />
      </CommentsBlock>
    </>
      )
};
