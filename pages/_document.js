import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
     return (
          <Html>
               <Head>
                    <link href='assets/img/10001.png' rel='apple-touch-icon' />

                    <link href='https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Roboto:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i' rel='stylesheet' />

                    <link href='assets/vendor/aos/aos.css' rel='stylesheet' />
                    <link href='assets/vendor/bootstrap/css/bootstrap.min.css' rel='stylesheet' />
                    <link href='assets/vendor/bootstrap-icons/bootstrap-icons.css' rel='stylesheet' />
                    <link href='assets/vendor/boxicons/css/boxicons.min.css' rel='stylesheet' />
                    <link href='assets/vendor/glightbox/css/glightbox.min.css' rel='stylesheet' />
                    {/* <link href='assets/vendor/swiper/swiper-bundle.min.css' rel='stylesheet' /> */}
                    <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css'></link>
                    <link href='assets/css/style.css' rel='stylesheet' />
                    <link rel='preconnect' href='https://fonts.gstatic.com' />
                    <link href='https://fonts.googleapis.com/css2?family=Montserrat&display=swap' rel='stylesheet'></link>
                    <link rel='stylesheet' href='https://unpkg.com/aos@next/dist/aos.css' />
               </Head>
               <body style={{ fontstyle: 'Montserrat , sans-serif' }}>
                    <div className='container-fluid'>
                         <Main />
                    </div>
                    <NextScript />

                    <script async src='assets/vendor/bootstrap/js/bootstrap.bundle.min.js'></script>
                    <script async src='assets/vendor/glightbox/js/glightbox.min.js'></script>
                    <script async src='assets/vendor/isotope-layout/isotope.pkgd.min.js'></script>
                    <script async src='assets/vendor/waypoints/noframework.waypoints.js'></script>
                    <script async src='assets/vendor/php-email-form/validate.js'></script>
                    <script async src='assets/js/main.js'></script>
                    <script async src='https://unpkg.com/aos@next/dist/aos.js'></script>
                    <script>AOS.init();</script>
               </body>
          </Html>
     );
}
