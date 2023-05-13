import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/react-learn-diary/" element={home()} />
      <Route path="/react-learn-diary/about" element={about()} />
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