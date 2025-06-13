import React from "react";
const Contact =()=>{
  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};
    return (
      <>
  <section className="bg-main bg-color contact-section hero-section text-white  d-flex flex-column justify-content-center align-items-center "> 
  <div className="mx-auto row-width">
         <h1 className="common-text text-white">book our service / contact us</h1>
           <hr className='w-50 mx-auto text-white'/>
         </div>
         <div>
    
          </div>
  <div className='container'>
             <form action="https://formspree.io/f/myzggwqv" method="post">
          <div className="mb-3">
          <label htmlFor="firstName" className="form-label">First Name</label>
  <input className="form-control form-con"                id="exampleFormUserFirstName"
          type="text" 
          name="First Name"
          placeholder="First Name"
          autoComplete="off"
          required
      />
          </div>
<div className="mb-3">
          <label htmlFor="lastName" className="form-label"> Last Name</label>
  <input className="form-control" id="exampleFormUserLastName"
          type="text" 
          name="Last Name"
          placeholder="Last Name"
          autoComplete="off"
          required
      />
          </div>
     <div className="mb-3">
  <label htmlFor="email"className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlnumber" placeholder="name@example.com"
           name="Eamil"
           autoComplete="off"
           required
      />
 </div>
      <div className="mb-3">
  <label htmlFor="number" className="form-label">Mobile Number</label>
  <input 
    type="tel" 
    className="form-control" 
    id="number" 
    name="number" 
    pattern="\d{10,}" 
    placeholder="9364271352" 
    autoComplete="off" 
    required 
  />
</div>
 <div className="mb-3">
  <label htmlFor="Textarea" className="form-label"> Address (optional)</label>
  <textarea className="form-control"          id="exampleFormControlTextarea1"        rows="3"
          name="address"
           autoComplete="off"
      ></textarea>
</div>
<div className="mb-3">
  <label htmlFor="Textarea" className="form-label"> Textarea (optional)</label>
  <textarea className="form-control"          id="exampleFormControlTextarea1"        rows="3"
          name="Message"
           autoComplete="off"
      ></textarea>
</div>

  <button type="submit" className="btn btn-primary row-width">Submit</button>
</form>
    <div className="text-center">
        <button onClick={scrollToTop} className="text-capitalize  btn btn-secondary scroll-button btn-width">Scroll top <i class="fa-solid fa-arrow-up-long"></i></button>
  </div>
</div>  
 <div className="custom-shape-divider-top-1717932437">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
    </svg>
</div> 

  </section>

        </>
    );
  }
  export default Contact;
