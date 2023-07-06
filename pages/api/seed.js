import db from '@/utils/db';
import User from '@/models/User';
import data from '@/utils/data';
import Product from '@/models/Product';

// Controlador que realiza un llenado inicial de datos en la bd.
// Elimina los datos existentes y la llena con nuevos datos de prueba para las colecciones de usuarios y productos. se usa para establecer un estado inicial de bd antes de ejecutar la app.

const handler = async (req, res) => {
    await db.connect();
    await User.deleteMany();
    await User.insertMany(data.users);
    await Product.deleteMany();
    await Product.insertMany(data.products);
    await db.disconnect();
    res.send({message: 'seeded successfully'});
}
export default handler;