import Layout from '@/components/Layout'
import React from 'react'


const Contact = () => {
  return (
    <Layout title="contact">

   
    <div name='contact' className='flex justify-center text-3xl py-8 bg-red-500 text-white'>
        <form method='POST' action='https://getform.io/f/fe67a61c-f025-48e1-a73b-bcd7c7066ec4' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-red-600 text-gray-300'>
                    Contact
                </p>
                <p className='text-gray-300 py-4'>Submit the form below to contact us! -</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type='text' placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type='email' placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name='message' rows='10' placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'> Send </button>
        </form>
    </div> 
    </Layout>
  )
}

export default Contact