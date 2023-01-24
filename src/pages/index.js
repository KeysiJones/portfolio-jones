import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import instagramLogo from '../../public/insta.svg'
import whatsappLogo from '../../public/whats.svg'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  //bg-[#a9a9a954]

  return (
    <div className={'h-[92vh] text-black bg-white transition-all ' + inter.className}>
      <div className='fixed z-10 flex justify-between w-full px-4 py-1 bg-white shadow-md sm:py-2'>
        <Image src='/logo.jpg' alt='' width={60} height={60} className='transition-all border-2 border-black hover:cursor-pointer rounded-full !opacity-1 hover:scale-110' onClick={() => window.open('https://www.instagram.com/frgpinturas/', '_blank')} />
        <div>
          <ul className={'flex items-center h-full !opacity-1'}>
            <li className='mx-2 transition-all hover:scale-110 hover:cursor-pointer' onClick={() => document.getElementById("hero-section").scrollIntoView({ behavior: 'smooth' })}>Início</li>
            <li className='mx-2 transition-all hover:scale-110 hover:cursor-pointer'>Sobre a FRG</li>
            <li className='mx-2 transition-all hover:scale-110 hover:cursor-pointer'>Contato</li>
          </ul>
        </div>
      </div>
      <div id='hero-section' className='flex flex-col justify-center h-[80vh] sm:h-screen bg-white bg-top md:bg-top md:bg-hero bg-hero-mobile top-10'>
        <div className='mx-8 text-left md:text-center md:relative bottom-7'>
          <h1 className='mt-8 mb-4 text-5xl text-white !opacity-1 font-bold'>Efeito cimento queimado</h1>
          <p className='mb-4 text-2xl text-white'>O Efeito decorativo que vai <b>transformar</b> o seu lar.</p>
          <div>
            <button onClick={() => document.getElementById("antes-e-depois").scrollIntoView({ behavior: 'smooth' })} className='p-2 font-bold text-white transition-all bg-gray-900 rounded-md sm:px-8 sm:text-xl hover:bg-gray-500 sm:hover:scale-110'>CONHEÇA NOSSOS PROJETOS</button>
          </div>
        </div>
      </div>
      <div id='antes-e-depois' className='bg-white md:flex'>
        <div className='self-center max-w-4xl p-8 md:px-24'>
          <h2 className='text-4xl font-bold'>TRANSFORME O SEU AMBIENTE</h2>
          <p className='mt-4 text-2xl font-light'>O efeito cimento queimado transforma um ambiente sem graca em um lugar <b>aconchegante e moderno.</b></p>
          <p className='mt-4 text-2xl'><b>Arraste a foto</b> e veja o antes e o depois de um dos nossos projetos.</p>
        </div>
        <div className='self-center mx-2 rounded-md'>
          {<ReactCompareSlider
            className='md:max-w-[35vw] mx-2 my-20 rounded-lg'
            itemOne={<ReactCompareSliderImage src="/antes.png" alt="Image one" />}
            itemTwo={<ReactCompareSliderImage src="/depois.png" alt="Image two" />}
          />}
        </div>
      </div>
      <div className='text-center'>
        <h2 className='text-4xl font-bold'>Contato</h2>
      </div>
      <div className='flex justify-center p-8 bg-white'>
        <Image src={instagramLogo} width={65} height={65} alt='' className='mx-2' />
        <Image src={whatsappLogo} width={65} height={65} alt='' className='mx-2' />
      </div>
    </div>
  )
}
