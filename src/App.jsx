import { Route, Routes } from "react-router";
import Home from "./pages/Home/Home";
import './App.css'

function App() {

  return (
    <Routes>
      <Route index path="/" element={<Home/>}/>
    </Routes>
  );
}

export default App;
