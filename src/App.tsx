import "./styles/App.css";
import "./styles/fonts.css";
import { Header } from "./components/modules/header/header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/views/home/home";
import { Footer } from "./components/modules/footer/footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
        </Routes>
        <div className="space"></div>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
