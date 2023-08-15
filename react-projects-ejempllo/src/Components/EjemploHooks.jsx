import React, { useMemo, useCallback, useState } from "react";

// useMemo ---> React.memo() -->  Funciones Creacionales de componentes que debe memorizar algo;
// useCallback ---> Momoriza valores listados en la dependencia. Funciones en linea

const MiComponente = () => {
  const [name, setName] = useState("");

  const names = ["Martin", "Steven"];

  const getName = useCallback(() => {
    // obtenemos un nombre aleatorio
    const random = Math.floor(Math.random() * (names.length - 1));
    setName(names[random]);
  }, [name]);

  const clarName = useCallback(() => {
    setName(null);
  }, []);

  return <h1>Mi Componente</h1>;
};

export default MiComponente;
