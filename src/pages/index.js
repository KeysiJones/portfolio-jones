import Image from 'next/image';
import { Inter } from '@next/font/google';
import { FadeInWrapper } from '@/components/FadeInWrapper';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div
      className={'text-black bg-white transition-all flex' + inter.className}
    >
      <FadeInWrapper>
        <div
          id='hero-section'
          className='flex flex-col px-8 lg:px-0 justify-center text-[#262d3e] bg-[#FDD935] lg:flex relative overflow-hidden'
        >
          <div className='flex flex-col lg:flex-row'>
            <div className='max-w-4xl pt-24 m-auto lg:px-12'>
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
              <div className='my-12 max-w-xl sm:max-w-2xl text-2xl sm:text-3xl bg-[#262d3e] sm:bg-inherit rounded-md text-white sm:text-[#262d3e] text-center'>
                <p className='pt-2 text-gray-400 sm:[display:none;]'>
                  README.md
                </p>
                <p className='p-6 text-left sm:p-0'>
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
                  className='p-2 font-bold text-white transition-all bg-[#5aa6f6] rounded-md sm:px-8 text-xl sm:hover:scale-110 px-8'
                >
                  QUERO SABER MAIS
                </button>
              </div>
            </div>
            <div className='relative self-center max-w-md m-auto -bottom-[157px] xl:-bottom-[140px] sm:block sm:left-0 left-2 fadeIn'>
              <Image
                alt=''
                src='/jones-cut-perfect.png'
                width={600}
                height={600}
                className='lg:scale-125'
              />
            </div>
            <div className='mt-12 lg:[display:none;] text-center relative'>
              <button
                onClick={() =>
                  window.open(
                    'https://api.whatsapp.com/send/?phone=5551993667706',
                    '_blank'
                  )
                }
                className='p-2 font-bold text-white transition-all bg-[#5aa6f6] rounded-md sm:px-8 text-xl sm:hover:scale-110 px-8'
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
        className='justify-center px-4 py-24 text-white lg:flex bg-slate-800 sm:flex-col'
      >
        <FadeInWrapper>
          <div className='relative flex flex-col xl:flex-row'>
            <div className='max-w-3xl px-4 m-auto lg:relative'>
              <h2 className='text-5xl font-extrabold sm:text-6xl'>Sobre Mim</h2>
              <p className='mt-12 text-3xl font-extralight'>
                Sou um desenvolvedor de software com 3 anos de experiência no
                mercado.
              </p>
              <p className='mt-8 text-3xl font-extralight'>
                Além do trabalho, meus hobbies incluem ler, viajar, passar tempo
                com a família e fazer exercícios físicos.
              </p>
              <p className='mt-8 text-3xl font-extralight'>
                Se você procura um desenvolvedor de sites/sistemas web, estou
                pronto para enfrentar novos desafios e contribuir para o sucesso
                do seu projeto.
              </p>
              <div className='mt-12 [display:none] lg:block m-auto'>
                <button
                  onClick={() =>
                    window.open(
                      'https://api.whatsapp.com/send/?phone=5551993667706',
                      '_blank'
                    )
                  }
                  className='p-2 mb-24 font-bold text-white transition-all bg-[#5aa6f6] rounded-md text-xl md:hover:scale-110 px-8'
                >
                  ENTRAR EM CONTATO
                </button>
              </div>
            </div>
            <div className='mt-12 lg:[display:none;] text-center relative'>
              <div className='self-center max-w-md m-auto rounded-md'>
                <video width={400} autoPlay loop muted className='rounded-md'>
                  <source type='video/mp4' src='/videos/coding.mp4' />
                </video>
              </div>
              <button
                onClick={() =>
                  window.open(
                    'https://api.whatsapp.com/send/?phone=5551993667706',
                    '_blank'
                  )
                }
                className='p-2 mt-24 font-bold text-gray-700 transition-all bg-[#5aa6f6] rounded-md sm:px-8 text-xl sm:hover:scale-110 px-8'
              >
                ENTRAR EM CONTATO
              </button>
            </div>
            <div className='[display:none;] lg:block self-center max-w-md m-auto rounded-md lg:relative top-0'>
              <video width={400} autoPlay loop muted className='rounded-md'>
                <source type='video/mp4' src='/videos/coding.mp4' />
              </video>
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
                <div className='self-center m-auto rounded-md hover:border-2 hover:border-yellow-400'>
                  <video
                    width={700}
                    autoPlay
                    loop
                    muted
                    className='hidden rounded-md sm:block'
                  >
                    <source type='video/mp4' src='/videos/frgpinturas.webm' />
                  </video>
                  <video
                    width={320}
                    autoPlay
                    loop
                    muted
                    className='rounded-md sm:hidden'
                  >
                    <source
                      type='video/mp4'
                      src='/videos/frgpinturas-mobile.mp4'
                    />
                  </video>
                </div>
              </Link>
              <Link href='https://keysijones-blog.vercel.app/'>
                <div className='self-center m-auto rounded-md hover:border-2 hover:border-yellow-400'>
                  <video
                    width={700}
                    autoPlay
                    loop
                    muted
                    className='hidden rounded-md sm:block'
                  >
                    <source type='video/mp4' src='/videos/blog.mp4' />
                  </video>
                  <video
                    width={320}
                    autoPlay
                    loop
                    muted
                    className='rounded-md sm:hidden'
                  >
                    <source
                      type='video/mp4'
                      src='/videos/blog-mobile.mp4'
                    />
                  </video>
                </div>
              </Link>
            </section>
          </section>
        </FadeInWrapper>
      </div>
      <p className='my-5 text-lg text-center'>
        Jones Fernandes &copy; 2019 - {new Date().getFullYear()}
      </p>
    </div>
  );
}
