import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { TagsCard } from "../../components/Card/TagsCard"
import { useEffect } from "react"
import { fetchTagsByTag } from "../../redux/post/operationsPosts"
import { Grid } from "@mui/material"
import { FadeLoader } from "react-spinners"

export const Tags = () => {
    const { name } = useParams()
    const post = useSelector(state => state.posts.tags.tags)
    const posts = useSelector(state => state.posts.tags)
    const dispatch = useDispatch()
    const isPostsLoading = posts.status === 'Loading'

    useEffect(() => {
        dispatch(fetchTagsByTag(name))
    }, []);
    return (
        <>
            <h2>#{name}</h2>
            {
                isPostsLoading ? <FadeLoader style={{
                    position: 'absolute',
                    left: '50%',
                    top: '50',
                    transform: 'translateY(-50%)'
                }} color="rgba(54, 108, 214, 1)" /> :
                    <Grid container sx={{ gap: 6 }} >

                        {post.map(e => <TagsCard
                            title={e.title}
                            createdAt={e.createdAt}
                            imageUrl={e.imageUrl}
                            tags
                            text={e.text}
                            updatedAt
                            user
                            viewCount
                            id={e._id}
                        />)}
                    </Grid>

            }
        </>)
}
