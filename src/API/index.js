import axios from "axios";

export const getMovieList = async(params) => {
  const { data } = await axios.get("/v1/search/movie.json",{
    headers: {
      "X-Naver-Client-Id" : "HC2v5RaXKKNAhu1IZRav",
      "X-Naver-Client-Secret": "72GmZ4lAiu",
    },
    params: params
  });


  return data;
}