import { Routes, Route } from "react-router-dom";
import DynamicPage from './page/dynamic';
import {uniqueArr} from './utils';
import React, { useState, useEffect } from 'react';

function App() {
  return (
    <Routes>
      <Route path="/react-learn-diary/" element={Home()} />
      <Route path="/react-learn-diary/about" element={About()} />
      <Route path="/react-learn-diary/dynamic" element={<DynamicPage />} />
    </Routes>
  );
}

export default App;

function Home(){
  return '我是april_cai的个人站点'
}

function About(){
  const [count, setCount] = useState([]);

  useEffect(() => {
    let arr = [];
    for(let i = 0; i < 1000; i++){
      arr.push(i)
    }

    setCount(arr)

  });

  return (
    <ul>
      {
        count.map((item, index) => <li key={index}>{item}</li>)
      }
    </ul>
  )
}