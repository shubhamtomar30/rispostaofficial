import Head from 'next/head';
import React from 'react';

const Contact_Us = () => {
     return (
          <div>
               <Head>
                    <title>Contact Us</title>
               </Head>
               <div className='container-fluid contacthead mt-3 mb-3' data-aos='fade-up' data-aos-delay='100' data-aos-duration='500'>
                    <div className='overlay'></div>
                    <div className='row h-100'>
                         <div className='col-md-4'></div>
                         <div className='col-md-4 text-center text-light my-auto headtext text-uppercase'>Contact us</div>
                         <div className='col-md-4'></div>
                    </div>
               </div>

               <div className='container-fluid mt-5 mb-5' data-aos='fade-up' data-aos-delay='200' data-aos-duration='1000'>
                    <div className='container'>
                         <section id='contact' className='contact'>
                              <div className='container bg-white'>
                                   <div className='row'>
                                        <div className='col-lg-6' data-aos='fade-up' data-aos-delay='200' data-aos-duration='1000'>
                                             <div className='info-box mb-4'>
                                                  <i className='bx bx-map'></i>
                                                  <h3>Our Address</h3>
                                                  <p>Beside Rolling Hills and Ramky Towers , Gachibowli,500032</p>
                                             </div>
                                        </div>

                                        <div className='col-lg-3 col-md-6' data-aos='fade-up' data-aos-delay='200' data-aos-duration='1000'>
                                             <a href='mailto:info@rispostacorp.com'>
                                                  <div className='info-box mb-4'>
                                                       <i className='bx bx-envelope'></i>
                                                       <h3>Email Us </h3>
                                                       <p>info@rispostacorp.com (Click Here)</p>
                                                       {/* <p>( Click Here To Send A Mail)</p> */}
                                                  </div>
                                             </a>
                                        </div>

                                        <div className='col-lg-3 col-md-6' data-aos='fade-up' data-aos-delay='200' data-aos-duration='1000'>
                                             <div className='info-box  mb-4'>
                                                  <i className='bx bx-phone-call'></i>
                                                  <h3>Call Us</h3>
                                                  <p className=''>
                                                       <a>+91 9985813868</a>
                                                  </p>
                                             </div>
                                        </div>
                                   </div>

                                   <div className='row'>
                                        <div className='col-lg-6 ' data-aos='fade-up' data-aos-delay='200' data-aos-duration='1000'>
                                             <iframe className='mb-4 mb-lg-0' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.260434455598!2d78.36312181467156!3d17.44724468804272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93f3322b921d%3A0x23c617be7a144183!2sIndiQube%20Pearl!5e0!3m2!1sen!2sin!4v1661425597768!5m2!1sen!2sin' style={{ border: '0px', width: '100%', height: '384px' }}></iframe>
                                        </div>

                                        <div className='col-lg-6' data-aos='fade-up' data-aos-delay='200' data-aos-duration='1000'>
                                             <form action='' method='post' role='form' className='php-email-form'>
                                                  <div className='row'>
                                                       <div className='col form-group'>
                                                            <input type='text' name='name' className='form-control' id='name' placeholder='Your Name' required />
                                                       </div>
                                                       <div className='col form-group'>
                                                            <input type='email' className='form-control' name='email' id='email' placeholder='Your Email' required />
                                                       </div>
                                                  </div>
                                                  <div className='form-group'>
                                                       <input type='text' className='form-control' name='subject' id='subject' placeholder='Subject' required />
                                                  </div>
                                                  <div className='form-group'>
                                                       <textarea className='form-control' name='message' rows='5' placeholder='Message' required></textarea>
                                                  </div>
                                                  <div className='my-3'>
                                                       <div className='loading'>Loading</div>
                                                       <div className='error-message'></div>
                                                       <div className='sent-message'>Your message has been sent. Thank you!</div>
                                                  </div>
                                                  <div className='text-center'>
                                                       <button type='submit'>Send Message</button>
                                                  </div>
                                             </form>
                                        </div>
                                   </div>
                              </div>
                         </section>
                    </div>
               </div>
          </div>
     );
};

export default Contact_Us;
