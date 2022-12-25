import React, { useEffect, useRef, useState } from "react";

export default function Ejemplo2() {
  const [contador1, setContador1] = useState(0);
  const [contador2, setContador2] = useState(0);

  const miRef = useRef();

  function incrementar1() {
    setContador1(contador1 + 1);
  }

  function incrementar2() {
    setContador2(contador2 + 1);
  }

  //   useEffect(() => {
  //     console.log(miRef);
  //   });

  useEffect(() => {
    console.log("Ha cambiado el contador1 o contador2");
  }, [contador1, contador2]);
  return (
    <div>
      <h2>CONTADOR1: {contador1}</h2>
      <h2>CONTADOR2: {contador2}</h2>
      <h4 ref={miRef}>Ejemplo de elemento referenciado</h4>
      <div>
        <button onClick={incrementar1}>Incrementar contador 1</button>
        <button onClick={incrementar2}>Incrementar contador 2</button>
      </div>
    </div>
  );
}
