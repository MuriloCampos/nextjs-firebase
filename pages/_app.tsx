import '../styles/globals.css'
import { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast'

import { useUserData } from '../lib/hooks';
import { UserContext } from '../lib/context';
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }: AppProps) {
  const userData = useUserData();

  return (
    <UserContext.Provider value={userData}>
      <Navbar />
      <Component {...pageProps} />
      <Toaster />
    </UserContext.Provider>
  )
}

export default MyApp
