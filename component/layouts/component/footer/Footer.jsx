import Link from "next/link";
import React from "react";

export default function Footer() {
    return (
         <div>
              <footer id='footer' data-aos='zoom-in-up' data-aos-delay='500' data-aos-duration='500'>
                   <div className='footer-newsletter'>
                        <div className='container'>
                             <div className='row justify-content-center'>
                                  <div className='col-lg-6'>
                                       <h4>Subscribe</h4>
                                       <p>Let Us Know Your Email To Keep You Updated.....</p>
                                       <form action='' method='post'>
                                            <input type='email' name='email' placeholder='For Example :-  info@rispostacorp.com' />
                                            <input type='submit' value='Subscribe' />
                                       </form>
                                  </div>
                             </div>
                        </div>
                   </div>

                   <div className='footer-top'>
                        <div className='container'>
                             <div className='row'>
                                  <div className='col-lg-3 col-md-6 footer-contact'>
                                       <h3>
                                            <img style={{ marginLeft: '-17px' }} src='assets/img/risposta-logo.png' alt='' width='150px' />
                                       </h3>
                                       <p>
                                            Indiqube Pearl , <br />
                                            Gachibowli , Hyderabad , 500032
                                            <br />
                                            India <br />
                                            <br />
                                            <br />
                                            <strong>Email:</strong> <a href='mailto:info@rispostacorp.com'>info@rispostacorp.com</a>
                                            <br />
                                       </p>
                                  </div>

                                  <div className='col-lg-3 col-md-6 footer-links'>
                                       <h4>Useful Links</h4>
                                       <ul>
                                            <li>
                                                 <i className='bx bx-chevron-right'></i>{' '}
                                                 <Link href='/'>
                                                      <a>Home</a>
                                                 </Link>
                                            </li>
                                            <li>
                                                 <i className='bx bx-chevron-right'></i>
                                                 <Link href='/AboutUs'>
                                                      <a>About us</a>
                                                 </Link>
                                            </li>
                                            <li>
                                                 <i className='bx bx-chevron-right'></i>
                                                 <Link href={'/Offerings'}>
                                                      <a>Offerings</a>
                                                 </Link>
                                            </li>
                                            <li>
                                                 <i className='bx bx-chevron-right'></i>
                                                 <Link href={'/ContactUs'}>
                                                      <a>Contact us</a>
                                                 </Link>
                                            </li>
                                       </ul>
                                  </div>

                                  <div className='col-lg-3 col-md-6 footer-links'>
                                       <h4>Our Services</h4>
                                       <ul>
                                            <li>
                                                 <i className='bx bx-chevron-right'></i> <a>Business Diagnostics</a>
                                            </li>
                                            <li>
                                                 <i className='bx bx-chevron-right'></i> <a>Readiness Assesments</a>
                                            </li>
                                            <li>
                                                 <i className='bx bx-chevron-right'></i> <a>Strategic Consulting</a>
                                            </li>
                                            <li>
                                                 <i className='bx bx-chevron-right'></i> <a>Reverse Engineering Engagements</a>
                                            </li>
                                            <li>
                                                 <i className='bx bx-chevron-right'></i> <a>Organizational Change Management</a>
                                            </li>
                                            <li>
                                                 <i className='bx bx-chevron-right'></i> <a>Implementation Services</a>
                                            </li>
                                       </ul>
                                  </div>

                                  <div className='col-lg-3 col-md-6 footer-links'>
                                       <h4>Our Social Networks</h4>
                                       <p>Here You can Get More Information About Us</p>
                                       <div className='social-links mt-3'>
                                            <Link href={'https://www.linkedin.com/company/rispostacorp/mycompany/'} passHref>
                                                 <a target='_blank' className='linkedin'>
                                                      <i className='bx bxl-linkedin'></i>
                                                 </a>
                                            </Link>
                                       </div>
                                  </div>
                             </div>
                        </div>
                   </div>

                   <div className='container py-4'>
                        <div className='copyright'>
                             &copy; Copyright{' '}
                             <strong>
                                  <span>risposta</span>
                             </strong>
                             . All Rights Reserved
                        </div>
                        <div className='credits'>
                             Designed by <a href=''>risposta</a>
                        </div>
                   </div>
              </footer>
         </div>
    );
}
