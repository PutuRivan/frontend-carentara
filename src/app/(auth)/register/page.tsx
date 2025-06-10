import RegisterForm from '@/components/form/register-form'
import Link from 'next/link'
import React from 'react'

export default function Register() {
	return (
		<div className='grid place-items-center h-screen'>
			<div className='bg-gray-300 rounded-lg p-5 w-[400px]'>
				<h1 className='text-center text-3xl font-bold my-5'>Register</h1>
				<RegisterForm />
				<div className='pt-3'>
					Already have an account?&nbsp;
					<Link href="/login" className='text-blue-500 underline'>Login</Link>
				</div>
			</div>
		</div>
	)
}
