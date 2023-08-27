import Image from 'next/image';
import { FadeInWrapper } from '@/components/FadeInWrapper';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa6';
import useTranslation from 'next-translate/useTranslation';
import setLanguage from 'next-translate/setLanguage'

export default function Home() {
  const { t, lang } = useTranslation('common');

  return (
      <div className='flex flex-col text-black transition-all'>
        <div
          id='hero-section'
          className='flex flex-col px-4 pt-12 xl:px-0 justify-center text-[#262d3e] bg-[whitesmoke] lg:flex relative overflow-hidden'
        >
          <div className='flex flex-col lg:flex-row'>
            <div className='max-w-4xl m-auto'>
              <select
                onChange={e => setLanguage(e.target.value)}
                defaultValue={lang}
                className='float-right px-2 py-1 text-white bg-gray-800 rounded-md sm:float-left'
              >
                <option value='en'>English 🇺🇸</option>
                <option value='pt'>Português 🇧🇷</option>
                <option value='es'>Español 🇪🇸</option>
              </select>
              <h2 className='mt-20 text-5xl font-black text-center sm:text-left fadeIn sm:text-6xl'>
                Jones Fernandes
              </h2>
              <div className='relative self-center max-w-md mx-auto mt-12 sm:hidden sm:left-0 left-2 fadeIn'>
                <Image
                  alt=''
                  src='/jones-profile.png'
                  width={600}
                  height={600}
                  className='rounded-full sm:mt-8'
                />
              </div>
              <div className='my-12 max-w-xl sm:max-w-2xl text-2xl sm:text-3xl bg-[#262d3e] sm:bg-inherit rounded-md text-white sm:text-[#262d3e] text-center font-light'>
                <p className='pt-2 text-gray-400 sm:hidden'>
                  README.md
                </p>
                <p className='sm:hidden p-6 text-left xl:p-0 line-[43px]'>
                  {t('mobileGreeting')}
                </p>
                <p className='hidden sm:block py-6 text-left xl:p-0 line-[43px]'>
                  {t('greeting')}
                </p>
              </div>
              <div className='hidden m-auto mb-8 sm:block'>
                <a
                  href='https://linkedin.com/in/keysijones'
                  className='hover:bg-blue-400 py-3 px-6 text-white uppercase font-semibold transition-all bg-[#0A66C2] rounded-md text-xl sm:hover:scale-110'
                >
                  {t('linkedInProfileCTA')}
                </a>
              </div>
            </div>
            <div className='relative self-center hidden max-w-md mx-auto sm:block sm:left-0 left-2 fadeIn'>
              <Image
                alt=''
                src='/jones-profile.png'
                width={600}
                height={600}
                className='rounded-full sm:mt-8'
              />
            </div>
            <div className='relative my-12 text-center sm:hidden'>
              <a
                href='https://linkedin.com/in/keysijones'
                className='hover:bg-blue-400 px-6 py-3 text-white uppercase font-semibold transition-all bg-[#0A66C2] rounded-md text-xl sm:hover:scale-110'
              >
                {t('linkedInProfileCTA')}
              </a>
            </div>
          </div>
        </div>
        <div className='relative flex justify-center'>
          <svg
            className='w-full bg-slate-800'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 1440 320'
          >
            <path
              fill='#f5f5f5'
              fillOpacity='1'
              d='M0,64L120,80C240,96,480,128,720,128C960,128,1200,96,1320,80L1440,64L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z'
            ></path>
          </svg>
          <div className='absolute flex justify-center w-60 -bottom-12 sm:bottom-[20%] 2xl:bottom-[30%] gap-x-4'>
            <a
              href='https://www.linkedin.com/in/keysijones/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedin size={60} fill='white' />
            </a>
            <a
              href='https://github.com/KeysiJones/'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={60} fill='white' />
            </a>
            <a
              href='https://wa.me/5551993667706'
              target='_blank'
              rel='noreferrer'
            >
              <FaWhatsapp size={60} fill='white' />
            </a>
          </div>
        </div>
        <div
          id='sobre-mim'
          className='justify-center px-4 text-white lg:flex bg-slate-800 sm:flex-col'
        >
          <FadeInWrapper>
            <div className='relative flex flex-col xl:flex-row'>
              <div className='max-w-2xl px-4 m-auto lg:relative'>
                <h2 className='pt-20 text-4xl font-bold sm:pt-0 sm:text-6xl'>
                  {t('aboutMe')}
                </h2>
                <p className='mt-12 text-2xl sm:text-3xl font-extralight sm:line-[43px]'>
                  {t('aboutMeDescription')}
                </p>
                <p className='my-12 text-2xl sm:text-3xl font-extralight sm:line-[43px]'>
                  {t('hobbiesDescription')}
                </p>
              </div>
              <div className='relative mt-12 text-center sm:hidden'>
                <div className='self-center max-w-md m-auto rounded-xl'>
                  <video width={400} autoPlay loop muted className='rounded-xl'>
                    <source type='video/mp4' src='/videos/coding.mp4' />
                  </video>
                </div>
              </div>
              <a
                href='https://linkedin.com/in/keysijones'
                className='hover:bg-blue-400 sm:hidden block mx-auto my-24 px-6 py-3 text-white uppercase font-semibold transition-all bg-[#0A66C2] rounded-md text-xl sm:hover:scale-110'
              >
                {t('linkedInProfileCTA')}
              </a>
              <div className='top-0 self-center hidden max-w-md m-auto rounded-md lg:block lg:relative'>
                <video width={400} autoPlay loop muted className='rounded-3xl'>
                  <source type='video/mp4' src='/videos/coding.mp4' />
                </video>
              </div>
            </div>
            <div className='self-center max-w-md m-auto rounded-md'>
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
              fillOpacity='1'
              d='M0,192L80,197.3C160,203,320,213,480,213.3C640,213,800,203,960,192C1120,181,1280,171,1360,165.3L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z'
            ></path>
          </svg>
          <section className='flex flex-col justify-center w-full gap-8 pb-20'>
            <h2 className='text-4xl font-extrabold text-center text-[#262d3e] sm:text-6xl'>
              {t('myProjectsTitle')}
            </h2>
            <section className='flex flex-col items-center justify-center w-full gap-8 mx-auto lg:flex-row'>
              <Link href='https://frgpinturasedecoracoes.com/'>
                <div className='self-center m-auto border-4 border-slate-200 max-w-xl sm:min-h-[380px] rounded-xl hover:border-[#0A66C2] transition-all ease-linear duration-200'>
                  <div className='relative sm:min-h-[380px] hidden sm:block'>
                    <div className='absolute sm:min-h-[380px] -bottom-1 z-10 w-full h-full text-center rounded-sm opacity-0 hover:opacity-100 hover:block'>
                      <p className='relative rounded-b-md text-white bg-[#0A66C2] font-bold top-[84%] py-4 text-xl'>
                        {t('seeDemo')}
                      </p>
                    </div>
                    <h3 className='py-4 font-semibold text-center'>
                      {t('paintingCompanyTitle')}
                    </h3>
                    <video
                      width={700}
                      autoPlay
                      loop
                      muted
                      className='rounded-md'
                    >
                      <source type='video/mp4' src='/videos/frgpinturas.webm' />
                    </video>
                  </div>
                  <div className='sm:min-h-[380px] relative sm:hidden'>
                    <div className='sm:min-h-[380px] absolute bottom-0 z-10 w-full h-full text-center rounded-sm opacity-0 hover:opacity-100 hover:block'>
                      <p className='relative rounded-b-sm text-white bg-[#0A66C2] font-bold top-[92%] sm:top-[84%] py-4 text-xl'>
                      {t('seeDemo')}
                      </p>
                    </div>
                    <h3 className='py-4 font-semibold text-center'>
                      {t('paintingCompanyTitle')}
                    </h3>
                    <video
                      height={320}
                      width={350}
                      autoPlay
                      loop
                      muted
                      className='rounded-md h-80'
                    >
                      <source
                        type='video/mp4'
                        src='/videos/frgpinturas-mobile.mp4'
                      />
                    </video>
                  </div>
                </div>
              </Link>
              <Link href='https://keysijones-blog.vercel.app/'>
                <div className='sm:min-h-[380px] max-w-xl self-center m-auto border-4 rounded-xl border-slate-200 hover:border-[#0A66C2] transition-all ease-linear duration-200'>
                  <div className='sm:min-h-[380px] relative hidden rounded-md sm:block'>
                    <div className='sm:min-h-[380px] absolute bottom-0 z-10 w-full h-full text-center rounded-md opacity-0 hover:opacity-100 hover:block'>
                      <p className='relative rounded-b-md text-white bg-[#0A66C2] font-bold top-[85%] py-4 text-xl'>
                        {t('seeDemo')}
                      </p>
                    </div>
                    <h3 className='py-4 font-semibold text-center'>
                      {t('personalBlogTitle')}
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
                  <div className='sm:min-h-[380px] relative rounded-md sm:hidden'>
                    <div className='sm:min-h-[380px] absolute bottom-0 z-10 w-full h-full text-center rounded-sm opacity-0 hover:opacity-100 hover:block'>
                      <p className='relative rounded-b-sm text-white bg-[#0A66C2] font-bold top-[92%] sm:top-[84%] py-4 text-xl'>
                        {t('seeDemo')}
                      </p>
                    </div>
                    <h3 className='py-4 font-semibold text-center'>
                      {t('personalBlogTitle')}
                    </h3>
                    <video
                      height={320}
                      width={350}
                      autoPlay
                      loop
                      muted
                      className='rounded-md h-80'
                    >
                      <source type='video/mp4' src='/videos/blog-mobile.mp4' />
                    </video>
                  </div>
                </div>
              </Link>
            </section>
          </section>
        </div>
        <p className='my-5 text-lg text-center'>
          {t('madeWithHeartText')} {' '}
          <a
            className='underline'
            href='https://www.linkedin.com/in/keysijones/'
          >
            Jones Fernandes
          </a>
          <br />
        </p>
      </div>
  );
}
