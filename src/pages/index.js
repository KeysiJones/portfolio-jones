import Image from 'next/image';
import { Inter } from '@next/font/google';
import { FadeInWrapper } from '@/components/FadeInWrapper';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [height, setHeight] = useState(100);

  const handleScroll = () => {
    const scrollTop =
      document.body.scrollTop || document.documentElement.scrollTop;
    const newHeight = 120 + scrollTop; // Adjust the increment as desired
    setHeight(newHeight);
  };

  useEffect(() => {
    setInterval(() => {
      if (document.querySelectorAll('.loading')[0]) {
        document.querySelectorAll('.loading')[0].classList.remove('loading');
      }
    }, 2000);

    document.querySelector('body').addEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={'text-black bg-white transition-all flex' + inter.className}
    >
      <FadeInWrapper>
        <div
          id='hero-section'
          className='flex flex-col justify-center p-8 text-[#262d3e] lg:py-28 lg:flex relative'
        >
          {/* <div className='absolute self-center w-2 h-screen bg-gray-200 top-2'>
            <div
              style={{
                height,
                backgroundColor: "rgba(176, 176, 176, 0.38);",
                maskImage:
                  'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 8%, rgba(0,0,0,1) 92%, rgba(0,0,0,0) 100%);'}}
              className='relative self-center w-2 h-8 ease-linear'
            >
              <div className='self-center w-2 h-full rounded-full'></div>
            </div>
          </div> */}
          <div className='flex flex-col lg:flex-row'>
            <div className='max-w-4xl pt-8 m-auto sm:pt-0 lg:px-12'>
              <div className='flex'>
                <Image
                  src='/dev.svg'
                  width={80}
                  height={80}
                  alt='dev icon'
                  className='mb-1'
                />
              </div>
              <h2 className='text-5xl font-black fadeIn sm:text-6xl'>
                Jones Fernandes
              </h2>
              <div className='my-12 text-2xl sm:text-3xl bg-[#262d3e] sm:bg-inherit rounded-md text-white sm:text-[#262d3e] text-center'>
                <p className='pt-2 text-gray-400 sm:[display:none;]'>
                  README.md
                </p>
                <p className='p-6 font-thin text-left sm:p-0'>
                  Oi, Eu sou o Jones, desenvolvedor web focado em criar software
                  que gera valor para grandes empresas.
                </p>
              </div>
              <div className='[display:none] lg:block m-auto'>
                <button
                  onClick={() =>
                    window.open(
                      'https://api.whatsapp.com/send/?phone=5551993667706',
                      '_blank'
                    )
                  }
                  className='p-2 font-bold text-white transition-all bg-[#262d3e] rounded-md sm:px-8 text-xl sm:hover:scale-110 px-8'
                >
                  QUERO SABER MAIS
                </button>
              </div>
            </div>
            <div className='relative self-center max-w-md m-auto sm:block sm:left-0 left-2'>
              <Image
                alt=''
                src='/jones-cut-perfect.jpeg'
                width={400}
                height={400}
                className='rounded-full'
              />
              <div className='absolute loading'></div>
            </div>
            <div className='mt-12 lg:[display:none;] text-center relative'>
              <button
                onClick={() =>
                  window.open(
                    'https://api.whatsapp.com/send/?phone=5551993667706',
                    '_blank'
                  )
                }
                className='p-2 font-bold text-white transition-all bg-[#262d3e] rounded-md sm:px-8 text-xl sm:hover:scale-110 px-8'
              >
                QUERO SABER MAIS
              </button>
            </div>
          </div>
          <div className='self-center max-w-md m-auto mt-24 rounded-md'>
            <Image
              alt=''
              src='/arrow-down.svg'
              width={80}
              height={80}
              className='mx-auto bg-white rounded-full hover:cursor-pointer animate-bounce'
              onClick={() =>
                document
                  .querySelector('#sobre-mim')
                  .scrollIntoView({ behavior: 'smooth' })
              }
            />
          </div>
        </div>
      </FadeInWrapper>
      <div
        id='sobre-mim'
        className='py-12 justify-center text-white lg:flex bg-[#262d3e] sm:flex-col'
      >
        <FadeInWrapper>
          <div className='flex flex-col my-auto sm:flex-row'>
            <div className='max-w-3xl px-4 m-auto lg:relative'>
              <h2 className='text-5xl font-extrabold sm:text-6xl'>Sobre Mim</h2>
              <p className='mt-12 text-3xl font-extralight'>
                Sou um desenvolvedor de software com três anos de experiência, especializado no desenvolvimento de sites e sistemas web.
              </p>
              <p className='mt-8 text-3xl font-extralight'>
                Além do trabalho, me dedico a hobbies como leitura, viagens,
                tempo com a família, caminhadas e exercicios fisicos. Possuo habilidades
                sólidas em HTML, CSS, JavaScript e bibliotecas como React,
                TailwindCSS e Styled Components. Busco constantemente
                aprimorar minhas habilidades e oferecer soluções inovadoras aos
                meus clientes.
              </p>
              <p className='mt-8 text-3xl font-extralight'>
                Se você procura um desenvolvedor apaixonado e comprometido,
                eu estou pronto para enfrentar novos desafios e contribuir
                para o sucesso do seu projeto.
              </p>
              <div className='mt-12 [display:none] lg:block m-auto'>
                <button
                  onClick={() =>
                    window.open(
                      'https://api.whatsapp.com/send/?phone=5551993667706',
                      '_blank'
                    )
                  }
                  className='p-2 font-bold text-gray-700 transition-all bg-[#F7DE1F] rounded-md sm:px-8 text-xl sm:hover:scale-110 px-8'
                >
                  ENTRAR EM CONTATO
                </button>
              </div>
            </div>
            <div className='mt-12 lg:[display:none;] text-center relative'>
              <div className='self-center max-w-md m-auto rounded-md'>
                {
                  <Image
                    alt=''
                    src='/laptop.png'
                    width={400}
                    height={400}
                    className='relative scale-150 rounded-full sm:block left-6'
                  />
                }
              </div>
              <button
                onClick={() =>
                  window.open(
                    'https://api.whatsapp.com/send/?phone=5551993667706',
                    '_blank'
                  )
                }
                className='p-2 mt-24 font-bold text-gray-700 transition-all bg-[#F7DE1F] rounded-md sm:px-8 text-xl sm:hover:scale-110 px-8'
              >
                ENTRAR EM CONTATO
              </button>
            </div>
            <div className='[display:none;] lg:block self-center max-w-md m-auto rounded-md lg:relative lg:bottom-10'>
              {
                <Image
                  alt=''
                  src='/laptop.png'
                  width={400}
                  height={400}
                  className='relative scale-150 rounded-full sm:block left-6'
                />
              }
            </div>
          </div>
          <div className='self-center max-w-md m-auto mt-24 rounded-md'>
            <Image
              alt=''
              src='/arrow-down.svg'
              width={80}
              height={80}
              className='mx-auto bg-[gold] rounded-full hover:cursor-pointer animate-bounce'
              onClick={() =>
                document
                  .querySelector('#projetos')
                  .scrollIntoView({ behavior: 'smooth' })
              }
            />
          </div>
        </FadeInWrapper>
      </div>
      <div id='projetos' className='lg:h-[90vh] bg-white'>
        <FadeInWrapper>
          <section className='flex flex-col justify-center w-full gap-8'>
            <h2 className='mt-20 text-5xl font-extrabold text-center text-[#262d3e] sm:text-6xl'>
              Projetos Realizados
            </h2>
            <section className='flex flex-col items-center justify-center w-full gap-8 mx-auto lg:flex-row'>
              <Link href='https://frgpinturasedecoracoes.com/'>
                <Image
                  width={700}
                  height={700}
                  alt=''
                  src='/frg-pinturas.png'
                  className='transition hover:scale-105'
                />
              </Link>
              <Link href='https://keysijones-blog.vercel.app/'>
                <Image
                  width={700}
                  height={700}
                  alt=''
                  src='/personal-blog.png'
                  className='transition hover:scale-105'
                />
              </Link>
            </section>
          </section>
        </FadeInWrapper>
      </div>
    </div>
  );
}
