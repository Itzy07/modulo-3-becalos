// Simulación de una Cafetería Asincrónica

const pedidosEnProgreso = [];

// 1. Función que simula la preparación (Manejo de Promesas)
function prepararCafe(pedido) {
    return new Promise((resolve) => {
        console.log(`[Barista]: Empezando a preparar: ${pedido.nombre}...`);
        
        // Simulamos el tiempo de preparación con setTimeout
        setTimeout(() => {
            pedido.estado = 'Completado';
            resolve(pedido);
        }, pedido.tiempo); 
    });
}

// 2. Función principal para procesar pedidos (Async/Await)
async function procesarPedido(id, nombre) {
    const tiempoSimulado = Math.floor(Math.random() * 3000) + 2000; // Entre 2 y 5 seg
    
    const nuevoPedido = {
        id: id,
        nombre: nombre,
        estado: 'En Proceso',
        tiempo: tiempoSimulado
    };

    pedidosEnProgreso.push(nuevoPedido);
    actualizarInterfaz();

    // Esperamos a que la promesa se resuelva sin bloquear el hilo principal
    const pedidoTerminado = await prepararCafe(nuevoPedido);
    
    console.log(`\n✅ ¡LISTO! El pedido #${pedidoTerminado.id} (${pedidoTerminado.nombre}) está listo.`);
    actualizarInterfaz();
}

// 3. Simulación de la Interfaz de Usuario
function actualizarInterfaz() {
    console.clear();
    console.log("--- ☕ ESTADO DE LA CAFETERÍA ---");
    console.table(pedidosEnProgreso.map(p => ({
        ID: p.id,
        Producto: p.nombre,
        Estado: p.estado === 'Completado' ? '✅ Completado' : '⏳ En Proceso'
    })));
    console.log("\n(Recibiendo nuevos pedidos automáticamente...)\n");
}

// 4. Generador de flujo de clientes
function simularEntradaClientes() {
    const menu = ['Espresso', 'Cappuccino', 'Latte', 'Mocaccino', 'Té Chai'];
    let contadorId = 1;

    // Llega un cliente nuevo cada 3 segundos
    const intervalo = setInterval(() => {
        const bebidaAleatoria = menu[Math.floor(Math.random() * menu.length)];
        procesarPedido(contadorId++, bebidaAleatoria);

        if (contadorId > 5) {
            clearInterval(intervalo); // Detenemos la simulación tras 5 pedidos
        }
    }, 3000);
}

// Iniciar la magia
simularEntradaClientes();
