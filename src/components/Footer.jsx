import React from 'react';
import Dropdown from './Dropdown';

const Footer = () => {
     return (
          <div className="bg-black bg-opacity-90 text-white py-8 px-10 md:px-24 lg:px-40">
               <p className="text-center md:text-left">Questions? Call 000-800-919-1743 (Toll-free)</p>

               <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm my-8 cursor-pointer underline">
                    <p>FAQ</p>
                    <p>Terms of Use</p>
                    <p>Cookie Preferences</p>
                    <p>Help Center</p>
                    <p>Privacy</p>
                    <p>Corporate Information</p>
               </div>
            <Dropdown/>
          </div>
     );
}

export default Footer;
