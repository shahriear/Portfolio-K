import React from 'react';

const footer = () => {
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

export default footer;
