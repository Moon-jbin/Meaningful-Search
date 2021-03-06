import {BrowserRouter, Routes, Route } from "react-router-dom";
import MainComponent from "./components/pages/MainComponent";
import MovieComponent from "./components/pages/MovieComponent";
import BookComponent from "./components/pages/BookComponent.jsx";
import KnowledgeComponent from "./components/pages/KnowledgeComponent";
import ImageComponent from "./components/pages/ImageComponent";
import BlogComponent from "./components/pages/BlogComponent";
import TopNav from "./components/organisms/TopNav";

const Router = () => {
  return (
    <>
     <BrowserRouter>
      <TopNav/>
      <Routes>
        <Route path="/" element={<MainComponent/>}/>
        <Route path="/movie" element={<MovieComponent/>}/>
        <Route path="/book" element={<BookComponent/>}/>
        <Route path="/image" element={<ImageComponent/>}/>
        <Route path="/knowledge" element={<KnowledgeComponent/>}/>
        <Route path="/blog" element={<BlogComponent/>}/>
      </Routes>
     </BrowserRouter> 
    </>
  );
};

export default Router;