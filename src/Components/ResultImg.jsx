import React from "react";

const ResultImg = (props) => {
  var data = props.img

  return (
    <div className="slika">
      <img src={data.images.downsized_medium.url} alt="gif" />
      <h4>{data.title}</h4>
    </div>
  );
};

export default ResultImg;
