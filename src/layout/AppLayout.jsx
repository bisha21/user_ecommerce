import { Outlet } from "react-router-dom";
import Navbar from "../_components/Header";
import Footer from "../_components/Footer";
export default function AppLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer/>
    </>
  );
}
