import React from 'react';
import './footer.css';
import Imalogo from '../../assets/135321382_15.jpg';

function Footer() {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='row align-items-center justify-content-between'>
          <div className='col-lg-10 col-sm-12'>
            <p className='text-center text-lg-start mt-2'>© 2023. Todos los derechos reservados.</p>
          </div>
          <div className='col-lg-2 col-sm-12 text-center'>
            <img src={Imalogo} alt="Logo"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;