import React, { useState } from "react";
import Header from "../../component/layouts/component/header/Header";

const Offerings = () => {
     return (
          <div>
               <div className='container-fluid offeringshead mb-3 mt-3' data-aos='fade-up' data-aos-delay='100' data-aos-duration='500'>
                    <div className='overlay'></div>
                    <div className='row h-100'>
                         <div className='col-md-4'></div>
                         <div className='col-md-4 text-center text-light my-auto headtext text-uppercase'>Offerings</div>
                         <div className='col-md-4'></div>
                    </div>
               </div>

               <div className='container-fluid'>
                    <div className='container'>
                         <section id='services' className='services'>
                              <div className='container'>
                                   <div className='section-title' data-aos='fade-up' data-aos-delay='200' data-aos-duration='1000'>
                                        <h2>Services</h2>
                                        <h3>
                                             Check our <span>Services</span>
                                        </h3>
                                        {/* <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p> */}
                                   </div>

                                   <div className='row'>
                                        <div className='col-lg-4 col-md-6 d-flex align-items-stretch' data-aos='fade-up' data-aos-delay='200' data-aos-duration='1000'>
                                             <div className='icon-box'>
                                                  {/* <div className="icon"> */}
                                                  <img src='assets/img/offeringsbd.jpg' className='boxshadow img-responsive img-centered img60 rounded-circle' alt='' />
                                                  {/* </div> */}
                                                  <h4>
                                                       <a href=''>Business Diagnostics</a>
                                                  </h4>
                                                  <p>Understanding as is process and building to be process that meets business requirements. During this phase we also evaluate softwares that are going to best suited for respective business stream</p>
                                             </div>
                                        </div>

                                        <div className='col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0' data-aos='fade-up' data-aos-delay='200' data-aos-duration='1000'>
                                             <div className='icon-box'>
                                                  {/* <div className="icon"> */}
                                                  <img src='assets/img/offeringsra.jpg' className='boxshadow img-responsive img-centered img60 rounded-circle' alt='' />
                                                  {/* </div> */}
                                                  <h4>
                                                       <a href=''>Readiness Assesments</a>
                                                  </h4>
                                                  <p>A series of work shops and interviews with key stakeholders to understand the organization / team readiness for the new software adoption. This we do it for both business and IT.</p>
                                             </div>
                                        </div>

                                        <div className='col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0' data-aos='fade-up' data-aos-delay='200' data-aos-duration='1000'>
                                             <div className='icon-box'>
                                                  {/* <div className="icon"> */}
                                                  <img src='assets/img/offeringssc.png' className='boxshadow img-responsive img-centered img60 rounded-circle' alt='' />
                                                  {/* </div> */}
                                                  <h4>
                                                       <a href=''>Strategic Consulting</a>
                                                  </h4>
                                                  <p>Working through the pain points / areas in the business and provide process / solution recommendations through a series of workshops/interviews.</p>
                                             </div>
                                        </div>

                                        <div className='col-lg-4 col-md-6 d-flex align-items-stretch mt-4' data-aos='fade-up' data-aos-delay='200' data-aos-duration='1000'>
                                             <div className='icon-box'>
                                                  {/* <div className="icon"> */}
                                                  <img src='assets/img/offeringsre.jpg' className='boxshadow img-responsive img-centered img60 rounded-circle' alt='' />
                                                  {/* </div> */}
                                                  <h4>
                                                       <a href=''>Reverse Engineering Engagements</a>
                                                  </h4>
                                                  <p>Sometimes the software / processes that have been chosen might not give desired results.We have expertise in performing abackward investigation sand comeup with recommendations to use the existing software / process with minimal changes.</p>
                                             </div>
                                        </div>

                                        <div className='col-lg-4 col-md-6 d-flex align-items-stretch mt-4' data-aos='fade-up' data-aos-delay='200' data-aos-duration='1000'>
                                             <div className='icon-box'>
                                                  {/* <div className="icon"> */}
                                                  <img src='assets/img/offeringsocm.jpg' className='boxshadow img-responsive img-centered img60 rounded-circle' alt='' />
                                                  {/* </div> */}
                                                  <h4>
                                                       <a href=''>Organizational Change Management</a>
                                                  </h4>
                                                  <p>Change Management is key for any transformation.We are experts in implementing the change along with new software / processes to achieve maximin ROI and higher adoption rates.</p>
                                             </div>
                                        </div>

                                        <div className='col-lg-4 col-md-6 d-flex align-items-stretch mt-4' data-aos='fade-up' data-aos-delay='200' data-aos-duration='1000'>
                                             <div className='icon-box'>
                                                  {/* <div className="icon"> */}
                                                  <img src='assets/img/offeringsis.jpg' className='boxshadow img-responsive img-centered img60 rounded-circle' alt='' />
                                                  {/* </div> */}
                                                  <h4>
                                                       <a href=''>Implementation Services </a>
                                                  </h4>
                                                  <p>We are specialized in implementing Supply Chain solutions and processes for variety of business and across geographies.</p>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </section>
                    </div>
               </div>

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
                                             <a href=''>Data Integretor</a>
                                        </h4>
                                        <p>Adyant Enterprise Data Integration Platform (ADIP), is a one stop solution for all integration needs. ADIP has got all the capabilities to connect any two systems with multiple connector options.</p>
                                   </div>
                              </div>

                              <div className='col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0' data-aos='fade-up' data-aos-delay='400' data-aos-duration='1000'>
                                   <div className='icon-box'>
                                        <img src='assets/img/demand-planning.jpg' className='boxshadow img-responsive img-centered img60 rounded-circle' alt='' />
                                        <h4>
                                             <a href=''>Demand Planning</a>
                                        </h4>
                                        <p>Adyant Demand Planning (ADP) is a powerful tool that uses the customer’s demand history to create an accurate forecast of future demand. This forecast can be used to drive planning for distribution, deployment, manufacturing and logistics</p>
                                   </div>
                              </div>

                              <div className='col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0' data-aos='fade-up' data-aos-delay='400' data-aos-duration='1000'>
                                   <div className='icon-box'>
                                        <img src='assets/img/replenishment1.jpg' className='boxshadow img-responsive img-centered img60 rounded-circle' alt='' />
                                        <h4>
                                             <a href=''>Replenishment</a>
                                        </h4>
                                        <p>Adyant Replenishment Planning (ARP) is a powerful tool with in-built process that helps to place the right product in the right place at right time along with effective deployment and allocation of products with various supply situations.</p>
                                   </div>
                              </div>

                              <div className='col-lg-4 col-md-6 d-flex align-items-stretch mt-4' data-aos='fade-up' data-aos-delay='400' data-aos-duration='1000'>
                                   <div className='icon-box'>
                                        <img src='assets/img/logistic-visibility.png' className='boxshadow img-responsive img-centered img60 rounded-circle' alt='' />
                                        <h4>
                                             <a href=''>Logistic Visibility</a>
                                        </h4>
                                        <p>Adyant Logistics Management (ALM) addresses the needs of a fast-growing business through real-time visibility, exceptions, collaboration and dynamic execution capabilities to improve agility and profitability.</p>
                                   </div>
                              </div>

                              <div className='col-lg-4 col-md-6 d-flex align-items-stretch mt-4' data-aos='fade-up' data-aos-delay='400' data-aos-duration='1000'>
                                   <div className='icon-box'>
                                        <img src='assets/img/workforce-management.png' className='boxshadow img-responsive img-centered img60 rounded-circle' alt='' />
                                        <h4>
                                             <a href=''>Workforce Management</a>
                                        </h4>
                                        <p>Adyant Workforce Management System (AWFM), is a powerful tool that helps to address a critical challenge for any industry.</p>
                                   </div>
                              </div>

                              <div className='col-lg-4 col-md-6 d-flex align-items-stretch mt-4' data-aos='fade-up' data-aos-delay='400' data-aos-duration='1000'>
                                   <div className='icon-box'>
                                        <img src='assets/img/order-management.jpg' className='boxshadow img-responsive img-centered img60 rounded-circle' alt='' />
                                        <h4>
                                             <a href=''>Order Management</a>
                                        </h4>
                                        <p>Adyant E-Com / Order Management (AOM) is a simple and powerful tool to manage the processes to deliver customer goods on-time. It allows business to co-ordinate the entire fulfillment process.</p>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>
          </div>
     );
};

export default Offerings;
