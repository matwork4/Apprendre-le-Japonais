import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./react/Layout";
import Home from "./react/Home";
import Hiragana from "./react/Hiragana";
import Katakana from "./react/Katakana";
import Aide from "./react/Aide";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="hiragana" element={<Hiragana />} />
          <Route path="katakana" element={<Katakana />} />
          <Route path="aide" element={<Aide />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);