import React, { useState, useEffect } from 'react';

export default function About(){
  const [count, setCount] = useState([]);

  useEffect(() => {
    let arr = [];
    for(let i = 0; i < 1000; i++){
      arr.push(i)
    }

    setCount(arr)

  },[]);

  const deleteItem = function(index){
    const _arr = [...count];
    _arr.splice(index, 1)
    setCount(_arr)
  }

  return (
    <ul>
      {
        count.map((item, index) => <li key={index}>{item}<button onClick={() => deleteItem(index)} style={{marginLeft: '10px'}}>删除</button></li>)
      }
    </ul>
  )
}