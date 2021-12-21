import "./styles/App.css";
import "./styles/fonts.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/views/home/home";
import { NotFound } from "./components/views/notfound/notfound";
import { Terms } from "./components/views/terms/terms";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/terms" element={<Terms></Terms>}></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
