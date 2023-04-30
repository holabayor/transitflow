import React from 'react';
import { logo } from '../assets';
import { headerInfo, navLinks, socialLinks } from '../constants';

const Header = () => {
  return (
    <>
      <header className="flexCenter bg-primary2 overflow-hidden">
        <nav className="pageWidth">
          <div className="flex justify-between items-center py-10">
            <img src={logo} alt="" className="h-[32px] object-contain" />
            <div className="hidden md:flex gap-8">
              {headerInfo.map((info) => (
                <div
                  key={info.name}
                  className="flex items-center gap-4 leading-4"
                >
                  <img src={info.img} alt={info.name} className="w-[50px]" />
                  <p className="text-white text-[12px]">
                    {info.text}
                    <br />
                    {info.details}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </nav>
      </header>
      <div className="menu-bg flexCenter">
        <div className="pageWidth hidden md:flex  flex-1 justify-between">
          <div className="flex justify-between items-center">
            <ul className="list-none flex items-center">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.name}
                  className={`text-white text-[14px] hover:border-b-2 ${
                    index !== navLinks.length - 1 ? 'mr-8' : ''
                  }`}
                >
                  <a href={nav.link}>{nav.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-10">
            <ul className="list-none flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <li key={social.name}>
                  <a href={social.link}>
                    <img src={social.icon} alt={social.name} />
                  </a>
                </li>
              ))}
            </ul>
            <div className="bg-white px-12 py-4">Request Quote</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
