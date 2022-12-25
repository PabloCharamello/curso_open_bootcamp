import React from "react";

export default function Ejemplo4(props) {
  return (
    <div>
      <h1>Ejemplo de CHILDREN PROPS</h1>
      <h2>Nombre: {props.nombre}</h2>
      {/* props.children pintara por defecto aquello que se encuentre entre las etiquetas
      de apertura y cierre de este componente desde el componente de orden superior*/}
      {props.children}
    </div>
  );
}
