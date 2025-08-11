import React, { ReactNode } from 'react'

type AuthLayoutProps = {
    children: ReactNode;
  };

function AuthLayout({children}:AuthLayoutProps) {
  return (
    <div className='flex justify-center pt-20'>
        {children}
    </div>
  )
}

export default AuthLayout