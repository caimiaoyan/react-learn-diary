import { Routes, Route } from "react-router-dom";
import DynamicPage from './page/dynamic';
import Home from './page/home';
import About from './page/about';

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



