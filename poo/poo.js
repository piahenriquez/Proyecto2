// Clase Encuesta
class Encuesta {
  constructor(pregunta, opciones) {
    this.pregunta = pregunta;
    this.opciones = opciones; // Array de strings
    this.votos = new Array(opciones.length).fill(0); // Array de conteo de votos
    this.respuestaUsuario = null; // Se completa cuando el usuario responde
  }

  // Método para votar por una opción
  votar(opcionIndex) {
    if (opcionIndex < 0 || opcionIndex >= this.opciones.length) {
      console.log("Opción inválida. Intenta de nuevo.");
      return false;
    }
    // Incrementar el conteo de votos para la opción seleccionada
    this.votos[opcionIndex]++;
    this.respuestaUsuario = this.opciones[opcionIndex]; // Guardar la respuesta del usuario
    return true;
  }

  mostrarResultados() {
    console.log(`Pregunta: ${this.pregunta}`);
    console.log(`Tu respuesta: ${this.respuestaUsuario}`);
    console.log("----------------------------------------------------------");
  }
}

// Clase SistemaEncuestas
class SistemaEncuestas {
  constructor() {
    this.encuestas = []; // Array para almacenar las encuestas
  }

  crearEncuesta(cantidad) {
    alert("Bienvenido, crea tus encuestas.");
    for (let i = 0; i < cantidad; i++) {
      const pregunta = prompt(`Escribe la pregunta ${i + 1}:`);
      const opciones = [];

      for (let j = 0; j < 4; j++) {
        const opcion = prompt(`Opción ${j + 1} para la pregunta ${i + 1}:`);
        opciones.push(opcion);
      }

      if (pregunta === null || opciones.some(opcion => opcion === null)) {
        alert("Encuesta cancelada.");
        return;
      }

      const encuesta = new Encuesta(pregunta, opciones);
      this.encuestas.push(encuesta);
    }
  }

  votarTodas() {
    this.encuestas.forEach((encuesta) => {
      let mensaje = `${encuesta.pregunta}\n`;
      encuesta.opciones.forEach((opcion, index) => {
        mensaje += `${index}: ${opcion}\n`;
      });

      const eleccion = parseInt(
        prompt(mensaje + "Escribe el número de tu opción:")
      );
      if (!isNaN(eleccion) && eleccion >= 0 && eleccion < encuesta.opciones.length) {
        encuesta.votar(eleccion);
      } else {
        alert("Opción inválida");
      }
    });
  }

  mostrarResultados() {
    this.encuestas.forEach((encuesta) => {
      encuesta.mostrarResultados();
      console.log("--------------------------------------------------");
    });
  }
}

// Ejecutar
const gestor = new SistemaEncuestas();
gestor.crearEncuesta(8);
gestor.votarTodas();
gestor.mostrarResultados();
