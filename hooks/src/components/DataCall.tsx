import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DataCall = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get('https://jsonplaceholder.typicode.com/users')
      setData(res.data);
    };
    fetchData();
  }, [])

  return (
    <div>
      <h1>Calling Data</h1>
      { data.map((a:any) => <li>{a.name}</li>) }
    </div>
  )
}

export default DataCall;