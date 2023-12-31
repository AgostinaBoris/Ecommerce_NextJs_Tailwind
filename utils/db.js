import mongoose from "mongoose";

const connection = {};
// objeto connection que se utilizará para almacenar el estado de la conexión a la base de datos.

async function connect() {
  // Define una función asincrónica llamada connect que establece la conexión con la base de datos MongoDB.
  if (connection.isConnected) {
    console.log("already connected");
    return;
    // se verifica si ya hay una conexión establecida
  }
  if (mongoose.connections.length > 0) {
    // se verifica si hay alguna conexión de Mongoose ya existente.
    connection.isConnected = mongoose.connections[0].readyState;
    // Se guarda el estado de la primera conexión en connection.isConnected.
    if (connection.isConnected === 1) {
      // significa que la conexión existe y está lista para su uso. Se muestra un mensaje en la consola y se devuelve la función para finalizar el proceso de conexión.
      console.log("use previous connection");
      return;
    }
    // Si no hay conexión existente o si el estado de la conexión es diferente de 1, se desconecta de todas las conexiones existentes llamando a mongoose.disconnect().
    await mongoose.disconnect();
  }
  // se establece una nueva conexión
  const db = await mongoose.connect(process.env.MONGODB_URI);
  // process.env.MONGODB_URI es la URL de conexión de MongoDB que se obtiene de las variables de entorno.
  console.log("new connection");
  // Después de establecer la nueva conexión, se guarda el estado de la conexión en connection.isConnected para su uso futuro.
  connection.isConnected = db.connections[0].readyState;
}

async function disconnect() {
  // Define una función asincrónica llamada disconnect que se utiliza para desconectar de la base de datos.
  if (connection.isConnected) {
    // se verifica si hay una conexión establecida
    if (process.env.NODE_ENV === "production") {
      // Si el entorno de ejecución es de producción (process.env.NODE_ENV === 'production'), se desconecta y se establece connection.isConnected como falso. Esto se hace para asegurarse de que la aplicación se desconecte de la base de datos en un entorno de producción.
      await mongoose.disconnect();
      connection.isConnected = false;
    } else {
      console.log("not disconnected");
    }
  }
}
function convertDocToObj(doc) {
  // función que convierte un documento de Mongoose en un objeto JavaScript plano.
  // se convierten los valores de _id, createdAt y updatedAt del documento en cadenas de texto utilizando el método toString()  para facilitar el manejo y la manipulación de los datos del documento.
  doc._id = doc._id.toString();
  doc.createdAt = doc.createdAt.toString();
  doc.updatedAt = doc.updatedAt.toString();
  return doc;
}

const db = { connect, disconnect, convertDocToObj };
export default db;
// Crea un objeto llamado db que contiene las funciones connect, disconnect y convertDocToObj.
// export default db;: Exporta el objeto db como el valor predeterminado del módulo, lo que permite importar estas funciones en otros archivos y utilizarlas para conectar y desconectar la base de datos MongoDB.
