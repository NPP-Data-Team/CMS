import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

// pages
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"


function App() {
  return (
    <BrowserRouter>
      <nav>
        <h1>CMS test</h1>
        <Link to="/">Home</Link>
        <Link to="/create">Add individual</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
