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

               '/AboutUs': { page: '/AboutUs' },
               // '/AboutUs/index': { page: '/AboutUs', query: { title: '/AboutUs' } },
               '/Offerings': { page: '/Offerings' },
               '/Team': { page: '/Team' },
               '/Careers': { page: '/Careers' },
               '/OurCulture': { page: '/OurCulture' },
               '/NewsAndEvents': { page: '/NewsAndEvents' },
               '/ContactUs': { page: '/ContactUs' },
               
          };
     },
};

module.exports = nextConfig;
