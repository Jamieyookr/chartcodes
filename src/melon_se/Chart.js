import React, { useState } from "react";
import ChartForm from "./ChartForm";
import ChartList from "./ChartList";
import original from "../utils/api/music";
import "./Chart.scss";
import Modal from "./Modal";

const Chart = () => {
  const [data, setData] = useState(original);
  const [moOpen, setMoOpen] = useState(false);
  const [point, setPoint] = useState();

  const getDate = () => {
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    const msg = `${date} ${month} ${year}`;

    return msg;
  };

  const onSearch = (hehe) => {
    
    setData(
      original.filter((item) => {
        const word = new RegExp(hehe, "ig");
        return item.title.match(word) || item.album.match(word) ||
        item.singer.match(word);
      })
    );
  };

  const clickLike = (id) => {
    setData(
          data.map((item) =>
            item.id === id ? { ...item, like: item.done? item.like - 1 : item.like +1 , done: !item.done } : item
          )
        )
  };

  const onModal = () => {
    setMoOpen(!moOpen);
  };

  const onPoint = (id) => {
    setPoint(original[id-1]);
    setMoOpen(!moOpen);
  };

  


  return (
    <div className="Chart">
      <h2>Top Songs Global - {getDate()}</h2>
      <ChartForm onSearch={onSearch} />
      <ChartList
        data={data}
        clickLike={clickLike}
        onPoint={onPoint}
      />
      {moOpen && <Modal point={point} onModal={onModal} />}
    </div>
  );
};

export default Chart;
