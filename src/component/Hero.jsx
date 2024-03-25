

import React from 'react';
import HeroImg from '../assets/hero-img.png';
import { BiChevronDown } from 'react-icons/bi';
import Bg from '../component/Bg';
import Typewriter from 'typewriter-effect';
import resume from '../assets/Resume.pdf'; // Assuming this is a string

const Hero = () => {
  return (
    <div>
      <title>Krishna Chaitanya | UX Designer & Problem Solver</title>

      <section className="bg-primary px-4 md:px-20 text-grey md:pt-48 md:py-32 pt-32">
        <div className="container mx-auto flex md:flex-row items-center justify-center">
          <div className="flex flex-col justify-center items-center md:items-start md:flex-row md:w-[80%]">
            <img
              src={HeroImg}
              alt="Krishna Chaitanya, UX Designer and Problem Solver"
              className="w-[400px] mb-8 md:mb-0 md:mr-16 sm:w-[300px]"
            />

            <div>
              <h1 className="text-2xl lg:text-3xl text-white">
                Hi!  I'm Krishna Chaitanya
              </h1>
              <h2 className="text-xl hero-text text-[#825aee]">UX Designer • Problem Solver</h2>

              <Typewriter
                className="text text-2xl lg:text-4xl py-8"
                onInit={(typewriter) => {
                  typewriter
                    .typeString('UX Designer')
                    .callFunction(() => {})
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString('Problem Solver')
                    .callFunction(() => {})
                    .pauseFor(500)
                    .start();
                }}
                options={{ loop: true }}
              />

              <p className="text-white py-2 lg:text-lg z-1 pb-8">
                I design innovative digital solutions by applying creative UX design methodologies, transforming concepts into captivating user experiences that resonate. I utilize my expertise in user research, wireframing, prototyping, user flows, information architecture, and Design Thinking.
              </p>

              <p className="text-[#a1a1a1]">🟢 Available for full-time opportunities</p>
              <br />
              <a
                href={resume}
                download="Krishna_Chaitanya_Resume.pdf"
                className="bg-[#825aee] hover:bg-[#4A4453] text-white py-3 px-6 rounded-full focus:outline-none focus:shadow-outline"
              >
                Download my Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="downarrow flex justify-center items-center text-white bg-primary">
        <BiChevronDown size={24} />
      </div>

      <script type='text/javascript' id='pagemapIdscript' defer src='https://bot.linkbot.com/bot.js#35223-12ca2?property-id=35223-12ca2'></script>
    </div>
  );
};

export default Hero;


