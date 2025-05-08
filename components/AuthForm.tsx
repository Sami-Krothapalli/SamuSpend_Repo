'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'


import {z} from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

const formObject = z.object({
    username: z.string().min(2, {
        message: 'Username must be at least 2 character long'
    })
})

const AuthForm = ({ type }: {type: string}) => {
    const [user, setUser] = useState(null)
  return (
    <section className='auth-form'>
        <header className='flex flex-col gap-5 md:gap-8'>
            <Link href='/' className= 'cursor-pointer flex items-center gap-1'>
                <Image
                    src='/icons/logo.svg'
                    width={34}
                    height={34}
                    alt='SamuSpend Logo'>
                </Image>
                <h1 className='text-26 font-ibm-plex-serif font-bold text-black-1'>SamuSpend</h1>
            </Link>
            <div className='flex flex-col gap-1 md:gap-3'>
                <h1 className='text-24, font-semibold text-gray-900 lg:text-36'>
                    {user
                    ? 'Link Account'
                    : type === 'sign-in'
                        ? 'Sign-In'
                        : 'Sign-Up'}
                </h1>
                <p className='text-16 font-normal text-gray-600 '>
                    {user
                    ? 'Link your bank account to get started'
                    : 'Please enter your credentials to continue'}
                </p>

            </div>
        </header>
        {user ? (
            <div>
                {/* PLAID Add your form for linking account here */}
            </div>
        ): (
            <>
            FORM
            </>
        )}
    </section>
  )
}

export default AuthForm