import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green-600 text-black-300 py-4 absolute   w-full">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <p>&copy; 2024 Your Blog Name. All rights reserved.</p>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-gray-100">Home</a></li>
            <li><a href="#" className="hover:text-gray-100">About</a></li>
            <li><a href="#" className="hover:text-gray-100">Contact</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
