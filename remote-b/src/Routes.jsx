import { Routes, Route } from "react-router-dom";
import Navbar from "./navbar";

function Home({ title }) {
  return (
    <div>
      <Navbar />
      <p>Home Remote B - {title}</p>
    </div>
  );
}

function About({ title }) {
  return (
    <div>
      <Navbar />
      <p>About Remote B - {title}</p>
    </div>
  );
}

function Contact({ title }) {
  return (
    <div>
      <Navbar />
      <p>Contact Remote B - {title}</p>
    </div>
  );
}

function AppRoutes({ title }) {
  return (
    <Routes>
      <Route path="/" element={<Home title={title} />} />
      <Route path="about" element={<About title={title} />} />
      <Route path="contact" element={<Contact title={title} />} />
    </Routes>
  );
}

export default AppRoutes;
