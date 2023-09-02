import React, { useState } from "react";
import "./mycss.css";

const App = () => {
  const [title, settitle] = useState("");
  const [dec, setdec] = useState("");
  const [data, setdata] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    setdata([...data, { title, dec }]);
    settitle("");
    setdec("");
  };
  const deleteHandler = (i) => {
    let copydata = [...data];
    copydata.splice(i, 1);
    setdata(copydata);
  };
  let renderTask = <h2>No Task Available</h2>;
  if (data.length > 0) {
    renderTask = data.map((e, i) => {
      return (
        <li className="list">
          <h5>{e.title}</h5>
          <p>{e.dec}</p>
          <button
            onClick={() => {
              deleteHandler(i);
            }}
          >
            Delete
          </button>
        </li>
      );
    });
  }
  return (
    <div>
      <header className="header">Todo-List</header>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Enter Title here"
          className="title"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Enter Descriptiion"
          className="dec"
          value={dec}
          onChange={(e) => {
            setdec(e.target.value);
          }}
        />
        <button className="btn">Add Task</button>
      </form>
      <hr />
      <div className="listDiv">
        <ul>{renderTask}</ul>
      </div>
    </div>
  );
};
export default App;
