import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AdminDashboard from "./pages/AdminDashboard";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminDashboard />} />

        {/* Fallback route to prevent blank screens */}
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
