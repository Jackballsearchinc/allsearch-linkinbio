/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
module.exports = {
  output: 'export', // enables `next export`
  // If you publish under https://<you>.github.io/<repo>/, uncomment and set the basePath below:
  // basePath: isProd ? '/allsearch-linkinbio' : '',
  // assetPrefix: isProd ? '/allsearch-linkinbio/' : '',
  images: { unoptimized: true }, // ensures static export doesn’t try to optimize images
  reactStrictMode: true,
};
