import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App";
import LandingPage from "./pages/public/landing-page";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<LandingPage />} />
        <Route path="/about" element={<App />} />
        <Route path="/courses" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
