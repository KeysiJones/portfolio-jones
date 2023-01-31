import { Sidebar } from '@/components/Sidebar'
import { Html, Head, Main, NextScript } from 'next/document'
import Image from 'next/image'
import { Navbar } from '.'

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head />
      <title>FRG PINTURAS - ESPECIALISTA EM CIMENTO QUEIMADO</title>
      <body style={{backgroundColor: "white"}}>
        {/* <Header /> */}
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export const Header = () => (
  <div className='fixed z-10 flex justify-between w-full px-4 py-1 bg-white shadow-md sm:py-2'>
    <div className='flex items-center self-center'>
      <Image src='/logo.jpg' alt='' width={60} height={60} className='transition-all hover:cursor-pointer rounded-full !opacity-1 hover:scale-110' onClick={() => window.open('https://www.instagram.com/frgpinturas/', '_blank')} />
      <p className='relative sm:text-xl font-extrabold text-[#49473a] top-[.65rem]'>PINTURAS E DECORAÇÕES</p>
    </div>
    <Sidebar right className="sidebar-menu" />
    <Navbar />
  </div>
)
