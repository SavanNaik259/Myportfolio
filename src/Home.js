import React, { useEffect } from 'react';
import Typed from 'typed.js';
import img122 from './Images/IMG_20250527_080314.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
 import './App.css';
const Home =()=>{
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };
  useEffect(() => {
    const options = ['Web developer', 'Web designer', 'Affiliate marketer'];

    const typed = new Typed('.multiple-text', {
      strings: options,
      typeSpeed: 100,
      backSpeed: 50,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);
    return (
      <>

        <section className="bg-main bg-color hero-section row-width">
      <div className="container">
<div className="row row-width">
<div className="col-12 col-md-12 col-lg-6 d-flex flex-column justify-content-center align-items-center align-items-lg-start">
  <h3 className='text-white'>Hello It's Me</h3>
  <h1 className='text-capitalize text-white fw-bolder'>savan naik</h1>
  <h3 className='text-white'>And I'm a <span className="multiple-text text-transform-capitalize"></span></h3>
  <p className="text-capitalize text-grey mt-1 mb-10 text-center text-lg-start">Need to start your startup to go online with a professional website, Contact us</p>
  <div className="text-center text-lg-start">
  <button onClick={scrollToBottom} className="text-capitalize btn btn-primary px-5 py-2 scroll-button">contact us</button>
  </div>
</div>
  <div className='col-12 col-md-12 col-lg-6'>
<div className='text-center text-lg-end w-100 text-md-center img-padding'>
<LazyLoadImage effect="blur" src={img122} loading="lazy" alt='portfolio img img-fluid' className='portfolio-img lazy-load-image'/>
</div>
</div>  
</div>
 </div>
 <div className="custom-shape-divider-bottom-1717076482">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
    </svg>
</div>
        </section>
      </>
    );
  }
  export default Home;

                                                                                                                                                                                                                                                                                        
