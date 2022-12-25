import React, { useState, useContext } from "react";

const miContexto = React.createContext(null);

function Componente1() {
  const state = useContext(miContexto);
  return (
    <div>
      <h1>El token es: {state.token}</h1>
      <Componente2 />
    </div>
  );
}

function Componente2() {
  const state = useContext(miContexto);
  return (
    <div>
      <h2>Las sesion es: {state.sesion}</h2>
    </div>
  );
}

export default function MiComponenteConContexto() {
  const ESTADOINICIAL = {
    token: "1234567",
    sesion: 1,
  };

  const [sessionData, setSessionData] = useState(ESTADOINICIAL);

  function actializarSesion() {
    setSessionData({
      token: "JWT123456789",
      sesion: sessionData.sesion + 1,
    });
  }

  return (
    <div>
      <miContexto.Provider value={sessionData}>
        <h1>Ejemplo de useState() y useContext()</h1>
        <Componente1 />
        <button onClick={actializarSesion}>Actualizar sesion</button>
      </miContexto.Provider>
    </div>
  );
}
