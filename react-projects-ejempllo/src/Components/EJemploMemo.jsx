import React from "react";
// Cuando usar hook useMemo()

// Componente Funcional que recibe unas props y siempre devuelve los mismo
// Cuando un componente se re-reanderiza demasiadas veces
// Un componente recibe las mismas props y re-renderiza
// Componentes grandes / muy grandes que contiene muchos elementos UI que dependen de los props

function EjemploUseMemo() {
  const names = ["Alicia", "Marta"];

  return <GeneradorNombres names={names} />;
}

function GeneradorNombres(props) {
  const { names } = props;
  const [name, setName] = React.useState(names[0]);

  const getName = React.useCallback(() => {
    const index = Math.floor(Math.random() * names.length);
    setName(names[index]);
  }, [names]);

  const clarName = React.useCallback(() => {
    setName(null);
  });

  return (
    <div>
      <h1>Memoize de React con useMemo y useCallback</h1>
      {React.useMemo(() => {
        console.log("Rendeizacion Nombre");
        return (
          <div>
            <h2>Nombre Generado: {name ? name : "None"}</h2>
          </div>
        );
      }, [name])}

      <Button label="Genarar Nombre" click={getName} />
      <Button label="Borrar Nombre" click={clarName} />
    </div>
  );
}

function WrappedComponent(props) {
  return (
    <button
      onClick={() => {
        props.click();
      }}
    >
      {props.label}
    </button>
  );
}

const Button = React.memo(WrappedComponent);

export default EjemploUseMemo;
