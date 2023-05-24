import { Routes, Route } from "react-router-dom";
import DynamicPage from './page/dynamic';
import {uniqueArr} from './utils';

function App() {
  return (
    <Routes>
      <Route path="/react-learn-diary/" element={home()} />
      <Route path="/react-learn-diary/about" element={about()} />
      <Route path="/react-learn-diary/dynamic" element={<DynamicPage />} />
    </Routes>
  );
}

export default App;

function home(){
  return '我是april_cai的个人站点'
}

function about(){
  return '站点介绍'
}

console.log(uniqueArr([0,2,2,3,[2,3],[1,[2,3,55,[33,2,88]]]]))