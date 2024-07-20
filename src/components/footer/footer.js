import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer  mt-auto py-3 ">
      <div className="container d-flex justify-content-between">
        <span className="">@ Geek © 2024</span>
        <span className=''>Made by AhmedFahmy <a href="https://www.linkedin.com/in/ahmed-mohamed-6956b9195/" target="_blank" rel="noopener noreferrer" className='px-2' > <FontAwesomeIcon icon={faLinkedin} style={{color: "#ffffff",}} size="lg" /> </a>
        <a href="https://github.com/ahmedfahmy36" target="_blank" rel="noopener noreferrer"  ><FontAwesomeIcon icon={faGithub} style={{color: "#ffffff",}} size='lg' />  </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
