import React from "react";
import ReactPlayer from "react-player";

function TodoList({ TodoData, setTodoData, ComplitedData, setComplitedData }) {
  //todo=> add --------------------------------------------------------------------------------------------------------
  const addTocomplited = (i) => {
    const copyTodoData = [...TodoData];
    const temp = [...ComplitedData];
    temp.push(copyTodoData[i]);
    setComplitedData(temp);
    copyTodoData.splice(copyTodoData[i], 1);
    setTodoData(copyTodoData);
    console.log(copyTodoData[i]);
  };
  //todo=> Delete book task --------------------------------------------------------------------------------------------------------
  const deleteBookTask = (i) => {
    const copyTodoData = [...TodoData];
    const temp = [...copyTodoData];
    temp.splice(i, 1);
    setTodoData(temp);
  };

  // -----------------------------------------------------------------------------------------------------------------------------------
  return (
    <div>
      {TodoData
        ? TodoData.map((item, i) => {
            return (
              <div key={i}>
                {/* mind books---------------------------------------------------------------------------------------- */}
                {item.title}
                <img src={item.img} alt="" />
                {item.discreption ? item.discreption.slice(0, 100) : ""}...
                {/* mind articles---------------------------------------------------------------------------------------- */}
                {item.titleArc}
                <img src={item.imgArc} alt="" />
                {item.story ? item.story.slice(0, 100) : ""}...
                {/* mind videos ---------------------------------------------------------------- */}
                {item.id}
                {item.titleVid}
                {item.descriptionVid ? item.descriptionVid.slice(0, 100) : ""}
                ...
                <ReactPlayer controls url={item.video} />
                {/* Body yoga---------------------------------------------------------------------------------------- */}
                {item.english_name}
                {item.sanskrit_name}
                <img src={item.img_url} alt="" />
                {/* body training---------------------------------------------------------------------- */}
                {item.sets}
                {item.titleTrain}
                {item.descTrn ? item.descTrn.slice(0, 100) : ""}...
                <ReactPlayer controls url={item.videoTrn} />
                <img src={item.imgTrn} alt="" />
                {/*body diet ------------------------------------------------------------------------------------ */}
                Day{item.day ? item.day.slice(0, 100) : ""}...
                {item.Breakfast_menu}
                {item.lunch_menu}
                {item.dinner_menu}
                <img src={item.imgDiet} alt="" />
                {/* ------------------------------------------------------------------------------------ */}
                <button
                  onClick={() => {
                    addTocomplited(i);
                  }}
                >
                  Complited
                </button>
                <button
                  onClick={() => {
                    deleteBookTask(i);
                  }}
                >
                  Delete
                </button>
              </div>
            );
          })
        : ""}
    </div>
  );
}

export default TodoList;
