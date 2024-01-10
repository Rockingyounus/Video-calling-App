import { Routes, Route } from "react-router-dom";
import "./App.css";
import LobbyScreen from "./screens/Lobby";
import Herosection from "./Herosection/Herosection";     
import RoomPage from "./screens/Room";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Herosection/>}/>
        <Route path="/lobby" element={<LobbyScreen />}/>
        <Route path="/room/:roomId" element={<RoomPage/>}/>
      </Routes> 
    </div>
  );
}

export default App;
