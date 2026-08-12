import YouImg from "../assets/sky-kimionawa.gif"

function Inicial() {
  return (
    <main>
      <h1 className="text-5xl font-bold text-blue-800 text-left">Bem Vindo!!!</h1>
      
      <div>
        <h3>Aqui você encontra o Top 4 melhores Animes de Romance</h3>
      
      </div>
      <div className=" flex ">
        <img src={YouImg} alt="SIM" />
      </div>
    </main>
  );
}

export default Inicial;
