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
import BusinessDashboard from "./components/BusinessDashboard";
import EditJob from "./components/EditJob";

const getStoredUser = () => {
  try {
    const raw = localStorage.getItem("authUser");
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};

const Router = () => {
  return (
    <BrowserRouter>
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
        <Route
          path="/dashboard"
          element={
            getStoredUser() ? (
              <BusinessDashboard />
            ) : (
              <Navigate to="/login" replace state={{ from: "/dashboard" }} />
            )
          }
        />
        <Route path="/dashboard/edit/:id" element={<EditJob />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
};

export default Router;