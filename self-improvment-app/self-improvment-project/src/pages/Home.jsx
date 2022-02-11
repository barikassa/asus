import React from "react";
import ArticlesList from "../components/ArticlesList";
import BookList from "../components/BooksList";
import { Redirect } from "react-router-dom";

function Home({
  auth,
  bookDatas,
  setBookDatas,
  arcticleData,
  setArcData,
  dataToDtailes,
  setdataToDtailes,
  datafromArcToDtailes,
  setDatafromArcToDtailes
}) {
  // if (arcticleData) {
  //   console.log("Homeeeeeeeeeee", arcticleData);
  // }
  return (
    <div>
      {" "}
      <BookList
        bookDatas={bookDatas}
        setBookDatas={setBookDatas}
        dataToDtailes={dataToDtailes}
        setdataToDtailes={setdataToDtailes}
      />
      <ArticlesList
        dataToDtailes={dataToDtailes}
        setdataToDtailes={setdataToDtailes}
      />
    </div>
  );
}

export default Home;
