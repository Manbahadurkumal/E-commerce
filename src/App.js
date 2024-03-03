import "bootstrap/dist/css/bootstrap.css";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./component/About";
import Home from "./component/Home";
import Layout from "./component/Layout";
import Contact from "./component/Contact";
import NoPage from "./component/NoPage";
// import "font-awesome/fonts"
import Bottom from "./component/Bottom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    <Bottom/>
    </div>
  );
}

export default App;
