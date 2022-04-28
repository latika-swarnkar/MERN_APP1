import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom"
import Welcome from "./Components/Welcome/Welcome"
import ListBooks from './Components/ListBooks';
import AddBook from './Components/AddBook'
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/" element={<ListBooks />} />
        <Route path="/book/add" element={<AddBook />} />
      </Routes>
    </div>
  );
}

export default App;
