import {
    BrowserRouter, Routes, Route
} from "react-router-dom";
import Home from "../views/Home";
import Posteos from "../components/Posteos";
import Navbar from "./Navbar";

const RouterPrincipal = () => {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posteos" element={<Posteos />} />
            <Route path="/crear" element="" />

            <Route path="*" element="Error404" />
        </Routes> 
    </BrowserRouter>
  )
}

export default RouterPrincipal;