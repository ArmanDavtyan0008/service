import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/header/Header";
import { Routes, Route, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<div> home </div>} />
        <Route path="services" element={<div> services </div>} />
        <Route path="catalogue" element={<div> catalogue </div>} />
        <Route path="about" element={<div> about </div>} />
        <Route path="contact-us" element={<div> contact </div>} />
      </Routes>
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
