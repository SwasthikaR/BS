import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from './js/mainPage.js';
import Dashboard from './js/dashboard.js';
import CourierAddr from "./js/courierAddr.js";
import NewMainPage from "./js/newMainPage.js"

function App() {
  return (
    // <NewMainPage />
    <BrowserRouter basename="/BS">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/courier" element={<CourierAddr />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
