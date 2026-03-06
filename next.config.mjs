/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            { protocol: "https", hostname: "png.pngtree.com" },
            { protocol: "https", hostname: "freepnglogo.com" },
            { protocol: "https", hostname: "upload.wikimedia.org" },
            { protocol: "https", hostname: "toppng.com" },
            { protocol: "https", hostname: "w3.org" },
        ],
    },
};

export default nextConfig;
