/** @type {import('next').NextConfig} */
const nextConfig = {
     reactStrictMode: false,
     swcMinify: true,
     unoptimised: true,
     images: {
          loader: 'akamai',

          path: 'public/assets/img/*',
     },
     exportPathMap: async function (
          defaultPathMap,

          { dev, dir, outDir, distDir, buildId }
     ) {
          return {
               '/': { page: '/' },

               //   '/pages/about': { page: 'pages/about' },

               '/AboutUs': { page: '/AboutUs', query: { title: '/AboutUs' } },
               // '/AboutUs/index': { page: '/AboutUs', query: { title: '/AboutUs' } },
               '/Offerings': { page: '/Offerings', query: { title: '/Offerings' } },
               '/Team': { page: '/Team', query: { title: '/Team' } },
               '/Careers': { page: '/Careers', query: { title: '/Careers' } },
               '/OurCulture': { page: '/OurCulture', query: { title: '/OurCulture' } },
               '/NewsAndEvents': { page: '/NewsAndEvents', query: { title: '/NewsAndEvents' } },
               '/ContactUs': { page: '/ContactUs', query: { title: '/Contacts' } },
          };
     },
};

module.exports = nextConfig;
