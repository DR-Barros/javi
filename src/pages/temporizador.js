import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Temporizador = () => {
  const [dias, setDias] = useState(0);
  const [horas, setHoras] = useState(0);
  const [minutos, setMinutos] = useState(0);
  const [segundos, setSegundos] = useState(0);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  //funcion para calcular el tiempo restante para el 14 de febrero de 2024
  const calcularTiempoRestante = () => {
    const fechaEvento = new Date('2024-02-14T00:00:00');
    const fechaActual = new Date();
    const diferencia = fechaEvento - fechaActual;
    if (diferencia < 0) {
      setShow(true);
      //setiamos los segundos a 0 para que no se muestren valores negativos
      setDias(0);
      setHoras(0);
      setMinutos(0);
      setSegundos(0);
    } else {
      const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
      const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
      const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);
      setDias(dias);
      setHoras(horas);
      setMinutos(minutos);
      setSegundos(segundos);
    }
  };

  useEffect(() => {
    calcularTiempoRestante();
    const interval = setInterval(() => {
      calcularTiempoRestante();
    }, 1000);
    return () => clearInterval(interval);
  }, []);


  return (
    <div style={{
      position: "relative",
      overflow: "hidden",
      height: "100vh",
      width: "100%",
      textAlign: "center",
      justifyContent: "center",
      backgroundColor: "#e1d5e7",
      margin: 0,
      display: "flex",
      flexDirection: "column",
    }}>
      <div style={{
        padding: "20px",
        backgroundColor: "#C99BDF",
        margin: "auto",
        borderRadius: "10px",
        textAlign: "center",
        maxWidth: "600px",
      }}>
        <h1>¡Hola mi amor!</h1>
        <h2>Quiero que sepas que te amo mucho y que estoy muy feliz de estar a tu lado. tengo algo importante que decirte:</h2>
        <h3>Queda poco tiempo para tu sorpresa</h3>
        <div style={{
          display: "flex",
          justifyContent: "space-around",
        }}>
          <div style={{
            backgroundColor: "white", 
            borderRadius: 10, 
            height: 80, 
            width: 80, 
            textAlign: "center", 
            justifyContent: 'center',
            display: "flex",
            flexDirection: "column",

            }}>
              <p style={{margin: 0}}>Días</p>
              <h1 style={{margin: 0}}>
              {dias}
              </h1>
            </div>
          <div style={{
            backgroundColor: "white", 
            borderRadius: 10, 
            height: 80, 
            width: 80, 
            textAlign: "center", 
            justifyContent: 'center',
            display: "flex",
            flexDirection: "column",

            }}>
              <p style={{margin: 0}}>Horas</p>
              <h1 style={{margin: 0}}>
              {horas}
              </h1>
            </div>
          <div style={{
            backgroundColor: "white", 
            borderRadius: 10, 
            height: 80, 
            width: 80, 
            textAlign: "center", 
            justifyContent: 'center',
            display: "flex",
            flexDirection: "column",

            }}>
              <p style={{margin: 0}}>Minutos</p>
              <h1 style={{margin: 0}}>
              {minutos}
              </h1>
            </div>
          <div style={{
            backgroundColor: "white", 
            borderRadius: 10, 
            height: 80, 
            width: 80, 
            textAlign: "center", 
            justifyContent: 'center',
            display: "flex",
            flexDirection: "column",

            }}>
              <p style={{margin: 0}}>Segundos</p>
              <h1 style={{margin: 0}}>
              {segundos}
              </h1>
            </div>
        </div>
        {show && <>
          <h2>¡Feliz día de San Valentín!</h2>
          <button 
            style={{
              padding: "10px 20px",
              fontSize: "1.5em",
              borderRadius: "10px",
              cursor: "pointer",
            }}
            onClick={() => navigate('/Libros')}
          >Ir a ver la sorpresa</button>
        </>}
      </div>
    </div>
  );
};

export default Temporizador;
