import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App";
import LandingPage from "./pages/public/landing-page";
import LoginPage from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";



function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<LandingPage />} />
        <Route path="/about" element={<App />} />
        <Route path="/courses" element={<App />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
