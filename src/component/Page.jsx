import React from 'react';
import Rythmic from '../assets/Rythmic.png';
import Stellar from '../assets/Stellar Stays.png';

const Card = ({ imageSrc, altText, title, description, caseStudyLink }) => {
  return (
   
   <section className='pb-8 '>
   <div className="relative flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full max-w-[48rem] flex-row ">
      <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0 ">
        <img
          src={imageSrc}
          alt={altText}
          className="object-cover w-full h-full rounded-xl"
        />
      </div>
      <div className="p-6 ">
        <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
          {title}
        </h6>
        <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700 ">
          {description}
        </p>
        <a href={caseStudyLink} className="inline-block">
          <button className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20">
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
              className="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </a>
      </div>
    </div>
    </section>
  );
};




const Page = () => {
  const cardData = [
    {
      imageSrc: Rythmic,
      altText: 'Green double couch with wooden legs',
      title: 'Rhythmic music app',
      description: 'Rhythmic music app is a unique mobile application that combines multiple music streaming services like Spotify, JioSaavn, Gaana, etc. It generates a personalized playlist by using machine learning algorithms and user preferences..',
      caseStudyLink: 'https://medium.com/@designtechie/rhythmic-music-app-a-case-study-in-designing-a-user-centered-music-listening-experience-433f7c1d59d9',
    },
    {
      imageSrc: Stellar,
      altText: 'Green double couch with wooden legs',
      title: 'Case study 2',
      description: 'Description for case study 2.',
      caseStudyLink: 'https://www.figma.com/proto/PHXvJcOpQpaVMDZN9OLE7I/Stellar-Stays-(Mercor)?page-id=215%3A5485&type=design&node-id=215-5487&viewport=445%2C708%2C0.04&t=m3XwbPHMZ2Y9DxYv-1&scaling=scale-down-width&mode=design', 
    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      altText: 'Green double couch with wooden legs',
      title: 'Case study 3',
      description: 'Description for case study 3.',
      caseStudyLink: 'https://www.example.com/case-study-3', 
    },
  ];

  return (
    <section className="Projects bg-primary text-white px-4 py-16 md:px-16 md:py-32" id="projects">
      <div className="container mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My projects</h2>
          <p className="text-base md:text-lg text-wrap w-1/2">
            There are additional projects I've handled under confidentiality that aren't featured in
            my portfolio. However, I'm available for a call to discuss comprehensive project case
            studies.
          </p>
        </div>

        <div className="flex flex-wrap -mx-4">
          {cardData.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>



            
          
        

    </section>
  );
};

export default Page;
