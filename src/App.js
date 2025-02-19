import React from 'react';
import { useState } from 'react';
import './styles/App.css';
import PostList from './components/postList';
import PostForm from './components/postForm';

function App() 
{
  const [posts, setPosts] = useState([
    {id: 1, title: 'First post', body: 'Description 1'},
    {id: 2, title: 'Second post', body: 'Description 2'},
    {id: 3, title: 'Third post', body: 'Description 3'}
  ])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      <PostList posts={posts} title={'Post lists №1'}/>
    </div>
  );
} 

export default App;
