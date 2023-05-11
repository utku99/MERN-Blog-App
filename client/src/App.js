import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx"
import "../src/app.css"
import Auth from "./pages/Auth.jsx"
import Posts from "./pages/Posts.jsx";
import Details from "./pages/Details.jsx"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/myposts" element={<Posts />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
