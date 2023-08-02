import Image from 'next/image';
import { Inter } from '@next/font/google';
import { FadeInWrapper } from '@/components/FadeInWrapper';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div
      className={'text-black transition-all flex' + inter.className}
    >
      <div
        id='hero-section'
        className='flex flex-col px-8 lg:px-0 justify-center text-[#262d3e] bg-[whitesmoke] lg:flex relative overflow-hidden'
      >
        <div className='flex flex-col lg:flex-row'>
          <div className='max-w-4xl px-10 pt-12 m-auto'>
            <h2 className='text-5xl font-black fadeIn sm:text-6xl'>
              Jones Fernandes
            </h2>
            <div className='my-12 max-w-xl sm:max-w-2xl text-2xl sm:text-3xl bg-[#262d3e] sm:bg-inherit rounded-md text-white sm:text-[#262d3e] text-center'>
              <p className='pt-2 text-gray-400 sm:[display:none;]'>README.md</p>
              <p className='sm:[display:none] p-6 text-left sm:p-0 [line-height:43px;]'>
                Hi, I&apos;m Jones, a React Developer with 3+ years of
                experience in the web development market.
              </p>
              <p className='[display:none] sm:block p-6 text-left sm:p-0 [line-height:43px;]'>
                Hi, I&apos;m Jones, a React Developer with 3+ years of
                experience in the web development market. I&apos;m passionate
                about building beautiful and user-friendly applications.
              </p>
            </div>
            <div className='[display:none] lg:block m-auto'>
              <a
                href='https://linkedin.com/in/keysijones'
                className='px-2 py-2 text-white uppercase font-semibold transition-all bg-[#0A66C2] rounded-xl sm:px-4 text-xl sm:hover:scale-110'
              >
                See LinkedIn Profile
              </a>
            </div>
          </div>
          <div className='relative self-center max-w-md m-auto sm:mt-20 sm:block sm:left-0 left-2 fadeIn'>
            <Image
              alt=''
              src='/jones-profile.jpg'
              width={600}
              height={600}
              className='border-8 rounded-full border-slate-700'
            />
          </div>
          <div className='mt-12 lg:[display:none;] text-center relative'>
            <a
              href='https://linkedin.com/in/keysijones'
              className='px-2 py-2 text-white uppercase font-semibold transition-all bg-[#0A66C2] rounded-xl sm:px-4 text-xl sm:hover:scale-110'
            >
              See LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
      <svg
        className='bg-slate-800'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1440 320'
      >
        <path
          fill='#f5f5f5'
          fill-opacity='1'
          d='M0,64L120,80C240,96,480,128,720,128C960,128,1200,96,1320,80L1440,64L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z'
        ></path>
      </svg>
      <div
        id='sobre-mim'
        className='justify-center px-4 text-white lg:flex bg-slate-800 sm:flex-col'
      >
        <FadeInWrapper>
          <div className='relative flex flex-col xl:flex-row'>
            <div className='max-w-2xl px-4 m-auto lg:relative'>
              <h2 className='text-5xl font-extrabold sm:text-6xl'>About me</h2>
              <p className='mt-12 text-3xl font-extralight [line-height:43px;]'>
                I&apos;m A results-driven React developer with over 3 years of hands-on experience. From e-commerce platforms to product websites and social media platforms, I&apos;ve successfully brought visions to life, creating seamless and engaging user experiences.
              </p>
              <p className='my-12 text-3xl font-extralight'>
                Besides work, my hobbies include reading self-improvement books, hitting the gym, and spending time with my loved ones.
              </p>
              {/* <div className='mt-12 [display:none] lg:block m-auto'>
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
              </div> */}
            </div>
            <div className='mt-12 lg:[display:none;] text-center relative'>
              <div className='self-center max-w-md m-auto rounded-xl'>
                <video width={400} autoPlay loop muted className='rounded-xl'>
                  <source type='video/mp4' src='/videos/coding.mp4' />
                </video>
              </div>
              <a
              href='https://linkedin.com/in/keysijones'
              className='px-2 py-2 text-white uppercase font-semibold transition-all bg-[#0A66C2] rounded-xl sm:px-4 text-xl sm:hover:scale-110'
            >
              See LinkedIn Profile
            </a>
            </div>
            <div className='[display:none;] lg:block self-center max-w-md m-auto rounded-md lg:relative top-0'>
              <video width={400} autoPlay loop muted className='rounded-3xl'>
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
              className='mx-auto bg-white rounded-full hover:cursor-pointer animate-bounce'
              onClick={() =>
                document
                  .querySelector('#projetos')
                  .scrollIntoView({ behavior: 'smooth' })
              }
            />
          </div>
        </FadeInWrapper>
      </div>
      <div id='projetos' className='bg-white'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
          <path
            fill='#1e293b'
            fill-opacity='1'
            d='M0,192L80,197.3C160,203,320,213,480,213.3C640,213,800,203,960,192C1120,181,1280,171,1360,165.3L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z'
          ></path>
        </svg>
        <section className='flex flex-col justify-center w-full gap-8 pb-20'>
          <h2 className='text-5xl font-extrabold text-center text-[#262d3e] sm:text-6xl'>
            My Projects
          </h2>
          <section className='flex flex-col items-center justify-center w-full gap-8 mx-auto lg:flex-row'>
            <Link href='https://frgpinturasedecoracoes.com/'>
              <div className='self-center m-auto border-4 border-slate-200 min-h-[450px] rounded-xl hover:border-[#0A66C2]'>
                <div className='relative min-h-[450px] hidden sm:block'>
                  <div className='absolute min-h-[450px] -bottom-1 z-10 w-full h-full text-center rounded-sm opacity-0 hover:opacity-100 hover:block'>
                    <p className='relative rounded-b-sm text-white bg-[#0A66C2] font-bold top-[86%] py-4 text-xl'>
                      VER DEMO
                    </p>
                  </div>
                  <h3 className='py-4 font-semibold text-center'>
                    Frg Pinturas e Decoracoes
                  </h3>
                  <video width={700} autoPlay loop muted className='rounded-md'>
                    <source type='video/mp4' src='/videos/frgpinturas.webm' />
                  </video>
                </div>
                <div className='relative sm:hidden'>
                  <div className='absolute bottom-0 z-10 w-full h-full text-center rounded-sm opacity-0 hover:opacity-100 hover:block'>
                    <p className='relative rounded-b-sm text-white bg-[#0A66C2] font-bold top-[86%] py-4 text-xl'>
                      VER DEMO
                    </p>
                  </div>
                  <h3 className='py-4 font-semibold text-center'>
                    Frg Pinturas e Decoracoes
                  </h3>
                  <video width={320} autoPlay loop muted className='rounded-md'>
                    <source
                      type='video/mp4'
                      src='/videos/frgpinturas-mobile.mp4'
                    />
                  </video>
                </div>
              </div>
            </Link>
            <Link href='https://keysijones-blog.vercel.app/'>
              <div className='self-center m-auto border-4 rounded-xl min-h-[450px] border-slate-200 hover:border-[#0A66C2]'>
                <div className='relative hidden rounded-md sm:block min-h-[450px]'>
                  <div className='absolute min-h-[450px] bottom-0 z-10 w-full h-full text-center rounded-md opacity-0 hover:opacity-100 hover:block'>
                    <p className='relative rounded-b-sm text-white bg-[#0A66C2] font-bold top-[87%] py-4 text-xl'>
                      VER DEMO
                    </p>
                  </div>
                  <h3 className='py-4 font-semibold text-center'>
                    Blog Pessoal
                  </h3>
                  <video
                    width={700}
                    autoPlay
                    loop
                    muted
                    className='relative z-0'
                  >
                    <source type='video/mp4' src='/videos/blog.mp4' />
                  </video>
                </div>
                <div className='relative rounded-md sm:hidden'>
                  <div className='absolute bottom-0 z-10 w-full h-full text-center rounded-sm opacity-0 hover:opacity-100 hover:block'>
                    <p className='relative rounded-b-sm text-black bg-yellow-400 font-bold top-[86%] py-4 text-xl'>
                      VER DEMO
                    </p>
                  </div>
                  <h3 className='py-4 font-semibold text-center'>
                    Blog Pessoal
                  </h3>
                  <video width={320} autoPlay loop muted>
                    <source type='video/mp4' src='/videos/blog-mobile.mp4' />
                  </video>
                </div>
              </div>
            </Link>
          </section>
        </section>
      </div>
      <p className='my-5 text-lg text-center'>
        Jones Fernandes &copy; 2019 - {new Date().getFullYear()}
      </p>
    </div>
  );
}
