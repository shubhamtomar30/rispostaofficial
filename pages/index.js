import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

export default function Home() {
     return (
          <div>
               <Head>
                    <title>Home</title>
               </Head>
               <section id='hero' className='d-flex align-items-center' data-aos='fade-up' data-aos-delay='100' data-aos-duration='500'>
                    <div className='overlay'></div>

                    <div className='container desknav'>
                         <div className='row'>
                              <div className='col-md-7' data-aos='fade-up' data-aos-delay='600' data-aos-duration='800'>
                                   <h1 style={{ color: 'white', fontFamily: 'Pathway Gothic One, sans-serif', fontSize: '35px' }}>a trusted business partner that knows how to speak proficiently their customersâ€™ supply chain language and convert them into strategic Business and IT road maps.</h1>
                              </div>
                              <div className='col-md-5'></div>
                         </div>
                    </div>
                    <div className='container mobnavbar'>
                         <div className='row'>
                              <div className='col-md-12' data-aos='fade-up' data-aos-delay='600' data-aos-duration='800'>
                                   <h1 style={{ color: 'white', fontFamily: 'Pathway Gothic One, sans-serif', fontSize: '35px' }}>a trusted business partner that knows how to speak proficiently their customersâ€™ supply chain language and convert them into strategic Business and IT road maps.</h1>
                              </div>
                         </div>
                    </div>
               </section>

               <main id='main' data-aos='fade-up' data-aos-delay='200' data-aos-duration='1000'>
                    <section id='featured-services' className='featured-services'>
                         <div className='container'>
                              <div className='row'>
                                   <div className='col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0'>
                                        <Link href='#about'>
                                             <div className='icon-box text-center'>
                                                  <div className='icon'>
                                                       <img src='assets/img/retail.png' className='baw boxshadow img-responsive img-centered rounded-circle' alt='' />
                                                  </div>
                                                  <h4 className='title mt-4'>
                                                       <a href=''>Retail</a>
                                                  </h4>
                                                  <p style={{ textalign: 'justify' }} className='description'>
                                                       People like consistency. Whether itâ€™s a store or a restaurant, they want to come in and see what you are famous for.
                                                  </p>
                                             </div>
                                        </Link>
                                   </div>

                                   <div className='col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0'>
                                        <Link href={'#about'}>
                                             <div className='icon-box text-center' data-aos-delay='400'>
                                                  <div className='icon'>
                                                       <img src='assets/img/manufacturing.jpg' className='baw boxshadow img-responsive img-centered rounded-circle' alt='' />
                                                  </div>
                                                  <h4 className='title mt-4'>
                                                       <a>Manufacturing</a>
                                                  </h4>
                                                  <p className='description'>Never before in the history of mankind has the pace of innovation and technological acceleration been faster than it is today.</p>
                                             </div>
                                        </Link>
                                   </div>

                                   <div className='col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0'>
                                        <Link href='#about'>
                                             <div className='icon-box text-center' data-aos-delay='300'>
                                                  <div className='icon'>
                                                       <img src='assets/img/logistic1.jpg' className='baw boxshadow img-responsive img-centered rounded-circle' alt='' />
                                                  </div>
                                                  <h4 className='title mt-4'>
                                                       <a href=''>Logistic and Warehousing</a>
                                                  </h4>
                                                  <p className='description'>The war has been variously termed a war of production and a war of machines. it is a war of logistics.</p>
                                             </div>
                                        </Link>
                                   </div>
                              </div>
                         </div>
                    </section>

                    <section className='about section-bg' data-aos='fade-up' data-aos-delay='400' data-aos-duration='1000'>
                         <div className='container'>
                              <div className='section-title'>
                                   <h2>About</h2>
                                   <h3>
                                        Find Out More <span>About Us</span>
                                   </h3>
                              </div>

                              <div className='row'>
                                   <div className='col-lg-1'></div>
                                   <div className='col-lg-10 pt-4 pt-lg-0 content d-flex flex-column justify-content-center mt-5' data-aos-delay='100'>
                                        <h3 className='text-center mb-4'>RISPOSTA SOFTWARE INDIA PVT LTD</h3>
                                        <p className='ff text-justify'>Founded in 2021 in Hyderabad, India by Supply Chain Veteran with deep domain expertise complementing in Business acumen, Functional, Technology and Organizational transformation. Passion for helping customers to come over their Supply Chain and IT challenges through risposta offerings. We now serve customers in India and expanding rapidly in Europe and APAC.</p>

                                        <p className='fst-italic ff text-justify'> Risposta is a leading global trusted business partner that knows how to speak proficiently their customersâ€™ supply chain language and convert them into strategic Business and IT road maps. Risposta Software India Pvt Ltd (RSP) is specialised in providing services in Supply Chain Solutions for a variety of business verticals across geographies. Founded by Supply Chain veteran who has got a global exposure of 22+ years in Retail, Manufacturing, CPG, Distribution etc..</p>
                                        <p className='ff text-justify'>Risposta is built on the principle of harmony to maximize efficiency and save both money and time, regardless of company type. Collaboration is in RISPOSTAâ€™s DNA and the platform Adyant brings people, systems, and technologies together to simplify the Supply Chain Planning and Execution processes.</p>
                                        <ul className='mx-auto'>
                                             <li>
                                                  <i className='bx bxs-rocket'></i>
                                                  <div>
                                                       <h5>Our Vision</h5>
                                                       <p className='ff text-justify'>We aim to be the most valuable strategic partner with our innovative offerings and solutions in delivering value to our customers.</p>
                                                  </div>
                                             </li>
                                             <li>
                                                  <i className='bx bxs-bullseye'></i>
                                                  <div>
                                                       <h5>Our Mision</h5>
                                                       <p className='ff text-justify mt-2'>To become the most preferred Integrated Supply Chain Business Solution / Process partner and contribute to sustainable growth for business.</p>
                                                  </div>
                                             </li>
                                        </ul>
                                   </div>
                                   <div className='col-lg-1'></div>
                              </div>
                         </div>
                    </section>
                    <div className='section-title mt-4'>
                         <h2>
                              <span>Partners</span>
                         </h2>
                    </div>

                    <section id='clients' className='clients section-bg'>
                         <div className='container' data-aos='zoom-in'>
                              <div className='row'>
                                   <div className='col-lg-1 col-md-12 col-12 d-flex align-items-center justify-content-center'></div>

                                   <div className='col-lg-3 col-md-12 col-12 d-flex align-items-center justify-content-center'></div>

                                   <div className='col-lg-4 col-md-12 col-12 d-flex align-items-center justify-content-center'>
                                        <Link  href={'https://www.kinaxis.com/en/partners/risposta'}passHref>
                                             <a target="_blank">
                                                  <img src='assets/img/clients/kinaxis-logo.png' className='' alt='' width={'500px'} />
                                             </a>
                                        </Link>
                                   </div>

                                   <div className='col-lg-3 col-md-12 col-12 d-flex align-items-center justify-content-center'></div>

                                   <div className='col-lg-1 col-md-12 col-12 d-flex align-items-center justify-content-center'></div>
                              </div>
                         </div>
                    </section>

                    <section id='about' className='services' data-aos='fade-up' data-aos-delay='400' data-aos-duration='1000'>
                         <div className='container'>
                              <div className='section-title'>
                                   <h2>Products</h2>
                                   <h3>
                                        Check our <span>Products</span>
                                   </h3>
                              </div>

                              <div className='row'>
                                   <div className='col-lg-4 col-md-6 d-flex align-items-stretch' data-aos='fade-up' data-aos-delay='400' data-aos-duration='1000'>
                                        <div className='icon-box'>
                                             <img src='assets/img/data-integretor.png' className='boxshadow img-responsive img-centered img60 rounded-circle' alt='' />
                                             <h4>
                                                  <a>Data Integretor</a>
                                             </h4>
                                             <p>Adyant Enterprise Data Integration Platform (ADIP), is a one stop solution for all integration needs. ADIP has got all the capabilities to connect any two systems with multiple connector options.</p>
                                        </div>
                                   </div>

                                   <div className='col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0' data-aos='fade-up' data-aos-delay='400' data-aos-duration='1000'>
                                        <div className='icon-box'>
                                             <img src='assets/img/demand-planning.jpg' className='boxshadow img-responsive img-centered img60 rounded-circle' alt='' />
                                             <h4>
                                                  <a>Demand Planning</a>
                                             </h4>
                                             <p>Adyant Demand Planning (ADP) is a powerful tool that uses the customerâ€™s demand history to create an accurate forecast of future demand. This forecast can be used to drive planning for distribution, deployment, manufacturing and logistics</p>
                                        </div>
                                   </div>

                                   <div className='col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0' data-aos='fade-up' data-aos-delay='400' data-aos-duration='1000'>
                                        <div className='icon-box'>
                                             <img src='assets/img/replenishment1.jpg' className='boxshadow img-responsive img-centered img60 rounded-circle' alt='' />
                                             <h4>
                                                  <a>Replenishment</a>
                                             </h4>
                                             <p>Adyant Replenishment Planning (ARP) is a powerful tool with in-built process that helps to place the right product in the right place at right time along with effective deployment and allocation of products with various supply situations.</p>
                                        </div>
                                   </div>

                                   <div className='col-lg-4 col-md-6 d-flex align-items-stretch mt-4' data-aos='fade-up' data-aos-delay='400' data-aos-duration='1000'>
                                        <div className='icon-box'>
                                             <img src='assets/img/logistic-visibility.png' className='boxshadow img-responsive img-centered img60 rounded-circle' alt='' />
                                             <h4>
                                                  <a>Logistic Visibility</a>
                                             </h4>
                                             <p>Adyant Logistics Management (ALM) addresses the needs of a fast-growing business through real-time visibility, exceptions, collaboration and dynamic execution capabilities to improve agility and profitability.</p>
                                        </div>
                                   </div>

                                   <div className='col-lg-4 col-md-6 d-flex align-items-stretch mt-4' data-aos='fade-up' data-aos-delay='400' data-aos-duration='1000'>
                                        <div className='icon-box'>
                                             <img src='assets/img/workforce-management.png' className='boxshadow img-responsive img-centered img60 rounded-circle' alt='' />
                                             <h4>
                                                  <a>Workforce Management</a>
                                             </h4>
                                             <p>Adyant Workforce Management System (AWFM), is a powerful tool that helps to address a critical challenge for any industry.</p>
                                        </div>
                                   </div>

                                   <div className='col-lg-4 col-md-6 d-flex align-items-stretch mt-4' data-aos='fade-up' data-aos-delay='400' data-aos-duration='1000'>
                                        <div className='icon-box'>
                                             <img src='assets/img/order-management.jpg' className='boxshadow img-responsive img-centered img60 rounded-circle' alt='' />
                                             <h4>
                                                  <a>Order Management</a>
                                             </h4>
                                             <p>Adyant E-Com / Order Management (AOM) is a simple and powerful tool to manage the processes to deliver customer goods on-time. It allows business to co-ordinate the entire fulfillment process.</p>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </section>
               </main>
          </div>
     );
}
