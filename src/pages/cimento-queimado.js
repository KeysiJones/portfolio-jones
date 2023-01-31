import { Footer } from '@/components/Footer';
import { Header } from './_document';

export default function CimentoQueimado() {
    return (
        <div className={'h-[92vh] text-black bg-white transition-all'}>
            <Header />
            <div id='hero-section' className='bg-center flex flex-col justify-center h-[80vh] sm:h-screen bg-white md:bg-cimento-queimado-hero bg-cimento-queimado-mobile-hero top-10'>
                <div className='px-8 pb-8 text-left md:text-center md:relative bottom-7 bg-[#00000069]'>
                    <h1 className='mt-8 mb-4 text-5xl lg:text-6xl text-white !opacity-1 font-bold'>Efeito cimento queimado</h1>
                    <p className='mb-4 text-2xl text-white lg:text-3xl'><b>Transforme</b> o seu lar </p>
                    <div>
                        <button onClick={() => document.getElementById("nossos-projetos").scrollIntoView({ behavior: 'smooth' })} className='p-2 font-bold text-white transition-all bg-gray-600 rounded-md sm:px-8 sm:text-xl hover:bg-gray-500 sm:hover:scale-110'>CONHEÇA NOSSOS PROJETOS</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}