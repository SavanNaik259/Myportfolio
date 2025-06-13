import React from "react";
import aimg1 from './Images/IMG_20240207_190532.jpg';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const About =()=>{
    return (
      <>
       <section className="about-section row-width">
      <h1 className="common-text">about us</h1>
      <hr className='w-25 mx-auto'/>
      <div className="card mb-3 r-card" style={{ maxWidth: '94vw',border:'none' }}>
  <div className="row ">
    <div className="col-md-4 d-flex justify-content-center align-items-center">
     <LazyLoadImage effect="blur" src={aimg1} className=" a-img img-fluid text-center lazy-load-image" alt="..."/>
    </div>
    <div className="col-md-8 d-flex justify-content-center align-items-center">
      <div className="card-body">
        <p className="card-text lh-base">•Proficient in HTML, CSS, JavaScript, React.js, Node.js, Express.js, and MongoDB.

•Skilled in both front-end and back-end development.

•Strong foundation in building responsive and user-friendly interfaces using HTML and CSS.

•Expertise in client-side scripting with JavaScript and React.js for enhanced interactivity.

•Experienced in working with Node.js and Express.js to develop robust APIs and backend services.

•Proficient in database management with MongoDB.</p>

      </div>
    </div>
  </div>
</div>
</section>
   </>
    );
  }
  export default About;
