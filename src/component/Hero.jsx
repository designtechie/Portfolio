import React from 'react';
import HeroImg from '../assets/hero-img.png';
import { BiChevronDown } from 'react-icons/bi';
import Bg from '../component/Bg';
import Typewriter from 'typewriter-effect';


import {
  AiOutlineLinkedin,
  AiOutlineBehance,
  AiOutlineDribbble,
  AiOutlineGithub,
  AiOutlineMedium,
} from 'react-icons/ai';

const Hero = () => {
  return (
    <div>
      <section className="bg-primary px-4 md:px-20 text-grey md:pt-40 md:py-32 pt-32 ">
        <div className="container mx-auto flex  md:flex-row items-center justify-center">
          <div className="flex flex-col justify-center items-center md:items-start md:flex-row md:w-[80%]">
            <img
              src={HeroImg}
              alt="hero img"
              className="w-[400px] mb-8 md:mb-0 md:mr-16 sm:w-[300px]"
            />
            <div className="hero-info pb-5 md:pb-0 text-center md:text-left">

           
              <h1 className="text-2xl lg:text-3xl text-white">
                Hi!👋🏻
                <br/>
                I am{' '}
                <span className="hero-text text-[#825aee]">Krishna Chaitanya </span>
                  
                
                
                <Typewriter 
  className="text text-2xl lg:text-4xl py-8"
  onInit={(typewriter) => {
    typewriter
      .typeString('UX Designer')
      .callFunction(() => {
       
      })
      .pauseFor(1000) 
      .deleteAll()
      .typeString('Problem Solver')
      .callFunction(() => {
        
      })
      .pauseFor(500) 
      .start();
  }}
  options={{
    loop: true 
  }}
/>

               
              </h1>
             
              <p className=" text-white py-2  lg:text-lg ">
              I design innovative digital solutions by applying creative UX design methodologies. 
            transforming concepts into captivating user experiences that resonate, utilizing expertise in user research, wireframing, prototyping, user flows, information architecture, and Design Thinking.
              </p>
              <div className="flex justify-center md:justify-start icons">
                <a
                  href="https://www.linkedin.com/in/designtechie/"
                  className="pr-4 inline-block text-white hover:text-[#825aee]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {' '}
                  <AiOutlineLinkedin size={40} />{' '}
                </a>
                <a
                  href="https://www.behance.net/designtechie"
                  alt="behance"
                  className="pr-4 inline-block text-white hover:text-[#825aee]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {' '}
                  <AiOutlineBehance size={40} />{' '}
                </a>
                <a
                  href="https://dribbble.com/designtechie"
                  alt="dribble"
                  className="pr-4 inline-block text-white hover:text-[#825aee]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {' '}
                  <AiOutlineDribbble size={40} />{' '}
                </a>
                <a
                  href="https://github.com/designtechie"
                  alt="github"
                  className="pr-4 inline-block text-white hover:text-[#825aee]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {' '}
                  <AiOutlineGithub size={40} />{' '}
                </a>
                <a
                  href="https://medium.com/@designtechie"
                  alt="medium"
                  className="pr-4 inline-block text-white hover:text-[#825aee]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {' '}
                  <AiOutlineMedium size={40} />{' '}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="downarrow flex justify-center items-center text-white bg-primary ">
        <BiChevronDown size={24} />
      </div>
      <Bg />
    </div>
  );
};

export default Hero;
