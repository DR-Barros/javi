import React, { useState } from 'react';

const HuirBoton = ({texto="No me atrapes"}) => {
  const [posicion, setPosicion] = useState({ top: '70%', left: '60%' });

  const distanciaHuida = 50; // Distancia en píxeles para iniciar la huida

  const moverBoton = (e) => {
    const boton = e.target.getBoundingClientRect();
    const centroBoton = {
      x: boton.left + boton.width / 2,
      y: boton.top + boton.height / 2,
    };
    const distanciaMouseBoton = Math.sqrt(
      Math.pow(centroBoton.x - e.clientX, 2) + Math.pow(centroBoton.y - e.clientY, 2)
    );

    if (distanciaMouseBoton < distanciaHuida) {
      // Calcula una nueva posición para el botón
      let nuevaPosicionX = Math.random() * (window.innerWidth - boton.width);
      let nuevaPosicionY = Math.random() * (window.innerHeight - boton.height);

      setPosicion({
        left: `${nuevaPosicionX}px`,
        top: `${nuevaPosicionY}px`,
      });
    }
  };

  return (
    <button
      onMouseMove={moverBoton}
      onTouchMove={moverBoton}
      onTouchStart={moverBoton}
      style={{
        padding: "10px 20px",
        fontSize: "1.5em",
        borderRadius: "10px",
        cursor: "pointer",
        position: 'absolute',
        top: posicion.top,
        left: posicion.left,
      }}
    >
      {texto}
    </button>
  );
};

export default HuirBoton;