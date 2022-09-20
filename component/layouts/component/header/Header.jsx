import Link from 'next/link';
import React, { useState } from 'react';

import { useRouter } from 'next/router';


export default function Header() {
    const router = useRouter();
     var route = router.pathname;

     const [mobnav , setmobnav] = useState(false);

     

     return (
          <>
               <div>
                    <header id='header' className='d-flex align-items-center'>
                         <div className='container d-flex align-items-center justify-content-between'>
                              <h1 className='logo'>
                                   <a href={'/'}>
                                        <img src='./assets/img/risposta-logo.png' alt='' />
                                   </a>
                              </h1>
                             
                              <nav id='navbar' className='navbar'>
                                   {/* <header id='header' className='d-flex align-items-center'>
                         <div className='container-fluid d-flex align-items-center justify-content-between'>
                              <h1 className='logo'>
                                   <a href={'/'}>
                                        <img src='./assets/img/risposta-logo.png' alt='' />
                                   </a>
                              </h1>

                              <nav id='navbar' className='navbar' style={{ marginRight: '100px' }}> */}
                                   <ul>
                                        <li>
                                             <Link className='nav-link' href={'/'}>
                                                  <a className={` text-uppercase ${route == '/' ? 'active' : ''}`}>Home</a>
                                             </Link>
                                        </li>
                                        <li>
                                             <Link className='nav-link' href={'/AboutUs'}>
                                                  <a className={` text-uppercase ${route == '/AboutUs' ? 'active' : ''}`}>About Us</a>
                                             </Link>
                                        </li>
                                        <li>
                                             <Link className='nav-link' href='/Offerings'>
                                                  <a className={` text-uppercase ${route == '/Offerings' ? 'active' : ''}`}>Offerings</a>
                                             </Link>
                                        </li>
                                        {/* <li>
                                             <Link className="nav-link" href="/CaseStudies">
                                                  <a className={`text-uppercase ${casestudies == true ? "active" : ""}`} onClick={casestudiesactive}>
                                                       Case Studies
                                                  </a>
                                             </Link>
                                        </li> */}

                                        <li className='dropdown'>
                                             <a href='#' className={`text-uppercase ${route == '/Leadership' || route == '/Careers' || route == '/OurCulture' || route == '/Partnerships' ? 'active' : ''}`}>
                                                  Our Company<i className='bi bi-chevron-down'></i>
                                             </a>
                                             <ul style={{ borderRadius: '8px', padding: '10px' }}>
                                                  <li>
                                                       <Link className='nav-link' href={'/Team'}>
                                                            <a className={`text-uppercase ${route == '/Team' ? 'active' : ''}`}>Team</a>
                                                       </Link>
                                                  </li>

                                                  <li>
                                                       <Link className='nav-link' href='/Careers'>
                                                            <a className={`text-uppercase ${route == '/Careers' ? 'active' : ''}`}>Careers</a>
                                                       </Link>
                                                  </li>
                                                  <li>
                                                       <Link className='nav-link' href={'/OurCulture'}>
                                                            <a className={`text-uppercase ${route == '/OurCulture' ? 'active' : ''}`}>Our Culture</a>
                                                       </Link>
                                                  </li>
                                                  {/* <li>
                                                       <Link className='nav-link' href={'/Partnerships'}>
                                                            <a className={`text-uppercase ${route == '/Partnerships' ? 'active' : ''}`}>PartnerShips</a>
                                                       </Link>
                                                  </li> */}
                                                  <li>
                                                       <Link className='nav-link' href='/NewsAndEvents'>
                                                            <a className={`text-uppercase ${route == '/NewsAndEvents' ? 'active' : ''}`}>News And Events</a>
                                                       </Link>
                                                  </li>
                                             </ul>
                                        </li>

                                        <li>
                                             <Link className='nav-link' href='/ContactUs'>
                                                  <a className={`text-uppercase ${route == '/ContactUs' ? 'active' : ''}`}>Contact Us</a>
                                             </Link>
                                        </li>
                                   </ul>
                                   <i className='bi bi-list mobile-nav-toggle'></i>
                              </nav>
                         </div>
                    </header>
               </div>
          </>
     );
}
