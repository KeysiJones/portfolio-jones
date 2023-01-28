import Image from 'next/image'
import { Inter } from '@next/font/google'
// import styles from '@/styles/Home.module.css'
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
// import gmailIcon from '../../public/gmail.svg'
// import phoneIcon from '../../public/phone.svg'
import { Gallery } from "react-grid-gallery";
import { InstagramEmbed } from 'react-social-media-embed';
import { Carousel } from 'react-responsive-carousel';
//import GoogleMapReact from 'google-map-react'
//import { Icon } from '@iconify/react'
//import locationIcon from '@iconify/icons-mdi/map-marker'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { useCallback, useState } from 'react';
import { Sidebar } from '@/components/Sidebar';
import Link from 'next/link';

export async function getStaticProps() {
  return { props: { mapsApiKey: process.env.REACT_MAPS_API_KEY } }
}

const containerStyle = {
  width: '800px',
  height: '400px',
  margin: 'auto',
};

const center = {
  lat: -30.02837,
  lng: -51.2322455,
};

const inter = Inter({ subsets: ['latin'] })
const images = [
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
    /*tags: [
     { value: "Cimento Queimado", title: "Cimento Queimado  " },
     { value: "Banheiro", title: "Banheiro" },
  ],*/
    //isSelected: true,
    //caption: "After Rain (Jeshu John - designerspics.com)",
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
];

// const location = {
//   address: 'R. Siqueira Campos, 1171 - Centro Histórico, Porto Alegre - RS, 90010-001',
//   lat: -30.02837,
//   lng: -51.2322455,
// } // our location object from earlier

export const menuItems = [
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
        url: 'web-design',
      },
      {
        title: 'Quartzo Mica',
        url: 'web-dev',
      },
      {
        title: 'Marmorização Realista',
        url: '/',
      },
    ],
  },
  {
    title: 'Nossos Projetos',
    url: '/',
    submenu: [
      {
        title: 'web design',
        url: 'web-design',
      },
      {
        title: 'web development',
        url: 'web-dev',
      },
      {
        title: 'SEO',
        url: 'seo',
      },
    ],
  },
];

export default function Home({ mapsApiKey }) {

  // const instagramProps = {
  //   url: "https://www.instagram.com/p/Cmguz-Iu8QO/",
  //   captioned: true,
  //   width: 500,
  //   height: 720
  // }
  
  return (
    <div className={'h-[92vh] text-black bg-white transition-all ' + inter.className}>
      <div className='fixed z-10 flex justify-between w-full px-4 py-1 bg-white shadow-md sm:py-2'>
        <div className='flex items-center self-center'>
          <Image src='/logo.jpg' alt='' width={60} height={60} className='transition-all hover:cursor-pointer rounded-full !opacity-1 hover:scale-110' onClick={() => window.open('https://www.instagram.com/frgpinturas/', '_blank')} />
          <p className='relative sm:text-xl font-extrabold text-[#49473a] top-[.65rem]'>PINTURAS E DECORAÇÕES</p>
        </div>
        <Sidebar right className="sidebar-menu" />
        <Navbar />
        {/*<div className='mr-8 desktop-menu'>
          <ul className={'flex items-center h-full !opacity-1'}>
            <li className='p-2'>
              <span>Pinturas</span>
              <div>
                <Link href="/">Pinturas externas</Link>
              </div>
            </li>
            <div className='p-2'>Efeitos Decorativos</div>
            <div className='p-2'>Projetos</div>
            <div className='p-2'>Sobre a FRG</div>
            {/*<li className='mx-2 transition-all hover:scale-110 hover:cursor-pointer' onClick={() => document.getElementById("hero-section").scrollIntoView({ behavior: 'smooth' })}>Início</li>
            <li className='mx-2 transition-all hover:scale-110 hover:cursor-pointer' onClick={() => document.getElementById("nossos-projetos").scrollIntoView({ behavior: 'smooth' })}>Especialidades</li>
            <li className='mx-2 transition-all hover:scale-110 hover:cursor-pointer' onClick={() => document.getElementById("nossos-projetos").scrollIntoView({ behavior: 'smooth' })}>Nossos Projetos</li>
            <li className='mx-2 transition-all hover:scale-110 hover:cursor-pointer'>Sobre a FRG</li>
            <li className='mx-2 transition-all hover:scale-110 hover:cursor-pointer'>Contato</li>
          </ul>
        </div>*/}
      </div>
      <div id='hero-section' className='bg-center flex flex-col justify-center h-[80vh] sm:h-screen bg-white md:bg-hero bg-hero-mobile top-10'>
        <div className='px-8 pb-8 text-left md:text-center md:relative bottom-7 bg-[#00000069]'>
          <h1 className='mt-8 mb-4 text-5xl text-white !opacity-1 font-bold'>Efeito cimento queimado</h1>
          <p className='mb-4 text-2xl text-white'>O Efeito decorativo que vai <b>transformar</b> o seu lar.</p>
          <div>
            <button onClick={() => document.getElementById("nossos-projetos").scrollIntoView({ behavior: 'smooth' })} className='p-2 font-bold text-white transition-all bg-gray-600 rounded-md sm:px-8 sm:text-xl hover:bg-gray-500 sm:hover:scale-110'>CONHEÇA NOSSOS PROJETOS</button>
          </div>
        </div>
      </div>
      <div id='antes-e-depois' className='bg-white md:flex'>
        <div className='self-center max-w-4xl p-8 md:px-12 sm:relative sm:bottom-20'>
          <h2 className='text-4xl font-bold sm:text-5xl'>Transforme o seu Ambiente</h2>
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
        <div className='self-center mx-2 rounded-md sm:mx-0'>
          {
            <ReactCompareSlider
              position={43}
              className='md:max-w-[38vw] mx-2 sm:my-20 sm:mx-0 my-10 rounded-lg'
              itemOne={<ReactCompareSliderImage src="/antes.webp" alt="Image one" />}
              itemTwo={<ReactCompareSliderImage src="/depois.webp" alt="Image two" />}
            />
          }
        </div>
      </div>
      <div className='text-center bg-white sm:mx-5'>
        <h3 id='nossos-projetos' className='px-2 py-20 text-4xl font-bold text-black sm:text-5xl'>
          Sonhos Já Realizados
        </h3>
        <Gallery images={images} rowHeight={400} />
      </div>
      <div className='text-center'>
        <h3 className='px-4 mt-20 text-4xl font-bold text-center text-black mb-14 sm:text-5xl'>
          O que os nossos clientes dizem
        </h3>
        <Carousel
          statusFormatter={(current, total) => <span className='text-lg font-semibold text-black'>{current} de {total}</span>}
          showThumbs={false}
          autoPlay
          className='max-w-md mx-8 !mb-12 rounded-md sm:max-w-xl sm:m-auto bg-white-400'
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
      <div className='flex flex-col sm:justify-between sm:flex-row sm:m-28'>
        <div className='flex flex-col self-center mx-6 my-12 sm:relative sm:max-w-2xl sm:bottom-20'>
          <h2 className='mb-2 text-4xl font-bold sm:text-5xl'>Acompanhe o nosso trabalho</h2>
          <p className='mt-4 text-2xl font-light'>Diariamente compartilhamos o nosso trabalho no Instagram.</p>
          <p className='mt-4 text-2xl font-light'><b>Siga o nosso perfil</b> para se manter atualizado e receber as nossas novidades em primeira mão.</p>
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
        <div className='flex justify-center'>
          <InstagramEmbed url="https://www.instagram.com/p/CnzDaTcObrk/" width={500} height={740} captioned />
        </div>
      </div>
      <h3 className='px-2 mt-20 text-4xl font-bold text-center text-black mb-14 sm:text-5xl'>
        Onde estamos localizados
      </h3>
      <div id='mapwrapper' className='sm:mb-20'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13817.183277125887!2d-51.2300568!3d-30.02837!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd332597cdb14f1f5!2sFRG%20Pinturas%20e%20Decora%C3%A7%C3%B5es!5e0!3m2!1sen!2sbr!4v1674849156551!5m2!1sen!2sbr" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
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
            <div className='flex justify-center py-4 bg-black'>
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
            <p className='mb-4 text-white'>{new Date().getFullYear()} - Todos os direitos reservados. </p>
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

const CarouselItem = ({ text, author, reviewLink, className }) => {
  return (
    <div className={'flex flex-col min-h-[530px] sm:min-h-[425px] justify-center items-center font-sans' + className}>
      <div className='px-8 pb-8 text-lg font-light sm:text-2xl sm:text-center'>
        &quot;{text}&quot;
      </div>
      <div className='flex'>
      <Link className='text-xl' href={reviewLink}>- {author}</Link>
      </div>
    </div>
  )
}

// const Map = ({ location, zoomLevel, mapsApiKey }) => (
//   <div className="map">
//     <h2 className="map-h2">Come Visit Us At Our Campus</h2>

//     <div className="google-map">
//       <GoogleMapReact
//         bootstrapURLKeys={{ key: mapsApiKey }}
//         defaultCenter={location}
//         defaultZoom={zoomLevel}
//       >
//         <LocationPin
//           lat={location.lat}
//           lng={location.lng}
//           text={location.address}
//         />
//       </GoogleMapReact>
//     </div>
//   </div>
// )

// const LocationPin = ({ text }) => (
//   <div className="pin">
//     <Icon icon={locationIcon} className="pin-icon" />
//     <p className="pin-text">{text}</p>
//   </div>
// )

function MyMapComponent({ mapsApiKey }) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: mapsApiKey
  })

  const [map, setMap] = useState(null)

  const onLoad = useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={17}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      { /* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  ) : <></>
}

const Navbar = () => {
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
          <button type="button" aria-haspopup="menu" className='justify-center !text-lg font-semibold'>
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