import "./App.css";
import ChatPage from "./Pages/ChatPage.js";
import Homepage from "./Pages/Homepage.js";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} exact />
        <Route path="/chats" element={<ChatPage />} />
      </Routes>
    </div>
  );
}
export default App;
