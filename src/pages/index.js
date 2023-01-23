import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  //bg-[#a9a9a954]
  
  return (
    <div className={'h-[92vh] text-black bg-white transition-all ' + inter.className}>
      <div className='z-10 flex justify-between w-full px-4 py-1 sm:py-2'>
        <Image src='/logo.jpg' alt='' width={70} height={70} className='transition-all hover:cursor-pointer rounded-full !opacity-1 hover:scale-110' onClick={() => window.open('https://www.instagram.com/frgpinturas/', '_blank')} />
        <div>
          <ul className={'flex items-center h-full !opacity-1'}>
            <li className='mx-4 transition-all hover:scale-110 hover:cursor-pointer'>Início</li>
            <li className='mx-4 transition-all hover:scale-110 hover:cursor-pointer'>Sobre a FRG</li>
            <li className='mx-4 transition-all hover:scale-110 hover:cursor-pointer'>Contato</li>
          </ul>
        </div>
      </div>
      <div className='flex flex-col justify-center h-[82vh] sm:h-screen bg-white bg-center md:bg-right md:bg-hero bg-hero-mobile top-10'>
        <div className='text-center md:relative sm:bottom-48'>
        <h1 className='my-8 text-5xl text-white !opacity-1 font-bold'>Conheça o Efeito cimento queimado</h1>
        {/* <p className='text-5xl text-white'>Efeito cimento queimado vai transformar o seu lar.</p> */}
        <div>
          <button className='p-2 text-white transition-all bg-green-500 rounded-md hover:scale-110'>SOLICITAR ORCAMENTO</button>
        </div>
        </div>
      </div>
      <div className='h-screen bg-green-600'>
      {/*<ReactCompareSlider
        itemOne={<ReactCompareSliderImage src="/antes.png" alt="Image one" />}
        itemTwo={<ReactCompareSliderImage src="/depois.png" alt="Image two" />}
  />*/}
      </div>
    </div>
  )
}
