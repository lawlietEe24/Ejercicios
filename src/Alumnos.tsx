interface Alumno {
    name: string;
    edad: number;
    calificacion: number;
  }
  
  const alumnos: Alumno[] = [
    { name: 'Viviana', edad: 19, calificacion: 10 },
    { name: 'Wendy', edad: 20, calificacion: 8 },
    { name: 'Gerson', edad: 18, calificacion: 9 },
  ];
  
  function calcularPromedioCalificaciones(alumnos: Alumno[]): number {
    const totalCalificaciones = alumnos.reduce((acumulador, alumno) => acumulador + alumno.calificacion, 0);
    return totalCalificaciones / alumnos.length;
  }
  
  const promedio = calcularPromedioCalificaciones(alumnos);
  console.log(El promedio de calificaciones es: ${promedio});


  import React, { useState } from 'react';
  
  const AcumuladorComponent: React.FC = () => {
    const [acumulador, setAcumulador] = useState<number>(5);
  
    const incrementar = () => {
      setAcumulador(acumulador + 1);
    };
  
    const disminuir = () => {
      setAcumulador(acumulador - 1);
    };
  
    return (
      <div>
        <p>Valor del acumulador: {acumulador}</p>
        <button onClick={incrementar}>Incrementar</button>
        <button onClick={disminuir}>Disminuir</button>
      </div>
    );
  };
  
  export default AcumuladorComponent;