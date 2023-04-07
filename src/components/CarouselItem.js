import Image from 'next/image';

function CarouselItem({ cardImage, link, description, openLink }) {
    return (
      <div 
        onClick={() => window.open(link)}
        className='flex flex-col mx-4 bg-white rounded-md !h-[50vh] my-20'>
        <Image alt={description} className='rounded-t-xl' src={cardImage} width={1000} height={1000} />
        <h3
          className={`text-2xl text-gray-700 text-center pb-4 m-2 font-semibold`}
        >
          {description}
        </h3>
      </div>
    );
  }
  
  export { CarouselItem };