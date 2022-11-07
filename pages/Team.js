import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

const Leadership = () => {
     return (
          <div>
               <Head>
                    <title>Team</title>
               </Head>
               <div className='container-fluid leadershiphead mb-3 mt-3' data-aos='fade-up' data-aos-delay='100' data-aos-duration='500'>
                    <div className='overlay'></div>
                    <div className='row h-100'>
                         <div className='col-md-4'></div>
                         <div className='col-md-4 text-center text-light my-auto headtext text-uppercase'>Core Team</div>
                         <div className='col-md-4'></div>
                    </div>
               </div>

               <section id='team' className='team section-bg my-5 teamdesktop'>
                    <div className='container'>
                         <div className='row'>
                              <div className='col-lg-2 d-flex align-items-stretch' data-aos='fade-up' data-aos-delay='200' data-aos-duration='1000'>
                                   <div className='member'>
                                        <div className='member-img'>
                                             <img src='assets/img/team/Sai2.jpeg' className='img-fluid w-100' alt='' />
                                             <div className='social'>
                                                  <Link href={'https://www.linkedin.com/in/sai-mudigonda/'} passHref>
                                                       <a target='_blank'>
                                                            <i className='bi bi-linkedin'></i>
                                                       </a>
                                                  </Link>
                                             </div>
                                        </div>
                                        <div className='member-info'>
                                             <h4>Sai</h4>
                                             <span>Founder</span>
                                        </div>
                                   </div>
                              </div>

                              <div className='col-lg-2 col-md-6 d-flex align-items-stretch' data-aos='fade-up' data-aos-delay='200' data-aos-duration='1000'>
                                   <div className='member'>
                                        <div className='member-img'>
                                             <img src='assets/img/team/visarad.jpg' className='img-fluid' alt='' />
                                             <div className='social'>
                                                  <Link href={'https://www.linkedin.com/in/visarada-kumar-316079101/'} passHref>
                                                       <a target='_blank'>
                                                            <i className='bi bi-linkedin'></i>
                                                       </a>
                                                  </Link>
                                             </div>
                                        </div>
                                        <div className='member-info'>
                                             <h4>Visarada</h4>
                                             <span>Product Engineering</span>
                                        </div>
                                   </div>
                              </div>
                              <div className='col-lg-2 col-md-6 d-flex align-items-stretch' data-aos='fade-up' data-aos-delay='200' data-aos-duration='1000'>
                                   <div className='member'>
                                        <div className='member-img'>
                                             <img src='assets/img/team/trishul.jpg' className='img-fluid' alt='' />
                                             <div className='social'>
                                                  <Link href={'https://www.linkedin.com/in/trisulapani-mulugu-875487145/'} passHref>
                                                       <a target='_blank'>
                                                            <i className='bi bi-linkedin'></i>
                                                       </a>
                                                  </Link>
                                             </div>
                                        </div>
                                        <div className='member-info'>
                                             <h4>Trisulapani</h4>
                                             <span>Customer Success</span>
                                        </div>
                                   </div>
                              </div>
                              <div className='col-lg-2 col-md-6 d-flex align-items-stretch' data-aos='fade-up' data-aos-delay='200' data-aos-duration='1000'>
                                   <div className='member'>
                                        <div className='member-img'>
                                             <img src='assets/img/team/akash.jpg' className='img-fluid' alt='' />
                                             <div className='social'>
                                                  <Link href={'https://www.linkedin.com/in/akash-rajawat/'} passHref>
                                                       <a target='_blank'>
                                                            <i className='bi bi-linkedin'></i>
                                                       </a>
                                                  </Link>
                                             </div>
                                        </div>
                                        <div className='member-info'>
                                             <h4>Akash</h4>
                                             <span>Customer Success</span>
                                        </div>
                                   </div>
                              </div>
                              <div className='col-lg-2 col-md-6 d-flex align-items-stretch' data-aos='fade-up' data-aos-delay='200' data-aos-duration='1000'>
                                   <div className='member'>
                                        <div className='member-img'>
                                             <img src='assets/img/team/rudra.jpg' className='img-fluid w-100' alt='' />
                                             <div className='social'>
                                                  <Link href={'https://www.linkedin.com/in/rudra-pratap-singh-tomar-20bb51241/'} passHref>
                                                       <a target='_blank'>
                                                            <i className='bi bi-linkedin'></i>
                                                       </a>
                                                  </Link>
                                             </div>
                                        </div>
                                        <div className='member-info'>
                                             <h4>Rudra</h4>
                                             <span>Customer Success</span>
                                        </div>
                                   </div>
                              </div>
                              <div className='col-lg-2 col-md-6 d-flex align-items-stretch' data-aos='fade-up' data-aos-delay='200' data-aos-duration='1000'>
                                   <div className='member'>
                                        <div className='member-img'>
                                             <img src='assets/img/team/shubh.jpg' className='img-fluid' alt='' />
                                             <div className='social'>
                                                  <Link href={'https://www.linkedin.com/in/shubham-tomar-5b9747215'} passHref>
                                                       <a target='_blank'>
                                                            <i className='bi bi-linkedin'></i>
                                                       </a>
                                                  </Link>
                                             </div>
                                        </div>
                                        <div className='member-info'>
                                             <h4>Subham</h4>
                                             <span>Customer Success</span>
                                        </div>
                                   </div>
                              </div>
                         </div>

                         <div className='row'>
                              <div className='col-lg-2 col-md-6 d-flex align-items-stretch' data-aos='fade-up' data-aos-delay='200' data-aos-duration='1000'>
                                   <div className='member'>
                                        <div className='member-img'>
                                             <img src='assets/img/team/pm.jpeg' className='img-fluid' alt='' />
                                             <div className='social'>
                                                  <Link href={'https://www.linkedin.com/in/prashanthi-mudigonda-870a3517'} passHref>
                                                       <a target='_blank'>
                                                            <i className='bi bi-linkedin'></i>
                                                       </a>
                                                  </Link>
                                             </div>
                                        </div>
                                        <div className='member-info'>
                                             <h4>Prashanthi</h4>
                                             <span> Vice President Of Operations</span>
                                        </div>
                                   </div>
                              </div>

                              {/* <div className='col-lg-2 col-md-6 d-flex align-items-stretch' data-aos='fade-up' data-aos-delay='200' data-aos-duration='1000'>
                                   <div className='member'>
                                        <div className='member-img'>
                                             <img src='assets/img/team/bhanu.jpg' className='img-fluid w-100' alt='' />
                                             <div className='social'>
                                                  <Link href={'https://www.linkedin.com/in/bhanuchandra-prasad-vushakola-857961230/'} passHref>
                                                       <a target='_blank'>
                                                            <i className='bi bi-linkedin'></i>
                                                       </a>
                                                  </Link>
                                             </div>
                                        </div>
                                        <div className='member-info'>
                                             <h4>Bhanuchandra</h4>
                                             <span>Product Engineering</span>
                                        </div>
                                   </div>
                              </div>

                              <div className='col-lg-2 col-md-6 d-flex align-items-stretch' data-aos='fade-up' data-aos-delay='200' data-aos-duration='1000'>
                                   <div className='member'>
                                        <div className='member-img'>
                                             <img src='assets/img/team/param.png' className='img-fluid' alt='' />
                                             <div className='social'>
                                                  <Link href={'https://www.linkedin.com/in/paramjeet-singh-rathore-b05576183/'} passHref>
                                                       <a target='_blank'>
                                                            <i className='bi bi-linkedin'></i>
                                                       </a>
                                                  </Link>
                                             </div>
                                        </div>
                                        <div className='member-info'>
                                             <h4>Paramjeet</h4>
                                             <span>Product Engineering</span>
                                        </div>
                                   </div>
                              </div>

                              <div className='col-lg-2 col-md-6 d-flex align-items-stretch' data-aos='fade-up' data-aos-delay='200' data-aos-duration='1000'>
                                   <div className='member'>
                                        <div className='member-img'>
                                             <img src='assets/img/team/sachin.png' className='img-fluid w-100' alt='' />
                                             <div className='social'>
                                                  <Link href={'https://www.linkedin.com/in/sachin-shukla-8911581ab/'} passHref>
                                                       <a target='_blank'>
                                                            <i className='bi bi-linkedin'></i>
                                                       </a>
                                                  </Link>
                                             </div>
                                        </div>
                                        <div className='member-info'>
                                             <h4>Sachin</h4>
                                             <span>Customer Success</span>
                                        </div>
                                   </div>
                              </div>

                              <div className='col-lg-2 col-md-6 d-flex align-items-stretch' data-aos='fade-up' data-aos-delay='200' data-aos-duration='1000'>
                                   <div className='member'>
                                        <div className='member-img'>
                                             <img src='assets/img/team/as.png' className='img-fluid' alt='' />
                                             <div className='social'>
                                                  <Link href={'https://www.linkedin.com/in/akash-shukla-275b91241/'} passHref>
                                                       <a target='_blank'>
                                                            <i className='bi bi-linkedin'></i>
                                                       </a>
                                                  </Link>
                                             </div>
                                        </div>
                                        <div className='member-info'>
                                             <h4>Akash</h4>
                                             <span>Product Engineering</span>
                                        </div>
                                   </div>
                              </div>

                              <div className='col-lg-2 col-md-6 d-flex align-items-stretch' data-aos='fade-up' data-aos-delay='200' data-aos-duration='1000'>
                                   <div className='member'>
                                        <div className='member-img'>
                                             <img src='assets/img/team/4.jpg' className='img-fluid w-100' alt='' />
                                             <div className='social'>
                                                  <Link href={'https://www.linkedin.com/in/kalyan-gangulakurthi-b4930b1b8/'} passHref>
                                                       <a target='_blank'>
                                                            <i className='bi bi-linkedin'></i>
                                                       </a>
                                                  </Link>
                                             </div>
                                        </div>
                                        <div className='member-info'>
                                             <h4>Kalyan</h4>
                                             <span>Customer Success</span>
                                        </div>
                                   </div>
                              </div>
                              <div className='col-lg-2 col-md-6 d-flex align-items-stretch' data-aos='fade-up' data-aos-delay='200' data-aos-duration='1000'>
                                   <div className='member'>
                                        <div className='member-img'>
                                             <img src='assets/img/team/ss.png' className='img-fluid' alt='' />
                                             <div className='social'>
                                                  <Link href={'https://www.linkedin.com/in/surya-shukla-629049242/'} passHref>
                                                       <a target='_blank'>
                                                            <i className='bi bi-linkedin'></i>
                                                       </a>
                                                  </Link>
                                             </div>
                                        </div>
                                        <div className='member-info'>
                                             <h4>Surya</h4>
                                             <span>Operations</span>
                                        </div>
                                   </div>
                              </div> */}
                         </div>
                    </div>
               </section>

               <section id='team' className='team section-bg my-5 teammobile'>
                    <div className='container'>
                         <div className='row'>
                              <div className='col-lg-3 col-md-6 d-flex align-items-stretch' data-aos='fade-up' data-aos-delay='200' data-aos-duration='1000'>
                                   <div className='member'>
                                        <div className='member-img'>
                                             <img src='assets/img/team/Sai2.jpeg' className='img-fluid w-100' alt='' />
                                             <div className='social'>
                                                  <Link href={'https://www.linkedin.com/in/sai-mudigonda/'} passHref>
                                                       <a target='_blank'>
                                                            <i className='bi bi-linkedin'></i>
                                                       </a>
                                                  </Link>
                                             </div>
                                        </div>
                                        <div className='member-info'>
                                             <h4>Sai</h4>
                                             <span>Founder</span>
                                        </div>
                                   </div>
                              </div>

                              <div className='col-lg-3 col-md-6 d-flex align-items-stretch' data-aos='fade-up' data-aos-delay='200' data-aos-duration='1000'>
                                   <div className='member'>
                                        <div className='member-img'>
                                             <img src='assets/img/team/visarad.jpg' className='img-fluid' alt='' />
                                             <div className='social'>
                                                  <Link href={'https://www.linkedin.com/in/visarada-kumar-316079101/'} passHref>
                                                       <a target='_blank'>
                                                            <i className='bi bi-linkedin'></i>
                                                       </a>
                                                  </Link>
                                             </div>
                                        </div>
                                        <div className='member-info'>
                                             <h4>Visarada</h4>
                                             <span>Product Engineering</span>
                                        </div>
                                   </div>
                              </div>
                              <div className='col-lg-3 col-md-6 d-flex align-items-stretch' data-aos='fade-up' data-aos-delay='200' data-aos-duration='1000'>
                                   <div className='member'>
                                        <div className='member-img'>
                                             <img src='assets/img/team/trishul.jpg' className='img-fluid' alt='' />
                                             <div className='social'>
                                                  <Link href={'https://www.linkedin.com/in/trisulapani-mulugu-875487145/'} passHref>
                                                       <a target='_blank'>
                                                            <i className='bi bi-linkedin'></i>
                                                       </a>
                                                  </Link>
                                             </div>
                                        </div>
                                        <div className='member-info'>
                                             <h4>Trisulapani</h4>
                                             <span>Customer Success</span>
                                        </div>
                                   </div>
                              </div>
                              <div className='col-lg-3 col-md-6 d-flex align-items-stretch' data-aos='fade-up' data-aos-delay='200' data-aos-duration='1000'>
                                   <div className='member'>
                                        <div className='member-img'>
                                             <img src='assets/img/team/akash.jpg' className='img-fluid' alt='' />
                                             <div className='social'>
                                                  <Link href={'https://www.linkedin.com/in/akash-rajawat/'} passHref>
                                                       <a target='_blank'>
                                                            <i className='bi bi-linkedin'></i>
                                                       </a>
                                                  </Link>
                                             </div>
                                        </div>
                                        <div className='member-info'>
                                             <h4>Akash</h4>
                                             <span>Customer Success</span>
                                        </div>
                                   </div>
                              </div>
                              <div className='col-lg-3 col-md-6 d-flex align-items-stretch' data-aos='fade-up' data-aos-delay='200' data-aos-duration='1000'>
                                   <div className='member'>
                                        <div className='member-img'>
                                             <img src='assets/img/team/rudra.jpg' className='img-fluid w-100' alt='' />
                                             <div className='social'>
                                                  <Link href={'https://www.linkedin.com/in/rudra-pratap-singh-tomar-20bb51241/'} passHref>
                                                       <a target='_blank'>
                                                            <i className='bi bi-linkedin'></i>
                                                       </a>
                                                  </Link>
                                             </div>
                                        </div>
                                        <div className='member-info'>
                                             <h4>Rudra</h4>
                                             <span>Customer Success</span>
                                        </div>
                                   </div>
                              </div>
                              <div className='col-lg-3 col-md-6 d-flex align-items-stretch' data-aos='fade-up' data-aos-delay='200' data-aos-duration='1000'>
                                   <div className='member'>
                                        <div className='member-img'>
                                             <img src='assets/img/team/shubh.jpg' className='img-fluid' alt='' />
                                             <div className='social'>
                                                  <Link href={'https://www.linkedin.com/in/shubham-tomar-5b9747215'} passHref>
                                                       <a target='_blank'>
                                                            <i className='bi bi-linkedin'></i>
                                                       </a>
                                                  </Link>
                                             </div>
                                        </div>
                                        <div className='member-info'>
                                             <h4>Shubham</h4>
                                             <span>Customer Success</span>
                                        </div>
                                   </div>
                              </div>
                              <div className='col-lg-3 col-md-6 d-flex align-items-stretch' data-aos='fade-up' data-aos-delay='200' data-aos-duration='1000'>
                                   <div className='member'>
                                        <div className='member-img'>
                                             <img src='assets/img/team/pm.jpeg' className='img-fluid' alt='' />
                                             <div className='social'>
                                                  <Link href={'https://www.linkedin.com/in/prashanthi-mudigonda-870a3517'} passHref>
                                                       <a target='_blank'>
                                                            <i className='bi bi-linkedin'></i>
                                                       </a>
                                                  </Link>
                                             </div>
                                        </div>
                                        <div className='member-info'>
                                             <h4>Prashanthi</h4>
                                             <span> Vice President Of Operations</span>
                                        </div>
                                   </div>
                              </div>

                              {/* <div className='col-lg-3 col-md-6 d-flex align-items-stretch' data-aos='fade-up' data-aos-delay='200' data-aos-duration='1000'>
                                   <div className='member'>
                                        <div className='member-img'>
                                             <img src='assets/img/team/param.png' className='img-fluid' alt='' />
                                             <div className='social'>
                                                  <Link href={'https://www.linkedin.com/in/paramjeet-singh-rathore-b05576183/'} passHref>
                                                       <a target='_blank'>
                                                            <i className='bi bi-linkedin'></i>
                                                       </a>
                                                  </Link>
                                             </div>
                                        </div>
                                        <div className='member-info'>
                                             <h4>Paramjeet</h4>
                                             <span>Product Engineering</span>
                                        </div>
                                   </div>
                              </div>

                              <div className='col-lg-3 col-md-6 d-flex align-items-stretch' data-aos='fade-up' data-aos-delay='200' data-aos-duration='1000'>
                                   <div className='member'>
                                        <div className='member-img'>
                                             <img src='assets/img/team/bhanu.jpg' className='img-fluid w-100' alt='' />
                                             <div className='social'>
                                                  <Link href={'https://www.linkedin.com/in/bhanuchandra-prasad-vushakola-857961230/'} passHref>
                                                       <a target='_blank'>
                                                            <i className='bi bi-linkedin'></i>
                                                       </a>
                                                  </Link>
                                             </div>
                                        </div>
                                        <div className='member-info'>
                                             <h4>Bhanuchandra</h4>
                                             <span>Product Engineering</span>
                                        </div>
                                   </div>
                              </div>

                              

                              <div className='col-lg-3 col-md-6 d-flex align-items-stretch' data-aos='fade-up' data-aos-delay='200' data-aos-duration='1000'>
                                   <div className='member'>
                                        <div className='member-img'>
                                             <img src='assets/img/team/sachin.png' className='img-fluid w-100' alt='' />
                                             <div className='social'>
                                                  <Link href={'https://www.linkedin.com/in/sachin-shukla-8911581ab/'} passHref>
                                                       <a target='_blank'>
                                                            <i className='bi bi-linkedin'></i>
                                                       </a>
                                                  </Link>
                                             </div>
                                        </div>
                                        <div className='member-info'>
                                             <h4>Sachin</h4>
                                             <span>Customer Success</span>
                                        </div>
                                   </div>
                              </div>

                              <div className='col-lg-3 col-md-6 d-flex align-items-stretch' data-aos='fade-up' data-aos-delay='200' data-aos-duration='1000'>
                                   <div className='member'>
                                        <div className='member-img'>
                                             <img src='assets/img/team/as.png' className='img-fluid' alt='' />
                                             <div className='social'>
                                                  <Link href={'https://www.linkedin.com/in/akash-shukla-275b91241/'} passHref>
                                                       <a target='_blank'>
                                                            <i className='bi bi-linkedin'></i>
                                                       </a>
                                                  </Link>
                                             </div>
                                        </div>
                                        <div className='member-info'>
                                             <h4>Akash</h4>
                                             <span>Product Engineering</span>
                                        </div>
                                   </div>
                              </div>
                              <div className='col-lg-3 col-md-6 d-flex align-items-stretch' data-aos='fade-up' data-aos-delay='200' data-aos-duration='1000'>
                                   <div className='member'>
                                        <div className='member-img'>
                                             <img src='assets/img/team/4.jpg' className='img-fluid w-100' alt='' />
                                             <div className='social'>
                                                  <Link href={'https://www.linkedin.com/in/kalyan-gangulakurthi-b4930b1b8/'} passHref>
                                                       <a target='_blank'>
                                                            <i className='bi bi-linkedin'></i>
                                                       </a>
                                                  </Link>
                                             </div>
                                        </div>
                                        <div className='member-info'>
                                             <h4>Kalyan</h4>
                                             <span>Customer Success</span>
                                        </div>
                                   </div>
                              </div>

                              <div className='col-lg-3 col-md-6 d-flex align-items-stretch' data-aos='fade-up' data-aos-delay='200' data-aos-duration='1000'>
                                   <div className='member'>
                                        <div className='member-img'>
                                             <img src='assets/img/team/ss.png' className='img-fluid' alt='' />
                                             <div className='social'>
                                                  <Link href={'https://www.linkedin.com/in/surya-shukla-629049242/'} passHref>
                                                       <a target='_blank'>
                                                            <i className='bi bi-linkedin'></i>
                                                       </a>
                                                  </Link>
                                             </div>
                                        </div>
                                        <div className='member-info'>
                                             <h4>Surya</h4>
                                             <span>Operations</span>
                                        </div>
                                   </div>
                              </div> */}
                         </div>
                    </div>
               </section>
          </div>
     );
};

export default Leadership;
