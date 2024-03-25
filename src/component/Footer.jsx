import React from 'react';
import {
  AiOutlineBehance,
  AiOutlineDribbble,
  AiOutlineGithub,
  AiOutlineMedium,
} from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className="bg-primary text-white" id="contact">
      <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="mb-6 md:mb-0">
          <div className="text-gray-300 mb-2 text-2xl md:text-4xl font-semibold">Get in touch</div>
          <div className="text-white mb-2">Krishna Chaitanya</div>
          <a href="mailto:krishnachaitanya0503@gmail.com" className="hover:underline text-white">
            krishnachaitanya0503@gmail.com
          </a>
        </div>

        <div className="flex sm:flex justify-end sm:"> 
         <div className="md:flex space-x-4"> 

            <a
              href="https://www.behance.net/designtechie"
              className="mr-4 text-white hover:text-[#825aee]"  
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineBehance size={32} />
            </a>
            <a
              href="https://dribbble.com/designtechie"
              className="mr-4 text-white hover:text-[#825aee]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineDribbble size={32} />
            </a>
            <a
              href="https://medium.com/@designtechie"
              className="mr-4 text-white hover:text-[#825aee]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineMedium size={32} />
            </a>
            <a
              href="https://github.com/designtechie"
              className="mr-4 text-white hover:text-[#825aee]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineGithub size={32} />
            </a>
          </div>
        </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span className="block text-sm text-gray-300 text-center">© 2024 designtechie. All Rights Reserved.</span>
    </footer>
  );
};

export default Footer;
