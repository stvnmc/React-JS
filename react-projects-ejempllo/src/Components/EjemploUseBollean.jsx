import React, { useEffect, useRef, useState } from "react";

// useBoolean Hook
const useBoolean = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const updateValue = useRef({
    toggle: () => setValue((oldValue) => !oldValue),
    on: () => setValue(true),
    off: () => setValue(false),
  });
  return [value, updateValue.current];
};

const EjemploUseBoolean = () => {
  const [lista, setLista] = useState([]);

  // Uso de Hook useBoolean
  const [cargando, setCargando] = useBoolean(false);
  const [error, setError] = useBoolean(false);

  // Al iniciar el componente, cargamos la lista
  useEffect(() => {
    setCargando.on(); // Cargando = true
    setError.on();
    setTimeout(() => {
      setCargando.off();
    }, 4000);
  }, [lista, setCargando, setError]);

  return (
    <div>
      <p>{cargando ? "Cargan" : null}</p>
      <p>{error ? "Ha ocurrido un error" : null}</p>
    </div>
  );
};

export default EjemploUseBoolean;
