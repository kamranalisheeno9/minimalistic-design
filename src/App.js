import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/home'
import JoinCreators from './pages/joincreators'
import JoinPlayers from './pages/joinplayers'
import Create from './pages/create'
import { useState } from "react";

function App() {
  const [currentTournament,setCurrentTournament]=useState("")
  return (
    <BrowserRouter>
      <Routes>
          <Route path="joincreators" element={<JoinCreators current={currentTournament} setCurrent={setCurrentTournament} />} />
          <Route path="joinplayers" element={<JoinPlayers current={currentTournament} setCurrent={setCurrentTournament} />} />
          <Route path="create" element={<Create current={currentTournament} setCurrent={setCurrentTournament} />} />
        <Route path="/" element={<Home />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
