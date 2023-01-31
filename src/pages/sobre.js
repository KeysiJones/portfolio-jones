import { Footer } from '@/components/Footer';
import Image from 'next/image';
import { Header } from './_document';

export default function Sobre() {
    return (
        <div className={'h-[92vh] text-black bg-white transition-all'}>
            <Header/>
            <div id='hero-section' className='bg-center flex flex-col justify-center h-[80vh] sm:h-screen bg-white md:bg-about-hero bg-about-hero-mobile top-10'>
                <div className='px-8 pb-8 text-left md:text-center md:relative bottom-7 bg-[#00000069]'>
                    <h1 className='mt-8 mb-4 text-5xl lg:text-6xl text-white !opacity-1 font-bold'>Conheca a nossa História</h1>
                    <p className='mb-4 text-2xl text-white lg:text-3xl'><b>Transformando lares desde 2016</b> </p>
                    <div>
                        <button onClick={() => document.getElementById("nossos-projetos").scrollIntoView({ behavior: 'smooth' })} className='p-2 font-bold text-white transition-all bg-gray-600 rounded-md sm:px-8 sm:text-xl hover:bg-gray-500 sm:hover:scale-110'>CONHEÇA NOSSOS PROJETOS</button>
                    </div>
                </div>
            </div>
            <div className='justify-center bg-white lg:flex'>
                <div className='self-center p-8 my-8 text-left sm:text-center max-w-7xl lg:px-12 lg:relative'>
                    <h2 className='mb-8 text-4xl font-bold sm:text-5xl'>Nossa Historia</h2>
                    <p className='mt-4 text-2xl font-light sm:text-3xl'>
                        Somos uma Empresa Familiar com mais de 10 anos de experiência no mercado ! 
                        <br/>
                        <br/>
                        Nos especializamos na aplicacao de Efeitos Decorativos,
                        para Você poder realizar aquele seu projeto que exige arte, estilo e personalização, transformando seu ambiente em um lugar mais moderno
                        e sofisticado
                    </p>
                    <div className='mt-12'>
                        <button
                            onClick={() => window.open('https://api.whatsapp.com/send/?phone=5551991549280&text=Ol%C3%A1%2C+gostaria+de+agendar+um+Or%C3%A7amento+Gratuito%21&type=phone_number&app_absent=0bit.ly/whatsapp-frgpinturas', '_blank')}
                            className='p-2 font-bold text-white transition-all bg-gray-900 rounded-md sm:px-8 sm:text-xl hover:bg-gray-500 sm:hover:scale-110'
                        >
                            SOLICITAR ORÇAMENTO GRATUITO
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}