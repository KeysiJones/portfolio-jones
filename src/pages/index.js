import Image from 'next/image'
import { Inter } from '@next/font/google'
import { Carrousel } from '@/components/Carousel';
import { CarouselItem } from '@/components/CarouselItem';
import { FadeInWrapper } from '@/components/FadeInWrapper';

const inter = Inter({ subsets: ['latin'] })
/*const images = [
  {
    src: "/parede.webp",
    width: 220,
    height: 212,
  },
  {
    src: "/decoracao-mica.jpg",
    width: 350,
    height: 212,
  },
  {
    src: "/banheiro.webp",
    width: 1000,
    height: 1000,
  },
  {
    src: "/wide-living.webp",
    width: 200,
    height: 212,
  },
  {
    src: "/banheiro-escuro.webp",
    width: 300,
    height: 300,
  },
  {
    src: "/area.webp",
    width: 200,
    height: 212,
  },
  {
    src: "/mica-banheiro.webp",
    width: 200,
    height: 212,
  },
];*/

export const menuItems = [
  {
    title: 'Inicio',
    url: '/',
  },
  {
    title: 'Pinturas',
    url: '/',
    submenu: [
      {
        title: 'Pintura Interna',
        url: 'web-design',
      },
      {
        title: 'Pintura De Fachadas',
        url: 'web-dev',
      },
      {
        title: 'Pintura De Decks e Pergolados',
        url: 'seo',
      },
    ],
  },
  {
    title: 'Efeitos Decorativos',
    url: '/',
    submenu: [
      {
        title: 'Efeito Cimento Queimado',
        url: '/cimento-queimado',
      },
      {
        title: 'Quartzo Mica',
        url: '/quartzo-mica',
      },
      {
        title: 'Marmorização Realista',
        url: '/',
      },
    ],
  },
  {
    title: 'Nossos Projetos',
    url: '/#nossos-projetos',
  },
  {
    title: 'Sobre a FRG',
    url: '/sobre',
  },
];

export default function Home() {

  return (
    <div className={'text-black bg-[gold] transition-all flex' + inter.className}>
      <FadeInWrapper>
        <div id='hero-section' className='flex flex-col justify-center p-8 text-[#262d3e] lg:py-28 lg:flex'>
          <div className='flex flex-col lg:flex-row'>
            <div className='max-w-4xl pt-8 m-auto sm:pt-0 lg:px-12'>
              <div className='flex'>
                {/* <Image src="/js.svg" width={80} height={80} alt='dev icon' className='mb-8 fadeIn' /> */}
                <Image src="/dev.svg" width={80} height={80} alt='dev icon' className='mb-1' />
              </div>
              <h2 className='text-5xl font-black fadeIn sm:text-6xl'>Jones Fernandes</h2>
              <div className='my-12 text-2xl sm:text-3xl bg-[#262d3e] sm:bg-inherit rounded-md text-white sm:text-[#262d3e] text-center'>
                {/* <div className='flex'> */}
                  {/* <Image src="/traffic-lights.svg" width={100} height={100} alt='dev icon' /> */}
                  <p className='pt-2 text-gray-400 sm:[display:none;]'>README.md</p>
                {/* </div> */}
                <p className='p-6 text-left sm:p-0'>Oi, Eu sou o Jones, desenvolvedor web focado em criar software que gera valor para grandes empresas.</p>
              </div>
              <div className='[display:none] lg:block m-auto'>
                <button
                  onClick={() => window.open('https://api.whatsapp.com/send/?phone=5551993667706', '_blank')}
                  className='p-2 font-bold text-white transition-all bg-[#262d3e] rounded-md sm:px-8 text-xl sm:hover:scale-110 px-8'
                >
                  QUERO SABER MAIS
                </button>
              </div>
            </div>
            <div className='relative self-center max-w-md m-auto rounded-md sm:block sm:left-0 left-2'>
              <Image alt='' src="/jones-refined-white.png" width={500} height={500} className="rounded-full" />
            </div>
            <div className='mt-12 lg:[display:none;] text-center relative'>
              <button
                onClick={() => window.open('https://api.whatsapp.com/send/?phone=5551993667706', '_blank')}
                className='p-2 font-bold text-white transition-all bg-[#262d3e] rounded-md sm:px-8 text-xl sm:hover:scale-110 px-8'
              >
                QUERO SABER MAIS
              </button>
            </div>
          </div>
          <div className='self-center max-w-md m-auto mt-24 rounded-md'>
            <Image alt='' src="/arrow-down.svg" width={80} height={80} className="mx-auto bg-white rounded-full hover:cursor-pointer" onClick={() => document.querySelector("#sobre-mim").scrollIntoView({ behavior: 'smooth' })} />
          </div>
        </div>
      </FadeInWrapper>
      <div id='sobre-mim' className='justify-center p-8 py-12 text-white lg:py-28 lg:flex lg:h-screen bg-[#262d3e] sm:flex-col'>
        <FadeInWrapper>
          <div className='flex flex-col my-auto sm:flex-row'>
            <div className='max-w-3xl m-auto lg:relative'>
              <h2 className='text-5xl font-extrabold sm:text-6xl'>Sobre Mim</h2>
              <p className='mt-12 text-3xl font-extralight'>Sou um profissional com 3 anos de experiência em desenvolvimento de software para a web.</p>
              <p className='mt-8 text-3xl font-extralight'>Falo 3 idiomas: Português, Inglês e Espanhol.</p>
              {/*<p className='mt-8 text-3xl font-extralight'>Minha missão é te ajudar a tirar o teu projeto do papel e alavancar as tuas vendas, te entregando um produto de software de qualidade.</p>*/}
              <div className='mt-12 [display:none] lg:block m-auto'>
                <button
                  onClick={() => window.open('https://api.whatsapp.com/send/?phone=5551993667706', '_blank')}
                  className='p-2 font-bold text-gray-700 transition-all bg-[#F7DE1F] rounded-md sm:px-8 text-xl sm:hover:scale-110 px-8'
                >
                  ENTRAR EM CONTATO
                </button>
              </div>
            </div>
            <div className='mt-12 lg:[display:none;] text-center relative'>
              <div className='self-center max-w-md m-auto rounded-md'>
                {<Image alt='' src="/laptop.png" width={400} height={400} className="relative scale-150 rounded-full sm:block left-6" />}
              </div>
              <button
                onClick={() => window.open('https://api.whatsapp.com/send/?phone=5551993667706', '_blank')}
                className='p-2 mt-24 font-bold text-gray-700 transition-all bg-[#F7DE1F] rounded-md sm:px-8 text-xl sm:hover:scale-110 px-8'
              >
                ENTRAR EM CONTATO
              </button>
            </div>
            <div className='[display:none;] lg:block self-center max-w-md m-auto rounded-md lg:relative lg:bottom-10'>
              {<Image alt='' src="/laptop.png" width={400} height={400} className="relative scale-150 rounded-full sm:block left-6" />}
            </div>
          </div>
          <div className='self-center max-w-md m-auto mt-24 rounded-md'>
            <Image alt='' src="/arrow-down.svg" width={80} height={80} className="mx-auto bg-[gold] rounded-full hover:cursor-pointer" onClick={() => document.querySelector("#projetos").scrollIntoView({ behavior: 'smooth' })} />
          </div>
        </FadeInWrapper>
      </div>
      <div id='projetos' className='lg:h-[90vh] bg-[gold]'>
        <FadeInWrapper>
          <h2 className='mt-20 text-5xl font-extrabold text-center text-[#262d3e] sm:text-6xl'>Projetos</h2>
          <Carrousel>
            <CarouselItem cardImage="/personal-blog.png" />
            <CarouselItem cardImage="/quiz-app.jpg" />
            <CarouselItem cardImage="/personal-blog.png" />
          </Carrousel>
        </FadeInWrapper>
      </div>
      {/*<div className='relative flex flex-col items-center justify-center w-full p-4 bg-white lg:h-[90vh]'>
        <h2 className='my-20 text-4xl font-bold text-center sm:text-5xl'>Nossos Parceiros</h2>
        <div className='flex flex-col lg:mx-8 lg:flex-row'>
          <div className='flex'>
            <div className='parcerias'>
              <Image src="/decor-colors-logo.png" width={250} height={250} alt='logo Decor Colors' />
            </div>
            <div className='parcerias'>
              <Image src="/suvinil-logo.png" width={250} height={250} alt='logo Suvinil' />
            </div>
            <div className='parcerias'>
              <Image src="/logo-coral.png" width={250} height={250} alt='logo Tintas Coral' />
            </div>
          </div>
          <div className='flex'>
            <div className='parcerias'>
              <Image src="/logo-tintas-renner.jpeg" width={250} height={250} alt='logo Tintas Renner' />
            </div>
            <div className='parcerias'>
              <Image src="/adelbras-logo.jpeg" width={250} height={250} alt='logo Tintas Renner' />
            </div>
            <div className='parcerias'>
              <Image src="/salvabras-logo.jpeg" width={250} height={250} alt='logo Tintas Renner' />
            </div>
          </div>
        </div>
      </div>
      <div className='text-center bg-white sm:mx-3'>
        <h3 id='nossos-projetos' className='px-2 py-16 text-4xl font-bold text-black sm:text-5xl'>
          Nossos Projetos
        </h3>
        <Gallery images={images} rowHeight={400} />
      </div>
      <div className='text-center mb-14 md:mb-28'>
        <h3 className='px-4 mt-20 text-4xl font-bold text-center text-black mb-14 sm:text-5xl'>
          O que os nossos clientes dizem
        </h3>
        <Carousel
          onClickItem={(_, card) => window.open(card.props.reviewLink, "_blank")}
          statusFormatter={(_current, _total, item) => <b className='px-2 pt-2 text-lg text-center text-black'>Clique no card para ver no Google</b>}
          showThumbs={false}
          autoPlay
          className='mx-8 !mb-12 rounded-md sm:max-w-2xl sm:m-auto bg-white-400 hover:cursor-pointer'
          infiniteLoop
          stopOnHover
          showArrows={false}
          interval={5000}
        >
          <CarouselItem
            author="Dora Pavão"
            reviewLink="https://goo.gl/maps/YF1dH9LHdR1YcMxi9"
            text="Pedro é muito profissional e seu serviço é impecável: rápido, limpo e perfeito. O contratei 2 vezes para consertar serviços que outro pintor (que dizia saber fazer cimento queimado) fez e que não ficaram como eu queria.
            Ele consegue deixar exatamente como o cliente deseja: com o efeito mais marcado ou mais esfumado e delicado.
            Super indico!"
          />
          <CarouselItem className={inter.className} reviewLink="https://goo.gl/maps/eHDQjKAARJy88VgF8" author="Gabriela Schein" text="Empresa ágil, atenciosa e cordial no atendimento. Tive um rápido retorno de orçamento e execução da pintura. Pratica um valor de acordo com o mercado. O Pedro é um profissional cuidadoso e muito detalhista, além de muito disposto. Agradeço de coração a execução da minha parede de cimento queimado, ficou maravilhosa, exatamente como eu queria." />
          <CarouselItem reviewLink="https://goo.gl/maps/9YEt4vyQ9umkWDxE8" author="Aislan" text="Realizei a pintura do meu apartamento com a FRG e tive uma ótima experiência! Foram muito profissionais desde o primeiro atendimento, para elaboração do orçamento, até a finalização do trabalho! Recomendo!" />
          <CarouselItem reviewLink="https://goo.gl/maps/fdKs53FhZp7ZbSHj9" author="Marcus Vinícius" text="Super indico! Profissional qualificado, com preço justo, pontualidade no prazo e um trabalho impecável, desde o orçamento até a finalização da obra. Por mais profissionais assim." />
        </Carousel>
        <button
          className='p-2 font-bold text-white transition-all bg-gray-900 rounded-md sm:px-8 sm:text-xl hover:bg-gray-500 sm:hover:scale-110'
          onClick={() => window.open("https://www.google.com/search?q=FRG+Pinturas+e+Decora%C3%A7%C3%B5es&rlz=1C5CHFA_enCL1032CL1032&sxsrf=AJOqlzXIa50dR8YG12i7GJ6_M0ATiXTWkw%3A1674903412513&ei=dP_UY63_Hvrn1sQPs-qI6AU&ved=0ahUKEwitib63jer8AhX6s5UCHTM1Al0Q4dUDCA8&uact=5&oq=FRG+Pinturas+e+Decora%C3%A7%C3%B5es&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIECCMQJzoHCCMQsAMQJ0oECEEYAUoECEYYAFD7A1j7A2D1CGgDcAB4AIABnAGIAZwBkgEDMC4xmAEAoAECoAEByAEBwAEB&sclient=gws-wiz-serp#lrd=0x646ac6242881575d:0xd332597cdb14f1f5,1,,,,", "_blank")}>
          Veja Todas as Nossas Avaliações
        </button>
      </div>
      
      <div className='flex flex-col sm:justify-between lg:flex-row md:m-4 lg:mx-14 lg:mt-18 lg:mb-14'>
        <div className='flex flex-col self-center mx-8 mt-12 mb-8 sm:mx-6 lg:relative sm:max-w-2xl sm:bottom-20'>
          <h2 className='mb-2 text-4xl font-bold sm:text-5xl'>Acompanhe o nosso trabalho</h2>
          <p className='mt-4 text-2xl font-light'>Diariamente compartilhamos o nosso trabalho no Instagram.</p>
          <p className='mt-4 text-2xl font-light'>
            <a href='https://instagram.com/frgpinturas'>
              <b className='underline'>Siga o nosso perfil</b>
            </a>
            {''} para se manter atualizado e receber as nossas novidades em primeira mão.</p>
          <p className='mt-4 text-2xl font-light'>Você vai se apaixonar 😍</p>
          <div className='my-12'>
            <button
              onClick={() => window.open('https://api.whatsapp.com/send/?phone=5551991549280&text=Ol%C3%A1%2C+gostaria+de+agendar+um+Or%C3%A7amento+Gratuito%21&type=phone_number&app_absent=0bit.ly/whatsapp-frgpinturas', '_blank')}
              className='p-2 font-bold text-white transition-all bg-gray-900 rounded-md sm:px-8 sm:text-xl hover:bg-gray-500 sm:hover:scale-110'
            >
              SOLICITAR ORÇAMENTO GRATUITO
            </button>
          </div>
        </div>
        <div className='flex justify-center max-w-[100vw]'>
          <InstagramEmbed url="https://www.instagram.com/p/CnzDaTcObrk/" captioned linkText='Ver no Instagram' placeholderSpinnerDisabled placeholderProps={{ imageUrl: "https://frgpinturas.vercel.app/banheiro.webp" }} />
        </div>
      </div>
      <h3 className='px-2 mt-8 text-4xl font-bold text-center text-black mb-14 sm:text-5xl'>
        Onde estamos localizados
      </h3>
      <div id='mapwrapper' className='sm:mb-20'>
        <iframe className="big-screens" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d863.5733681285091!2d-51.23035452580404!3d-30.028437343684004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd332597cdb14f1f5!2sFRG%20Pinturas%20e%20Decora%C3%A7%C3%B5es!5e0!3m2!1sen!2sbr!4v1674924152054!5m2!1sen!2sbr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <iframe className="small-screens" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1727.1467362570181!2d-51.23090169640286!3d-30.028437343684004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd332597cdb14f1f5!2sFRG%20Pinturas%20e%20Decora%C3%A7%C3%B5es!5e0!3m2!1sen!2sbr!4v1674924244354!5m2!1sen!2sbr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <Footer />
      <div className='fixed transition-all hover:cursor-pointer bottom-5 hover:scale-125 right-4 floating'>
        <Image
          onClick={() => window.open('https://api.whatsapp.com/send/?phone=5551991549280&text=Ol%C3%A1%2C+gostaria+de+agendar+um+Or%C3%A7amento+Gratuito%21&type=phone_number&app_absent=0bit.ly/whatsapp-frgpinturas', '_blank')}
          src='/whats.png'
          fill
          alt='Whatsapp floating icon'
        />
      </div>*/}
    </div>
  )
}

/*const CarouselItem = ({ text, author, reviewLink, className }) => {
  return (
    <div className={'flex flex-col min-h-[530px] sm:min-h-[425px] justify-center items-center font-sans hover:cursor-pointer' + className}>
      <div className='px-8 pb-8 text-lg font-light sm:text-2xl sm:text-center'>
        &quot;{text}&quot;
      </div>
      <div className='flex'>
        <Link className='text-xl' href={reviewLink}>- {author}</Link>
      </div>
    </div>
  )
}*/

export const Navbar = () => {
  return (
    <nav className='self-center'>
      <ul className="menus">
        {menuItems.map((menu, index) => {
          return <MenuItems items={menu} key={index} />;
        })}
      </ul>
    </nav>
  );
};

const Dropdown = ({ submenus }) => {
  return (
    <ul className="dropdown">
      {submenus.map((submenu, index) => (
        <li key={index} className="menu-items">
          <a href={submenu.url}>{submenu.title}</a>
        </li>
      ))}
    </ul>
  );
};

const MenuItems = ({ items }) => {
  return (
    <li className="menu-items">
      {items.submenu ? (
        <>
          <button type="button" aria-haspopup="menu" className='justify-center !text-lg'>
            {items.title}{' '}
          </button>
          <Dropdown submenus={items.submenu} />
        </>
      ) : (
        <a href={items.url}>{items.title}</a>
      )}
    </li>
  );
}