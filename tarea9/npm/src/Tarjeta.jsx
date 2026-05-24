// function Tarjeta() 
  // - Definimos la información estática de la tarjeta-
  //const nombre = "Itzel Gomez";
  //const profesion = "Desarrolladora Web";
  //const mensaje = "¡Bienvenido a mi tarjeta de presentación!";
  // Para hacer la tarjeta más dinámica, podemos usar props, reemplazamoa las variables fijas por propiedades de la funcion
function Tarjeta({nombre, profesion, mensaje}){
    return(
        <div style={{ border: '1px solid #4e0bc1', padding: '20px', width: '300px', textAlign: 'center', borderRadius: '10px', backgroundColor: '#ebf19f', margin: '20px auto' }}>
            <h2>{nombre}</h2>
            <h4>{profesion}</h4>
            <p>{mensaje}</p>
        </div>
    );
}



    
 //* JSX permite incrustar variables en HTML utilizando llaves {} 


export default Tarjeta;