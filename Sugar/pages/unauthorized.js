import React from 'react'
import Layout from '@/components/Layout'
import { useRouter } from 'next/router';



export default function Unauthorized() {
    // Componente se utiliza para mostrar un mensaje de error cuando un 
    // usuario intenta acceder a la pagina sin los permisos necesarios.
    const router = useRouter();
    const { message } = router.query;

  return (
    <Layout title="Unauthorized Page">
        <h1 className='text-xl'>Access Denied</h1>
        {message && <div className='mb-4 text-red-500'>{message}</div>}
    </Layout>
  );
}
