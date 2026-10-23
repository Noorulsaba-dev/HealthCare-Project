
import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  Navigate,
} from "react-router-dom";

import Auth from "./components/Auth";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./pages/Hero";
import Features from "./pages/Features";
import Services from "./pages/Services";
import Doctors from "./pages/DoctorsSection";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import MyAppointments from "./pages/MyAppointments";
import AIAssistant from "./pages/AIAssistant";

function AppContent() {
  const [authOpen, setAuthOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setAuthOpen(false);
    navigate("/dashboard");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <>
      <Navbar onLoginClick={() => setAuthOpen(true)} />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Features />
              <Services />
              <Doctors />
              <Contact />
            </>
          }
        />

        <Route path="/about" element={<About />} />

        <Route
          path="/dashboard"
          element={
            isLoggedIn ? (
              <Dashboard onLogout={handleLogout} />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />

        <Route
          path="/my-appointments"
          element={
            isLoggedIn ? (
              <MyAppointments />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />

        <Route
          path="/ai-assistant"
          element={
            isLoggedIn ? (
              <AIAssistant />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />
      </Routes>

      <Footer />

      <Auth
        isOpen={authOpen}
        onClose={() => setAuthOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
