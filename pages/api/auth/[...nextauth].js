import bcryptjs from 'bcryptjs';
// este modulo se utiliza para comparar contraseñas cifradas.
import NextAuth from "next-auth/next";
// Este módulo proporciona la funcionalidad de autenticación para Next.js.
import CredentialsProvider from 'next-auth/providers/credentials';
// Este proveedor permite la autenticación basada en credenciales de usuario, como el correo electrónico y la contraseña.
import User from "@/models/User";
import db from "@/utils/db";
// Este objeto contiene funciones para conectar y desconectar la base de datos.



// Codigo para configurar la autenticación de NextAuth usando el proveedor de credenciales CredentialsProvider y el metodo de autenticacion JSON Web Token
export default NextAuth({
    // Exporta por defecto una instancia de configuración de NextAuth.
    session: {
        strategy: 'jwt',
    },
    // Configura la estrategia de sesión como "jwt" (JSON Web Token). Esto indica que se utilizarán tokens JWT para manejar las sesiones de autenticación.
    callbacks: {
        // Define callbacks para manipular los tokens y las sesiones.
        async jwt({ token, user }){
            // Este callback se llama al firmar y verificar tokens JWT. Aquí se agrega el campo _id y isAdmin al token JWT si existen en el objeto user.
            if (user?._id) token._id = user._id;
            if (user?.isAdmin) token.isAdmin = user.isAdmin;
            return token;
        },
        async session({ session, token }) {
            // Este callback se llama para crear el objeto de sesión cuando un usuario inicia sesión. Aquí se agrega el campo _id y isAdmin al objeto de sesión si existen en el token JWT.
            if (token?._id) session.user._id = token._id;
            if (token?.isAdmin) session.user.isAdmin = token.isAdmin;
            return session;
        },
    },
    providers: [
        // Define los proveedores de autenticación para NextAuth.
        CredentialsProvider({
            // Configura el proveedor de credenciales.
            async authorize(credentials){
                // Este callback se llama al intentar autenticar a un usuario utilizando credenciales 

                // Aquí se realiza la verificación de las credenciales en la base de datos.
                await db.connect();
                // Conecta a la base de datos antes de realizar la consulta.
                const user = await User.findOne({
                    // Busca en la colección de usuarios el usuario con el correo electrónico proporcionado en las credenciales.
                    email: credentials.email,
                });
                await db.disconnect();
                // Desconecta de la base de datos después de realizar la consulta.
                if (user && bcryptjs.compareSync(credentials.password, user.password)) {
                    // Verifica si se encuentra un usuario y si la contraseña proporcionada coincide con la contraseña almacenada en la base de datos utilizando bcryptjs.compareSync(). Si la verificación es exitosa, se devuelve un objeto con la información del usuario que se almacenará en el token JWT y se utilizará en la sesión.
                    return {
                        _id: user._id,
                        name: user.name,
                        email: user.email,
                        image: 'f',
                        isAdmin: user.isAdmin,
                    };
                }
                throw new Error('Invalid email or password');
            }
        })
    ]
}); 