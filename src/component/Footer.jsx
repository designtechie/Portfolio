import React from 'react';

const Footer = () => {
 return (
    <footer className="bg-primary" id="contact">
      <div className="w-full mx-auto max-w-screen-xl  md:flex md:items-center md:justify-between">
        <div className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Krishna Chaitanya</span>
        </div>
        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
          <li>
            <a href="mailto:youremail@example.com" className="hover:underline me-4 md:me-6">krishnachaitanya0503@gmai.com</a>
          </li>
          <li>
            <a href="tel:+1234567890" className="hover:underline me-4 md:me-6"></a>
          </li>
        </ul>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 deisgntechie. All Rights Reserved.</span>
    </footer>
 );
};

export default Footer;
