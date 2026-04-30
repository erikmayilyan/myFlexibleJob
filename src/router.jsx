import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Jobs from "./components/Jobs";
import JobDetails from "./components/JobDetails";
import About from "./components/About";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/jobs/:id" element={<JobDetails />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
};

export default Router;