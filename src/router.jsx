import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Jobs from "./components/Jobs";
import JobDetails from "./components/JobDetails";
import About from "./components/About";
import Article from "./components/Article";
import Articles from "./components/Articles";
import Footer from "./components/Footer";
import Login from "./components/Login";
import DashboardRoute from "./components/DashboardRoute";
import EditJob from "./components/EditJob";
import ScrollToTop from "./components/ScrollToTop";

const getStoredUser = () => {
  try {
    const raw = localStorage.getItem("authUser");
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};

const ProtectedBusinessRoute = ({ children }) => {
  const user = getStoredUser();
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  if (user.role !== 'business') {
    return <Navigate to="/dashboard" replace />;
  }
  return children;
};

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/jobs/:id" element={<JobDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/articles/:id" element={<Article />} />
        <Route path="/article/:id" element={<Article />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<DashboardRoute />} />
        <Route
          path="/dashboard/edit/:id"
          element={
            <ProtectedBusinessRoute>
              <EditJob />
            </ProtectedBusinessRoute>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
};

export default Router;