import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
     return (
          <Html>
               <Head>
                    <meta charset="utf-8" />
                  
                    
                   

                    <link href='https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Roboto:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i' rel='stylesheet' />

                    <link href='assets/vendor/aos/aos.css' rel='stylesheet' />
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossOrigin="anonymous" />
                    <link href='assets/vendor/bootstrap-icons/bootstrap-icons.css' rel='stylesheet' />
                    <link href='assets/vendor/boxicons/css/boxicons.min.css' rel='stylesheet' />
                    
                    <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css'></link>
                    <link href='assets/css/style.css' rel='stylesheet' />
                    <link rel='preconnect' href='https://fonts.gstatic.com' />
                    <link href='https://fonts.googleapis.com/css2?family=Montserrat&display=swap' rel='stylesheet'></link>
                    <link rel='stylesheet' href='https://unpkg.com/aos@next/dist/aos.css' />
                    <link rel='preconnect' href='https://fonts.googleapis.com' />
                    <link rel='preconnect' href='https://fonts.gstatic.com' />
                    <link href='https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap' rel='stylesheet' />
                    <link href='https://fonts.googleapis.com/css2?family=Rancho&display=swap' rel='stylesheet' />
                    <link href='https://fonts.googleapis.com/css2?family=Pathway+Gothic+One&display=swap' rel='stylesheet' />
               </Head>
               <body style={{ fontstyle: 'Montserrat , sans-serif' }}>
                    <div className='container-fluid'>
                         <Main />
                    </div>
                    <NextScript />

                    <script src='assets/vendor/bootstrap/js/bootstrap.bundle.min.js'></script>
                    <script src='assets/vendor/glightbox/js/glightbox.min.js'></script>
                    {/* <script src='assets/vendor/isotope-layout/isotope.pkgd.min.js'></script> */}
                    <script src='assets/vendor/waypoints/noframework.waypoints.js'></script>
                    <script src='assets/vendor/php-email-form/validate.js'></script>
                    <script src='assets/js/main.js'></script>
                    <script src='https://unpkg.com/aos@next/dist/aos.js'></script>
                    <script>AOS.init();</script>
               </body>
          </Html>
     );
}
