import {BrowserRouter, Routes, Route } from "react-router-dom";
import MainComponent from "./components/pages/MainComponent";
import MovieComponent from "./components/pages/MovieComponent";
import BookComponent from "./components/pages/BookComponent.jsx";
import KnowledgeComponent from "./components/pages/KnowledgeComponent";
import ImageComponent from "./components/pages/ImageComponent";

const Router = () => {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainComponent/>}/>
        <Route path="/movie" element={<MovieComponent/>}/>
        <Route path="/book" element={<BookComponent/>}/>
        <Route path="/image" element={<ImageComponent/>}/>
        <Route path="/knowledge" element={<KnowledgeComponent/>}/>
      </Routes>
     </BrowserRouter> 
    </>
  );
};

export default Router;