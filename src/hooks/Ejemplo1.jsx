import React, { useState } from "react";

export default function Ejemplo1() {
  const VALORINICIAL = 0;
  const PERSONAINICIAL = {
    nombre: "Pablo",
    email: "pablocharamello@gmail.com",
  };
  const [contador, setContador] = useState(VALORINICIAL);
  const [persona, setPersona] = useState(PERSONAINICIAL);

  function incrementarContador() {
    setContador(contador + 1);
  }

  function actualizarPersona() {
    setPersona({
      nombre: "Pepe",
      email: "pepe@pepe.com",
    });
  }
  return (
    <div>
      <h2>CONTADOR: {contador}</h2>
      <h2>PERSONA:</h2>
      <h3>NOMBRE: {persona.nombre}</h3>
      <h4>EMAIL: {persona.email}</h4>
      <button onClick={incrementarContador}>Incrementar Contador</button>
      <button onClick={actualizarPersona}>ActualizarPersona</button>
    </div>
  );
}
