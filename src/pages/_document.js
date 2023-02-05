import { Sidebar } from '@/components/Sidebar'
import { Html, Head, Main, NextScript } from 'next/document'
import { Navbar } from '.'

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head />
      <meta name="theme-color" content="#5c5ade" />
      <title>Jones Fernandes - Desenvolvedor De Sites</title>
      <body style={{backgroundColor: "white"}}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export const Header = () => (
  <div className='fixed z-10 flex justify-between w-full py-1 bg-white shadow-md sm:py-2'>
    <div className='flex items-center self-center'>
      <p className='relative sm:text-xl font-extrabold text-[#49473a] left-32 '>JONES FERNANDES</p>
    </div>
    <Sidebar right className="sidebar-menu" />
    {/* <Navbar /> */}
  </div>
)
