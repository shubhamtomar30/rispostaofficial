import React from 'react';
import Image from 'next/image';

const Aboutus = () => {
     return (
          <div>
               <div className='container-fluid abouthead mb-3 mt-3' data-aos='fade-up' data-aos-delay='100' data-aos-duration='500'>
                    <div className='overlay'></div>
                    <div className='row h-100'>
                         <div className='col-md-4'></div>
                         <div className='col-md-4 text-center text-light my-auto headtext text-uppercase'>About Us</div>
                         <div className='col-md-4'></div>
                    </div>
               </div>

               <div className='container-fluid my-5'>
                    <div className='container' data-aos='fade-up' data-aos-delay='200' data-aos-duration='1000'>
                         <div className='row '>
                              <div className='col-md-6 text-center mt-5'>
                                   <img src='assets/img/aboutus_risposta.jpeg' className='img-responsive rounded w-100 bs1' alt='' />
                              </div>
                              <div className='col-md-6 p-5'>
                                   <p className='text-justify'>If there’s a business partner that knows how to speak proficiently their customers’ supply chain language and convert them into strategic Business and IT road maps, it’s risposta. risposta’s state of the art integrated platform Adyant delivers strategic solutions to plan, execute, Integrate and optimize supply chains by providing businesses with complete visibility and control and ultimately reducing their operational costs and improving their revenue.</p>
                                   <p className='text-justify'>Founded in 2021 in Hyderabad, India by Supply Chain Veteran with deep domain expertise complementing in Business acumen, Functional, Technology and Organizational transformation. Passion for helping customers to come over their Supply Chain and IT challenges through risposta’s offerings. We now serve customers in India and expanding rapidly in Europe and APAC.</p>
                              </div>
                         </div>

                         <hr className="mt-5" />
                         <h3 className='text-center mb-3 mt-5 p-3'>Values</h3>
                         {/* 1st card starts over here */}
                         <div className='container mb-5'>
                              <div className='card boxshadow p-3 aboutushover' data-aos='fade-up' data-aos-delay='200' data-aos-duration='1000'>
                                   <div className='card-body'>
                                        <div className='row'>
                                             <div className='col-md-2'>
                                                  <img src='assets/img/team-work.jpg' className='img-responsive boxshadow jpimg1' alt='' width={'180px'} style={{ borderRadius: '50%' }} />
                                             </div>
                                             <div className='col-md-9'>
                                                  <div className='title text-center fw-bolder text-uppercase'>Team Work</div>
                                                  <div className='card-body text-justify'>
                                                       <p>We at Risposta strongly believe in team work. Great things are rarely achieved by just one person. Usually, they are accomplished by a group of people, and when everyone is committed to the overall goal, teams move faster, are more innovative and more successful.</p>
                                                  </div>
                                             </div>
                                             <div className='col-md-1'></div>
                                        </div>
                                   </div>
                              </div>
                              {/* 2nd card starts over here. */}
                              <div className='card boxshadow mt-5 p-3 aboutushover' data-aos='fade-up' data-aos-delay='200' data-aos-duration='1000'>
                                   <div className='card-body'>
                                        <div className='row'>
                                             <div className='col-md-2'>
                                                  <img src='assets/img/shared-success.png' className='img-responsive boxshadow jpimg1' alt='' width={'180px'} style={{ borderRadius: '50%' }} />
                                             </div>
                                             <div className='col-md-9'>
                                                  <div className='title text-center fw-bolder text-uppercase'>Shared Success</div>
                                                  <div className='card-body text-justify'>
                                                       <p>Success is a journey and we strongly believe in it. Our goal is to make every moment we spend time at Risposta is memorable with lot of learning with fun and joy. During this journey we will go through rough times and good times but at the end we celebrate the success together.</p>
                                                  </div>
                                             </div>
                                             <div className='col-md-1'></div>
                                        </div>
                                   </div>
                              </div>
                              {/* 3rd card starts over here. */}
                              <div className='card boxshadow mt-5 p-3 mb-5 aboutushover' data-aos='fade-up' data-aos-delay='200' data-aos-duration='1000'>
                                   <div className='card-body'>
                                        <div className='row'>
                                             <div className='col-md-2'>
                                                  <img src='assets/img/integrity.jpg' className='img-responsive boxshadow jpimg1' alt='' width={'180px'} style={{ borderRadius: '50%' }} />
                                             </div>
                                             <div className='col-md-9'>
                                                  <div className='title text-center fw-bolder'>INTEGRITY</div>
                                                  <div className='card-body text-justify'>
                                                       <p>Integrity is our DNA and we value our customers and associates with same dignity.We define service integrity as ethical conduct in service processes. The core of service integrity is adherence to ethical values in all parts of the service process and among all constituencies: customers, employees and suppliers/partners. We argue that personal ethical values are the foundation for service integrity.</p>
                                                  </div>
                                             </div>
                                             <div className='col-md-1'></div>
                                        </div>
                                   </div>
                              </div>
                              <hr />
                              <h3 className='text-center mb-3 mt-5 p-3'>Why risposta</h3>
                              {/* 1st card for why risposta. */}
                              <div className='card boxshadow p-3 mb-5 aboutushover' data-aos='fade-up' data-aos-delay='200' data-aos-duration='1000'>
                                   <div className='card-body'>
                                        <div className='row'>
                                             <div className='col-md-2'>
                                                  <img src='assets/img/about-opportunity.jpg' className='img-responsive boxshadow jpimg1' alt='' width={'180px'} style={{ borderRadius: '50%' }} />
                                             </div>
                                             <div className='col-md-9'>
                                                  <div className='title text-center fw-bolder text-uppercase'>Single platform, Endless opportunities</div>
                                                  <div className='card-body text-justify'>
                                                       <p>Risposta connects the global supply chain with cloud-based software and mobile applications. Provide seamless collaboration between systems, people and organizations.</p>
                                                  </div>
                                             </div>
                                             <div className='col-md-1'></div>
                                        </div>
                                   </div>
                              </div>
                              {/* 2nd card for why risposta. */}
                              <div className='card boxshadow p-3 mb-3 aboutushover' data-aos='fade-up' data-aos-delay='200' data-aos-duration='1000'>
                                   <div className='card-body'>
                                        <div className='row'>
                                             <div className='col-md-2'>
                                                  <img src='assets/img/why2.jpg' className='img-responsive boxshadow jpimg1' alt='' width={'180px'} style={{ borderRadius: '50%' }} />
                                             </div>
                                             <div className='col-md-9'>
                                                  <div className='title text-center fw-bolder text-uppercase'>Enable Seamless collaboration and Digital Transformation </div>
                                                  <div className='card-body text-justify'>
                                                       <p>Risposta is built on the principle of harmony to maximize efficiency and save both money and time, regardless of company type. Collaboration is in RISPOSTA’s DNA and the platform Adyant brings people, systems, and technologies together to simplify the Supply Chain Planning and Execution processes.</p>
                                                  </div>
                                             </div>
                                             <div className='col-md-1'></div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Aboutus;
