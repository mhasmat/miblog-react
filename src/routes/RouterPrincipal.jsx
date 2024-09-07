import {
    BrowserRouter, Routes, Route
} from "react-router-dom";
import Home from "../views/Home";
import Posteos from "../views/Posteos";
import CrearPosteos from "../views/CrearPosteos";
import NotFound from "../views/NotFound";
import Navbar from "../routes/Navbar";
import PosteosLeer from "../views/PosteosLeer";

const RouterPrincipal = () => {
  return (
    <>
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posteos" element={<Posteos />} />
            <Route path="/posteos/:id" element={<PosteosLeer />} />

            <Route path="/crear" element={<CrearPosteos />} />

            <Route path="*" element={<NotFound />} />
        </Routes> 
    </BrowserRouter>
    </>
  )
}

export default RouterPrincipal;