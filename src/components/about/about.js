import React from 'react';
import './about.css';

function About() {
  return (
    <div name='about' className='py-5 my-5'>
      <div className="row py-5 my-5">
        <div className='col border-about'></div>
        <div className="col-7">
          <h2>Descubre la belleza que te rodea</h2>
          <h2 className='subtittle-title pb-4'>Vive en Modo Neva</h2>
          <p>NEVA va más allá de ser una simple marca. Representamos un estilo de vida, una forma de ser y vivir. Nuestros códigos y costumbres se integran en cada aspecto de tu día a día, tanto en tu mundo interno como en tu entorno externo. NEVA es sinónimo de vivir en Modo NEVA.<br></br>
            Nos enorgullece presentarte nuestra nueva colección, Astro 🛸, una serie de gorras que provienen de otro planeta. Cada modelo de la colección presenta una combinación única y vibrante de colores. Estas gorras han sido cuidadosamente elaboradas con el más alto nivel de calidad utilizando tejido corduroy premium. Nuestro compromiso es brindarte productos que resalten tu estilo y te acompañen en todas tus aventuras ¡No dejes pasar la oportunidad de tener la tuya!
          </p>
        </div>
        <div className='col'></div>
      </div>
    </div>
  );
}

export default About;