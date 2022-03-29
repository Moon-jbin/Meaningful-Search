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
};


export const getBookList = async(params) => {
  const { data } = await axios.get("/v1/search/book.json",{
    headers: {
      "X-Naver-Client-Id" : "HC2v5RaXKKNAhu1IZRav",
      "X-Naver-Client-Secret": "72GmZ4lAiu",
    },
    params: params
  });


  return data;
};


export const getKnowledgeList = async(params) => {
  const {data} = await axios.get("/v1/search/kin.json",{
    headers: {
      "X-Naver-Client-Id" : "HC2v5RaXKKNAhu1IZRav",
      "X-Naver-Client-Secret": "72GmZ4lAiu",
    },
    params: params
  });

  return data;
};

export const getImageList = async(params) => {


    const {data} = await axios.get("/v1/search/image.json",{
      headers: {
        "X-Naver-Client-Id" : "HC2v5RaXKKNAhu1IZRav",
        "X-Naver-Client-Secret": "72GmZ4lAiu",
      },
      params: params
    });

    return data
};


