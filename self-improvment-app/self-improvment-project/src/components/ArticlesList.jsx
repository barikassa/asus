import React, { useEffect, useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

function ArticlesList(datafromArcToDtailes, setDatafromArcToDtailes) {
  const [arcData, setArcData] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(getJason, []);
  function getJason() {
    // const url = "./json/articles.json";
    const url = "/articleListToArticleComponent";
    axios
      .get(url)
      .then(function (response) {
        // handle success
        // console.log(response.data);
        setArcData(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }
  // todo=> send props to detailes--------------------------------------------------------------------------------------------------------
  const sendToDetailes = (obj) => {
    // setDatafromArcToDtailes(obj)
    console.log("ggggggggggggggggggggggggggggggg", datafromArcToDtailes);
  };
  // todo=> redirect to detailes--------------------------------------------------------------------------------------------------------
  if (show) return <Redirect to="/Detailes" />;

  return (
    <div>
      {arcData
        ? arcData.map((item, i) => {
            return (
              <div key={i}>
                {item.title}
                <img src={item.img} alt="" />
                <p
                  onClick={() => {
                    sendToDetailes(item);
                    setShow(true);
                  }}
                >
                  {item.discreption.slice(0, 200)}...
                </p>
              </div>
            );
          })
        : ""}
    </div>
  );
}

export default ArticlesList;
