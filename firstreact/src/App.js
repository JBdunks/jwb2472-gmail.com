import React, { useState } from "react";
import Tweet from "./tweet";

function App() {
  const [users, setUser] = useState([
    { name: "Thanos", message: "Perfectly balanced, as all things should be." },
    {
      name: "Magneto",
      message:
        "You want society to accept you, but you can't even accept yourself."
    },
    { name: "Ultron", message: "I had strings, but now I'm free." },
    {
      name: "Hela",
      message: "I'm not a queen or a monster. I'm the Goddess of Death."
    }
  ]);

  return (
    <div className="app">
      {users.map(user => (
        <Tweet name={user.name} message={user.message} />
      ))}
    </div>
  );
}

// function App() {
//   return (
//     <div className="app">
//       <Tweet
//         name="Thanos"
//         message="Perfectly balanced, as all things should be."
//       />
//       <Tweet
//         name="Magneto"
//         message="You want society to accept you, but you can't even accept yourself."
//       />
//       <Tweet
//         name="Ultron"
//         message="I had strings, but now I'm free.
// "
//       />
//       <Tweet
//         name="Hela"
//         message="I'm not a queen or a monster. I'm the Goddess of Death."
//       />
//     </div>
//   );
// }

export default App;
