import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/header/Header";
import { Routes, Route, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<div>This is the home page</div>} />
        <Route path="services" element={<div>This is the services page</div>} />
          <Route path="catalogue" element={<div>This is the catalogue page</div>} />
          <Route path="about" element={<div>This is the about page</div>} />
          <Route path="contact-us" element={<div>This is the contact page</div>} />
      </Routes>
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
