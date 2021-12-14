import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import Home from './pages/Home/Home';
import Blogs from './pages/Blogs/Blogs';
import Header from "./components/Header";

function App() {
  return (

    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Navigate to="/"></Navigate>}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
      </Routes>
    </Router>

  );
}

export default App;
