import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";


import CreateRequestPage from "./pages/CreateRequestPage";

function App() {
  return (
    <Router>
      {/* Layout wrapper */}
      <div className="flex flex-col min-h-screen">
        <Navbar />

        {/* Main content should grow to fill space */}
        <main className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/CreateRequest" element={<CreateRequestPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />


          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
