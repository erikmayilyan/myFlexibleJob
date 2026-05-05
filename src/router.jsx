import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Jobs from "./components/Jobs";
import JobDetails from "./components/JobDetails";
import About from "./components/About";
import Article from "./components/Article";
import Articles from "./components/Articles";
import Footer from "./components/Footer";
import Login from "./components/Login";

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
      </Routes>
      <Footer />
    </BrowserRouter>
  )
};

export default Router;