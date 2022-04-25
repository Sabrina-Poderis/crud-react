import './App.css';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import List from './List';
import Create from './Create';
import Edit from './Edit';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<List />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
     </Router>
  );
}

export default App;
