import React, { useEffect, useState } from "react";
import axios from '../axios'
import { useParams } from "react-router-dom";

import { Post } from "../components/Post";
import { Index } from "../components/AddComment";
import { CommentsBlock } from "../components/CommentsBlock";
import { FadeLoader } from "react-spinners";

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
        createdAt={data.createdAt}
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
              fullName: "Вася Пупкин",
              avatarUrl: "https://mui.com/static/images/avatar/1.jpg",
            },
            text: "Это тестовый комментарий 555555",
          },
          {
            user: {
              fullName: "Иван Иванов",
              avatarUrl: "https://mui.com/static/images/avatar/2.jpg",
            },
            text: "When displaying three lines or more, the avatar is not aligned at the top. You should set the prop to align the avatar at the top",
          },
        ]}
        isLoading={false}
      >
        <Index />
      </CommentsBlock>
    </>
      )
};
