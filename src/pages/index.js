import Image from 'next/image'
import { Inter } from '@next/font/google'
// import styles from '@/styles/Home.module.css'
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
// import gmailIcon from '../../public/gmail.svg'
// import phoneIcon from '../../public/phone.svg'
import { Gallery } from "react-grid-gallery";
import { InstagramEmbed } from 'react-social-media-embed';
import { Carousel } from 'react-responsive-carousel';
import GoogleMapReact from 'google-map-react'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { useCallback, useState } from 'react';
import { Sidebar } from '@/components/Sidebar';

export async function getStaticProps() {
  return { props: { mapsApiKey: process.env.REACT_MAPS_API_KEY } }
}

const containerStyle = {
  width: '1000px',
  height: '600px',
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

// const location = {
//   address: 'R. Siqueira Campos, 1171 - Centro Histórico, Porto Alegre - RS, 90010-001',
//   lat: -30.02837,
//   lng: -51.2322455,
// } // our location object from earlier

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
        <Image src='/logo.jpg' alt='' width={60} height={60} className='transition-all hover:cursor-pointer rounded-full !opacity-1 hover:scale-110' onClick={() => window.open('https://www.instagram.com/frgpinturas/', '_blank')} />
        <Sidebar right className="sidebar-menu" />
        <div className='desktop-menu'>
          <ul className={'flex items-center h-full !opacity-1'}>
            <li className='mx-2 transition-all hover:scale-110 hover:cursor-pointer' onClick={() => document.getElementById("hero-section").scrollIntoView({ behavior: 'smooth' })}>Início</li>
            <li className='mx-2 transition-all hover:scale-110 hover:cursor-pointer' onClick={() => document.getElementById("nossos-projetos").scrollIntoView({ behavior: 'smooth' })}>Nossos Projetos</li>
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
            <button onClick={() => document.getElementById("nossos-projetos").scrollIntoView({ behavior: 'smooth' })} className='p-2 font-bold text-white transition-all bg-gray-900 rounded-md sm:px-8 sm:text-xl hover:bg-gray-500 sm:hover:scale-110'>CONHEÇA NOSSOS PROJETOS</button>
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
          {
            <ReactCompareSlider
              position={43}
              className='md:max-w-[35vw] mx-2 sm:my-20 my-10 rounded-lg'
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
      <h3 className='px-4 mt-20 text-4xl font-bold text-center text-black mb-14 sm:text-5xl'>
        O que os nossos clientes dizem
      </h3>
      <Carousel
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
          text="Pedro é muito profissional e seu serviço é impecável: rápido, limpo e perfeito. O contratei 2 vezes para consertar serviços que outro pintor (que dizia saber fazer cimento queimado) fez e que não ficaram como eu queria.
            Ele consegue deixar exatamente como o cliente deseja: com o efeito mais marcado ou mais esfumado e delicado.
            Super indico!"
        />
        <CarouselItem author="Gabriela Schein" text="Empresa ágil, atenciosa e cordial no atendimento. Tive um rápido retorno de orçamento e execução da pintura. Pratica um valor de acordo com o mercado. O Pedro é um profissional cuidadoso e muito detalhista, além de muito disposto. Agradeço de coração a execução da minha parede de cimento queimado, ficou maravilhosa, exatamente como eu queria." />
        <CarouselItem author="Aislan" text="Realizei a pintura do meu apartamento com a FRG e tive uma ótima experiência! Foram muito profissionais desde o primeiro atendimento, para elaboração do orçamento, até a finalização do trabalho! Recomendo!" />
        <CarouselItem author="Marcus Vinícius" text="Super indico! Profissional qualificado, com preço justo, pontualidade no prazo e um trabalho impecável, desde o orçamento até a finalização da obra. Por mais profissionais assim." />
      </Carousel>
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
      <div className='h-screen'>
        <MyMapComponent mapsApiKey={mapsApiKey} />
      </div>
      {/* <Map location={location} zoomLevel={17}/> */}
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

const CarouselItem = ({ text, author }) => {
  return (
    <div className='min-h-[530px] sm:min-h-[450px]'>
      <div className='px-8 pt-8 pb-12 text-lg font-light sm:text-2xl sm:text-center'>
        &quot;{text}&quot;
      </div>
      <p className='text-xl'>- {author}</p>
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
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      { /* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  ) : <></>
}