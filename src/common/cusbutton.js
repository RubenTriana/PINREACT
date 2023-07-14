import React from 'react'
import './custombutton.css'
import { Link } from 'react-scroll';




function Custombutton({ text, link }) {

  return (
    <Link activeClass="active" to={link} spy={true} smooth={true} duration={50} className="custom-button">
      {text}
    </Link>
  );
}

export default Custombutton;