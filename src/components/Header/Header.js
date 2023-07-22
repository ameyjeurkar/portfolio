import React from 'react';
import './../Header/Header.css';
import { Link } from "react-scroll";
import { HeaderJson } from '../../assets/json/headers';

const Header = () => {
    return (
      <div className="header-container my-2">
        {HeaderJson.map((element) => (
          element.display && <div className="header mx-2 py-1" key={element.displaySequence}>
            <Link
              className="header-item"
              activeClass="active"
              to={element.id}
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              {element.label.toUpperCase()}
            </Link>
          </div>
        ))}
      </div>
    );
}

export default Header;