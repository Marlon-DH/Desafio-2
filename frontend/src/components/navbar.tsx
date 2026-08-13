import { Link, Routes, Route } from "react-router";
import Catalago from "../pages/Catalogo";
import Inicial from "../pages/Inicial";
import SobreMim from "../pages/SobreMim";

function Navbar() {
    return (
     <main className="min-h-screen bg-amber-50">
      <nav className="bg-blue-600 text-white text-end p-4 flex gap-6">
        <Link to="/Inicial" className="hover:underline" >Inicial</Link>
        <Link to="/Catalogo" className="hover:underline">Catalogo</Link>
        <Link to="/SobreMim" className="hover:underline">Sobre Mim</Link>
      </nav>
      <div >
        <Routes>
          <Route path="/Inicial" element={<Inicial />}></Route>
          <Route path="/Catalogo" element={<Catalago />}></Route>
          <Route path="/SobreMim" element={<SobreMim />}></Route>
        </Routes>
      </div>
    </main>
  )
}

export default Navbar