import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }: AppProps) {
  return<div className='grid grid-cols-12 gap-6 my-14 px-5 lg:px-48 sm:px-20 md:px-32' >
    <div className=' col-span-12 lg:col-span-3 p-4 bg-white dark:bg-black rounded-2xl'><Sidebar></Sidebar></div>
    <div className=' col-span-12 lg:col-span-9 bg-white  rounded-2xl w-full flex flex-col'>
      <Navbar></Navbar>
      <Component {...pageProps} />
    </div>
  </div>
  
}

export default MyApp
