import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Login from "./pages/Login";
import HomeOrder from "./pages/HomeOrder";
import OnlineMenu from "./pages/OnlineMenu";
import Signup from "./pages/Signup";

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home-order" element={<HomeOrder />} />
        <Route path="/online-menu" element={<OnlineMenu />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
