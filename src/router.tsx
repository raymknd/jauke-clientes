import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import Loader from "./components/Loader"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Proyecto from "./pages/Proyecto"

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/proyecto/:id" element={<Proyecto />} />
        <Route path="*" element={<Link to="/login">Ir al login</Link>} />
      </Routes>
      <Loader />
    </BrowserRouter>
  )
}

export default Router
