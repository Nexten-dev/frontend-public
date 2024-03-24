import { ActionsRow } from "./ActionsRow"
import { CommentsField } from "./CommentsField"
import { CountLikes } from "./CountLikes"
import { Description } from "./Description"
import { PostTop } from "./PostTop"
import { Slider } from "./Slider"
import {Props} from "../Posts"


export const Post = ({ item }: Props) => {
    return (
        <>
            <PostTop item={item} />
            <Slider item={item} />
            <ActionsRow item={item} />
            <CountLikes item={item} />
            <Description item={item} />
            <CommentsField item={item} />
        </>
    )
}