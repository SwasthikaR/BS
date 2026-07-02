import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from './js/mainPage.js';
import Dashboard from './js/dashboard.js';

function App() {
  return (
    <BrowserRouter basename="/BS">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
