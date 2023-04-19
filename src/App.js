import Footer from "./components/Footer";
import Header from "./components/header/Header";
import { Routes, Route, Outlet } from "react-router-dom";
import ServicePage from "./pages/ServicePage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<div> home </div>} />
        <Route path="services" element={<ServicePage />} />
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
