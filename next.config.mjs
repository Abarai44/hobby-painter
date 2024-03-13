/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    env:{
        MY_APP_SERVICE: process.env.MY_APP_SERVICE,
        MY_APP_TEMPLATE: process.env.MY_APP_TEMPLATE,
        MY_APP_KEY: process.env.MY_APP_KEY,
    }
};

export default nextConfig;


