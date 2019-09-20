import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DataCallBtn = () => {
  const [post, setPost] = useState({title: ''});
  const [id, setId] = useState(1);
  const [idBtn, setIdBtn] = useState(1);

  const onIdChange = (e:any) => {
    const { value } = e.target;
    setId(value);
  }

  const getPost = () => {
    setIdBtn(id);
    console.log(post);
  }

  useEffect(() => {
    async function getPost() {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/todos/${idBtn}`);
      console.log(res.data);
      setPost(res.data);
    }
    getPost();
  }, [idBtn])

  return (
    <div>
      <input type="text" onChange={onIdChange} value={id} />
      <button onClick={getPost}>Submit</button>
      <h1>{Object.values(post).length > 0 ? post.title : ''}</h1>
    </div>
  )
}

export default DataCallBtn;