import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import gmailIcon from '../../public/gmail.svg'
import phoneIcon from '../../public/phone.svg'
import { Gallery } from "react-grid-gallery";
import { InstagramEmbed } from 'react-social-media-embed';

const inter = Inter({ subsets: ['latin'] })
const images = [
  {
    src: "/parede.webp",
    width: 200,
    height: 212,
  },
  {
     src: "/banheiro.webp",
     width: 1000,
     height: 1000,
     /*tags: [
      { value: "Cimento Queimado", title: "Cimento Queimado  " },
      { value: "Banheiro", title: "Banheiro" },
   ],*/
     //isSelected: true,
     //caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src: "/cozinha-geladeira.webp",
    width: 200,
    height: 212,
  },
  {
     src: "/cozinha.webp",
     width: 200,
     height: 212,
  },
  {
    src: "/sala-de-estar.webp",
    width: 200,
    height: 212,
 },
 {
  src: "/living.webp",
  width: 200,
  height: 212,
},
{
  src: "/banheiro-escuro.webp",
  width: 200,
  height: 212,
},
{
  src: "/area.webp",
  width: 200,
  height: 212,
},
];

export default function Home() {
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 900;
  const instagramProps = {
    url: "https://www.instagram.com/p/Cmguz-Iu8QO/",
    captioned: true,
    width: 500,
    height: 720
  }

  return (
    <div className={'h-[92vh] text-black bg-white transition-all ' + inter.className}>
      <div className='fixed z-10 flex justify-between w-full px-4 py-1 bg-white shadow-md sm:py-2'>
        <Image src='/logo.jpg' alt='' width={60} height={60} className='transition-all hover:cursor-pointer rounded-full !opacity-1 hover:scale-110' onClick={() => window.open('https://www.instagram.com/frgpinturas/', '_blank')} />
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
        <div className='self-center max-w-4xl p-8 md:px-12'>
          <h2 className='text-4xl font-bold'>TRANSFORME O SEU AMBIENTE</h2>
          <p className='mt-4 text-2xl font-light'>O efeito cimento queimado transforma um ambiente sem graça em um lugar <b>aconchegante e moderno.</b></p>
          <p className='mt-4 text-2xl'><b>Arraste a foto</b> e veja o antes e o depois de um dos nossos projetos.</p>
          <div className='mt-12'>
            <button 
              onClick={() => window.open('https://api.whatsapp.com/send/?phone=5551991549280&text=Ol%C3%A1%2C+gostaria+de+agendar+um+Or%C3%A7amento+Gratuito%21&type=phone_number&app_absent=0bit.ly/whatsapp-frgpinturas', '_blank')}
              className='p-2 font-bold text-white transition-all bg-gray-900 rounded-md sm:px-8 sm:text-xl hover:bg-gray-500 sm:hover:scale-110'
            >
                SOLICITAR ORÇAMENTO GRATUITO
            </button>
          </div>
        </div>
        <div className='self-center mx-2 rounded-md'>
          {<ReactCompareSlider
            position={43}
            className='md:max-w-[35vw] mx-2 sm:my-20 my-10 rounded-lg'
            itemOne={<ReactCompareSliderImage src="/antes.webp" alt="Image one" />}
            itemTwo={<ReactCompareSliderImage src="/depois.webp" alt="Image two" />}
          />}
        </div>
      </div>
      <div className='text-center bg-white sm:mx-5'>
        <h3 className='px-2 my-12 text-4xl font-bold text-black'>
          Sonhos Já Realizados
        </h3>
      <Gallery images={images} rowHeight={400} />
      </div>
      <div className='flex flex-col sm:justify-between sm:flex-row sm:m-28'>
        <div className='flex flex-col self-center mx-6 my-12 sm:relative sm:max-w-2xl sm:bottom-20'>
          <h2 className='text-3xl font-bold sm:text-4xl'>Acompanhe o nosso trabalho</h2>
          <p className='mt-4 text-2xl font-light'>Diariamente compartilhamos o nosso trabalho no Instagram.</p>
          <p className='mt-4 text-2xl font-light'><b>Siga o nosso perfil</b> para se manter atualizado e receber as nossas novidades em primeira mão.</p>
          <p className='mt-4 text-2xl font-light'>Você vai se apaixonar 😍</p>
        </div>
        <div className='flex justify-center'>   
          <InstagramEmbed url="https://www.instagram.com/p/CnzDaTcObrk/" width={500} height={785} captioned/>
        </div>
      </div>
      <div className='my-12 text-center'>
        <button
          onClick={() => window.open('https://api.whatsapp.com/send/?phone=5551991549280&text=Ol%C3%A1%2C+gostaria+de+agendar+um+Or%C3%A7amento+Gratuito%21&type=phone_number&app_absent=0bit.ly/whatsapp-frgpinturas', '_blank')}
          className='p-2 font-bold text-white transition-all bg-gray-900 rounded-md sm:px-8 sm:text-xl hover:bg-gray-500 sm:hover:scale-110'
        >
          SOLICITAR ORÇAMENTO GRATUITO
        </button>
      </div>
      <div className='flex pt-8 text-center bg-black'>
        <div className='flex flex-col justify-center w-full'>
          <div className='flex flex-col items-center self-center'>
            <p className='mx-4 text-2xl font-bold text-white'>FRG PINTURAS E DECORAÇÕES</p>
            {/*<Image src='/logo.jpg' alt='' width={70} height={70} className='ml-4 transition-all border-2 border-black hover:cursor-pointer rounded-full !opacity-1 hover:scale-110' onClick={() => window.open('https://www.instagram.com/frgpinturas/', '_blank')} />*/}
            <p className='mx-4 text-white'>CNPJ 45.634.926/0001-77</p>
          </div>
          <div>
            {/*<h2 className='text-4xl font-bold text-white'>Fale conosco</h2>*/}
            <div className='flex justify-center py-8 bg-black'>
              <Image onClick={() => window.open('https://www.instagram.com/frgpinturas/', '_blank')}
                src='/insta-black.svg'
                width={70}
                height={70}
                alt=''
                className='mx-4 hover:cursor-pointer'
              />
              <Image onClick={() => window.open('https://api.whatsapp.com/send/?phone=5551991549280&text=Ol%C3%A1%2C+gostaria+de+agendar+um+Or%C3%A7amento+Gratuito%21&type=phone_number&app_absent=0bit.ly/whatsapp-frgpinturas', '_blank')}
                src='/whats-black.svg'
                width={70}
                height={70}
                alt=''
                className='mx-4 hover:cursor-pointer'
              />
            </div>
          </div>
        </div>
        {/*<div className='flex justify-center mt-2'>
          <a href="mailto:frgpinturas@gmail.com">
            <Image
              src={gmailIcon}
              width={28}
              height={28}
              alt=''
              className='mx-4 hover:cursor-pointer'
            />
          </a>
          <p className='text-xl text-white'>frgpinturas@gmail.com</p>
        </div>*/}
        {/*<div className='flex justify-center mt-2'>
          <a href="tel:123-456-7890">
          <Image
              src={phoneIcon}
              width={28}
              height={28}
              alt=''
              className='mx-4 hover:cursor-pointer'
            />
          </a>
          <p className='text-xl text-white'>(51) 991549280</p>
        </div>*/}
      </div>
    </div>
  )
}
