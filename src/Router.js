import {BrowserRouter, Routes, Route } from "react-router-dom";
import MainComponent from "./components/pages/MainComponent"
import MovieComponent from "./components/pages/MovieComponent"
import BookComponent from "./components/pages/BookComponent"
import SearchResultComponent from "./components/pages/SearchResultComponent";

const Router = () => {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainComponent/>}/>
        <Route path="/SearchResult/:someInfo" element={<SearchResultComponent/>}/>
        <Route path="/movie" element={<MovieComponent/>}/>
        <Route path="/book" element={<BookComponent/>}/>
      </Routes>
     </BrowserRouter> 
    </>
  );
};

export default Router;