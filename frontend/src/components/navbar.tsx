import { Link, Routes, Route } from "react-router";
import Catalago from "../pages/Catalogo";
import Inicial from "../pages/Inicial";
import SobreMim from "../pages/SobreMim";
import Logo from "../assets/Anime_logo.png"

function Navbar() {
    return (
     <main className="min-h-screen bg-amber-50">
      
      <nav className="bg-blue-600 text-white  p-4 flex gap-6 text-2xl  ">
      <div className="">
      <img src={Logo} className="h-10 w-15"/>
      </div >
      <div className="flex justify-end basis-full gap-2">
        <Link to="/Inicial" className="hover:underline" >Inicial</Link> |
        <Link to="/Catalogo" className="hover:underline">Catalogo</Link> |
        <Link to="/SobreMim" className="hover:underline">Sobre Mim</Link> 
      </div>
        
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