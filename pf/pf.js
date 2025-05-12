const crearEncuestas = (cantidad) => {
  alert("¡Bienvenido! Primero escribe 8 encuestas.");
  const encuestas = [];

  for (let i = 0; i < cantidad; i++) {
    const pregunta = prompt(`Escribe la pregunta ${i + 1}:`);
    const opciones = [];
    const votos = [];

    for (let j = 0; j < 4; j++) {
      const opcion = prompt(
        `Escribe la opción ${j + 1} para la pregunta ${i + 1}:`
      );
      opciones.push(opcion);
      votos.push(0);
    }

    const encuestaObj = {
      pregunta,
      opciones,
      votos,
      respuestaUsuario: null,
    };

    encuestas.push(encuestaObj);
  }

  return encuestas;
};

// Función para mostrar la pregunta y votar
const votar = (encuestas) => {
  if (!Array.isArray(encuestas)) {
    throw new Error("Las encuestas deben ser un arreglo");
  }
  encuestas.forEach((encuesta) => {
    let mensaje = `${encuesta.pregunta}\n`;
    encuesta.opciones.forEach((opcion, index) => {
      mensaje += `${index}: ${opcion}\n`;
    });

    const eleccion = parseInt(
      prompt(mensaje + "Escribe el número de tu opción:")
    );
    if (eleccion >= 0 && eleccion < encuesta.opciones.length) {
      encuesta.votos[eleccion]++;
      encuesta.respuestaUsuario = encuesta.opciones[eleccion];
    } else {
      alert("Opción inválida");
    }
  });
};

// Función para mostrar los resultados
const mostrarResultados = (encuestas) => {
  encuestas.forEach((encuesta, index) => {
    console.log(`Pregunta ${index + 1}: ${encuesta.pregunta}`);
    console.log(`Tu respuesta: ${encuesta.respuestaUsuario}`);
    console.log("---------------------------------------------------------");
  });
};

// Ejecutar la encuesta
const encuestas = crearEncuestas(8);
votar(encuestas);
mostrarResultados(encuestas);
