import React from "react";
import { useState } from "react";
import MyInput from "./UI/inputs/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({create}) => {
    let [post, setPost] = useState({title: '', body: ''})

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title: '', body: ''})
    }

    return (
        <div>
            <form>
                <MyInput 
                type='text' 
                placeholder='Post title'
                value={post.title}
                onChange={e => setPost({...post, title: e.target.value})}
                />

                <MyInput 
                type='text' 
                placeholder='Post description'
                value={post.body}
                onChange={e => setPost({...post, body: e.target.value})}
                />

                <MyButton onClick={addNewPost}>Create post</MyButton>
            </form>
        </div>
    )
}

export default PostForm