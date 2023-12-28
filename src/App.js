import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import DetailPage from "./pages/DetailPage";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product/detail/:id" element={<DetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
