import LoginForm from '@/components/form/login-form'
import Link from 'next/link'
import React from 'react'

export default function Login() {
  return (
    <div className='grid place-items-center h-screen'>
      <div className='bg-gray-300 rounded-lg p-5 w-[400px]'>
        <h1 className='text-center text-3xl font-bold my-5'>Login</h1>
        <LoginForm />
        <div className='pt-3'>
          don&apos;t have an account?&nbsp;
          <Link href="/register" className='text-blue-500 underline'>Register</Link>
        </div>
      </div>
    </div>
  )
}
