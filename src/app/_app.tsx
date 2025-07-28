import React from 'react'
import { useRouter } from 'next/navigation'
import withProtectedRoute from './HOC/ProtectedRoute'

const App = ({Component,pageProps}:any) => {
    const login = false
    const router = useRouter()
  return (
    withProtectedRoute(<Component {...pageProps}/>) 
  )
}

export default App