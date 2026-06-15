import { useParams } from 'react-router-dom'; 
{/* Aquí le dice a tu proyecto: "Necesito usar la función useParams 
que viene dentro del paquete react-router-dom".*/ }
{/* useParams es un hook que te permite acceder a los parámetros de la URL*/}
 

function CitaDetalle() {
  const { id } = useParams(); {/* Activa la herramienta para leer la barra de direcciones. Extrae el número o texto que esté al final de la URL (por ejemplo, el 123 de /cita/123) y lo guarda en una variable llamada id. */}
  return (
    <div>
      <h2>Detalles de la Cita</h2>
      <p>ID de la cita: {id}</p>
    </div>
  );
}

export default CitaDetalle;
