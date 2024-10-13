import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaBasketballBall,
  FaPinterestP,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div className="container flex justify-between py-9 border-t">
        <p>© 2020 CaliberThemes</p>
        <ul className="flex gap-5 ">
          <li>
            <a href="#">
              <FaFacebookF />
            </a>
          </li>
          <li>
            <a href="#">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="#">
              <FaBasketballBall />
            </a>
          </li>
          <li>
            <a href="#">
              <FaPinterestP />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
