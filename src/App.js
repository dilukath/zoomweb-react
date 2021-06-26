import "./App.css";
import Home from "./Home";
import { useState } from "react";

function App() {
  const [joinMeeting, setJoinMeeting] = useState(false);
  return (
    <div className="App">
      <main>
        <Home/>
      {/* {joinMeeting ? (<Zoom />) : (
          <button style={{border: '1px solid #fff'}} onClick={() => setJoinMeeting(true)}>Join Meeting</button>
       )} */}
      </main>
    </div>
  );
}

export default App;
