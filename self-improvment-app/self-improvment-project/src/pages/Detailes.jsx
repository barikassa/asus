import React from "react";
import ReactPlayer from "react-player";

function Detailes({
  mindVideoData,
  mindArticleData,
  setmindArticleData,
  dataToDtailes,
  setdataToDtailes,
  bookDatas,
  datafromArcToDtailes,
  setDatafromArcToDtailes,
}) {
  return (
    <div>
      <div>
        {dataToDtailes.titleArc}
        <img src={dataToDtailes.imgArc} alt="" />
        {dataToDtailes.story}
      </div>
      {/*mindVideoData----------------------------------------------------------------------------------------------------------------  */}

      <div>
        {dataToDtailes.titleVid}
        {dataToDtailes.descriptionVid}
        <ReactPlayer controls url={dataToDtailes.video} />
      </div>
      {/*bookDatas----------------------------------------------------------------------------------------------------------------  */}

      <div>
        {dataToDtailes.title}
        {dataToDtailes.discreption}
        <img src={dataToDtailes.img} alt="" />
      </div>

      {/*body training data----------------------------------------------------------------------------------------------------------------  */}
      <div>
        {dataToDtailes.sets}
        {dataToDtailes.titleTrain}...
        <ReactPlayer controls url={dataToDtailes.videoTrn} />
        <img src={dataToDtailes.imgTrn} alt="" />
      </div>

      {/*body diet data----------------------------------------------------------------------------------------------------------------  */}
      <div>
        {dataToDtailes.sets}
        {dataToDtailes.Breakfast_menu}
        {dataToDtailes.lunch_menu}
        {dataToDtailes.dinner_menu}
        <img src={dataToDtailes.imgDiet} alt="" />
      </div>
      {/*body yoga data----------------------------------------------------------------------------------------------------------------  */}
      <div>
        {dataToDtailes.sanskrit_name}
        {dataToDtailes.english_name}
        <img src={dataToDtailes.img_url} alt="" />
      </div>
      {/*body article from component data----------------------------------------------------------------------------------------------------------------  */}

      <div>
        {datafromArcToDtailes ? datafromArcToDtailes.title : ""}
        {datafromArcToDtailes ? (
          <img src={datafromArcToDtailes.img} alt="" />
        ) : (
          ""
        )}
        <p>{datafromArcToDtailes ? datafromArcToDtailes.discreption : ""}</p>
      </div>
    </div>
  );
}

export default Detailes;
