/** @type {import('next').NextConfig} */

const securityHeaders = [
  {
    key: 'Referrer-Policy',
    value: 'no-referrer'
  }
];

module.exports = {
  images: {
    domains: ['images.prismic.io']
  },
  async headers() {
    return [
      // Apply these headers to all routes in your application.
      {
        source: '/:path*',
        headers: securityHeaders
      }
    ];
  }
};
