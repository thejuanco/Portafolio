import { Route, Routes } from "react-router";
import './App.css'

//Pages
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";

function App() {

  return (
    <Routes>
      <Route index path="/" element={<Home/>}/>
      <Route index path="/contact" element={<Contact/>}/>
    </Routes>
  );
}

export default App;
