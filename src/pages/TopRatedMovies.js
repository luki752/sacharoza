import React from "react";
//import url
import { getTopRatedMedia } from "../api";
//import components
import PageComponent from "../components/PageComponent";

const PopularTv = () => {
  return (
    <PageComponent
      api={getTopRatedMedia}
      media={"movie"}
      title={"Top rated Movies"}
      movie
    ></PageComponent>
  );
};

export default PopularTv;
