import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactPlayer from "react-player";
import { Redirect } from "react-router-dom";

function Body({
  yogaData,
  setYogaData,
  TodoData,
  setTodoData,
  bodyTrainingData,
  setBodyTrainingData,
  bodyDietData,
  setbodyDietData,
  dataToDtailes,
  setdataToDtailes,
}) {
  // redrect detailes state--------------------------------------------------------------------------
  const [show, setShow] = useState(false);
  useEffect(getData, []);
  //todo yoga api-----------------------------------------------------------------------------------
  console.log(bodyDietData);
  function getData() {
    const url = "http://yogapi.herokuapp.com/";
    axios
      .get(url)
      .then(function (response) {
        // handle success
        setYogaData(response.data);
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }

  // todo fitness/workout json--------------------------------------------------------------------------------
  useEffect(getBodyTrainingData, []);
  function getBodyTrainingData() {
    // const url = "../json/bodyTraining.json";
    const url = "/bodyTraining";
    axios
      .get(url)
      .then(function (response) {
        // handle success
        setBodyTrainingData(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }

  // todo Diet json--------------------------------------------------------------------------------
  useEffect(getBodyDietData, []);
  function getBodyDietData() {
    // const url = "../json/diet.json";
    const url = "/diet";
    axios
      .get(url)
      .then(function (response) {
        // handle success
        setbodyDietData(response.data);
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }
  //todo add body yoga ------------------------------------------------------------------------------------
  const addYogaTask = (i) => {
    const copyYogaData = [...yogaData];
    const temp = [...TodoData];
    temp.push(copyYogaData[i]);
    setTodoData(temp);
    console.log({ temp });
  };
  //todo Add body training------------------------------------------------------------------------------------
  const addTrainingTask = (i) => {
    const copyTrainingData = [...bodyTrainingData];
    const temp = [...TodoData];
    temp.push(copyTrainingData[i]);
    setTodoData(temp);
    console.log({ temp });
  };
  //todo Add body diet------------------------------------------------------------------------------------
  const addDietTask = (i) => {
    const copyDietData = [...bodyDietData];
    const temp = [...TodoData];
    temp.push(bodyDietData[i]);
    setTodoData(temp);
    console.log({ temp });
  };
  //todo send to detailes------------------------------------------------------------------------------------
  const sendToDetailes = (obj) => {
    setdataToDtailes(obj);
  };

  // todo=> redirect to detailes--------------------------------------------------------------------------------------------------------
  if (show) return <Redirect to="/Detailes" />;
  return (
    <div>
      <div>
        {bodyTrainingData
          ? bodyTrainingData.map((item, i) => {
              return (
                <div key={i}>
                  {item.sets}
                  {item.titleTrain}
                  <p
                    onClick={() => {
                      sendToDetailes(item);
                      setShow(true);
                    }}
                  >
                    {item.descTrn ? item.descTrn.slice(0, 100) : ""}
                  </p>
                  <ReactPlayer controls url={item.videoTrn} />
                  <img src={item.imgTrn} alt="" />
                  <button
                    onClick={() => {
                      addTrainingTask(i);
                    }}
                  >
                    start
                  </button>
                </div>
              );
            })
          : ""}
      </div>
      <div>
        {bodyDietData
          ? bodyDietData.map((item, i) => {
              return (
                <div key={i}>
                  <p
                    onClick={() => {
                      sendToDetailes(item);
                      setShow(true);
                    }}
                  >
                    {" "}
                    Day{item.day ? item.day.slice(0, 100) : ""}...
                  </p>
                  {item.Breakfast_menu}
                  {item.lunch_menu}
                  {item.dinner_menu}
                  <img src={item.imgDiet} alt="" />
                  <button
                    onClick={() => {
                      addDietTask(i);
                    }}
                  >
                    start
                  </button>
                </div>
              );
            })
          : ""}
      </div>
      <div>
        {yogaData.map((item, i) => {
          return (
            <div key={i}>
              <button
                onClick={() => {
                  addYogaTask(i);
                }}
              >
                start
              </button>
              <p
                onClick={() => {
                  sendToDetailes(item);
                  setShow(true);
                }}
              >...
                {item.sanskrit_name}
              </p>
              <p>{item.english_name}</p>
              <img
                src={item.img_url}
                alt=""
                // style={{ width: "80px", height: "80px" }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Body;
