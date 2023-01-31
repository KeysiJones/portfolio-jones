import Image from 'next/image'

export const Footer = () => (
    <div className='flex pt-8 text-center bg-black'>
        <div className='flex flex-col justify-center w-full'>
            <h2 className='mx-4 text-4xl font-bold text-white'>CONTATO</h2>
            <div className='flex flex-col items-start self-center mx-4 mt-4 sm:items-center md:flex-row'>
                <div className='flex items-center my-1'>
                    <Image src="/white-envelope.png" alt='email logo' width={50} height={50} />
                    <a href="mailto:pedrofragaprofissional@gmail.com" className='mx-4 text-white text-md sm:text-xl'>pedrofragaprofissional@gmail.com</a>
                </div>
                <div className='flex items-center my-1'>
                    <Image src="/white-phone.png" alt='email logo' width={50} height={50} />
                    <a href="tel:+5551991549280" className='mx-4 text-white text-md sm:text-xl'>Telefone: (51) 9154-9280</a>
                </div>
            </div>
            <div>
                <p className='my-4 text-white'>&copy; {new Date().getFullYear()} - FRG PINTURAS E DECORAÇÕES</p>
            </div>
        </div>
    </div>
)