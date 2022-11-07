import Head from 'next/head';
import React from 'react'

const OurCulture = () => {
  return (
       <div>
          <Head>
               <title>OurCulture</title>
          </Head>
            <div className='container-fluid casestudieshead mt-3 mb-3' style={{ height: '75vh' }} data-aos='fade-up' data-aos-delay='100' data-aos-duration='500'>
                 <div className='overlay'></div>
                 <div className='row h-100'>
                      <div className='col-lg-4'></div>
                      <div className='col-lg-4 text-center text-light my-auto headtext text-uppercase'>Our Culture</div>
                      <div className='col-lg-4'></div>
                 </div>
            </div>

            <div className='container-fluid' data-aos='fade-up' data-aos-delay='200' data-aos-duration='1000'>
                 <div className='container'>
                      <div className='row my-5'>
                           <div className='col-lg-1'></div>
                           <div className='col-lg-10 card'>
                                <div className='row' style={{ paddingLeft: '0px' }}>
                                     <div className='col-lg-6 h-50 drl' style={{ paddingLeft: '0px' }}>
                                          <img className='w-100 drl' src='/assets/img/ocm.jpg' alt='' />
                                     </div>
                                     <div className='col-lg-6 my-auto'>
                                          <div className='my-5 text-center'>
                                               <h1 className='title ff'>Our Culture</h1>
                                          </div>
                                          <div className='card-body'>
                                               <p className='text-justify ff'>Our core values are those of honesty and respect of individuals. We could also tell you how we value diversity and create safe spaces for people to flourish. But maybe our staff retention numbers will explain it better. We have a regular intake of juniors through our annual campus hire / internship programmes, and ongoing professional development for all staff. We provide meaningful benefits, and a great work support structure. It’s not just our staff who stay with us. We have customers who’ve relied on us for years, and those who always come back to us for their next project.</p>
                                          </div>
                                     </div>
                                </div>
                           </div>
                           <div className='col-lg-1'></div>
                      </div>
                 </div>
            </div>
       </div>
  );
}

export default OurCulture
