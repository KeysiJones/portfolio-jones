function CarouselItem({ cardImage, link, description, openLink }) {
    return (
      <div className='flex flex-col mx-4 bg-white rounded-md !h-[50vh] my-20'>
        <img className='rounded-t-xl' alt='project' src={cardImage} />
        <h3
          className={`text-2xl text-gray-700 text-center pb-4 m-2 font-semibold`}
        >
          {description}
        </h3>
      </div>
    );
  }
  
  export { CarouselItem };