import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { TagsCard } from "../../components/Card/TagsCard"
import { useEffect } from "react"
import { fetchTagsByTag } from "../../redux/post/operationsPosts"

export const Tags = () => {
    const { name } = useParams()
    const post = useSelector(state => state.posts.tags.items)
    const dispatch = useDispatch()
    console.log(post);
    useEffect(() => {
        dispatch(fetchTagsByTag(name))
    }, []);
    return (
        <>
            <h2>#{name}</h2>
            {post.map(e => <TagsCard title={e.title} />)}
        </>
    )
}
