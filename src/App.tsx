import { BrowserRouter, Route, Routes } from "react-router-dom";
import Post from "./pages/Post";
import Comments from "./pages/Comments";
import Error from "./pages/Error";
import HomePage from "./pages/HomePage";
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/post" element={<Post />} />
        <Route path="/comments" element={<Comments />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
