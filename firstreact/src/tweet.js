import React, { useState } from "react";
import "./App.css";

// function Tweet(props) {
//   return (
//     <div className="tweet">
//       <h3>{props.name}</h3>
//       <p>{props.message}</p>
//       <h3>Number of Likes</h3>
//     </div>
//   );
// }

export default Tweet;

//can also be written this way using destructing.

function Tweet({ name, message }) {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div className="tweet">
      <h3>{name}</h3>
      <p>{message}</p>
      <h3>Number of Likes</h3>
      <button className="btn" onClick={increment}>
        {count}
      </button>
    </div>
  );
}
