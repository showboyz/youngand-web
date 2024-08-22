/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'flagcdn.com',
            },
            {
                protocol: 'https',
                hostname: 'github.com',
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: 'dummyimage.com',
            },
            {
                protocol: 'https',
                hostname: 'randomuser.me',
                pathname: '/api/portraits/**',
            },
        ],
        unoptimized: true,  // 이미지 최적화 비활성화
    },
    output: 'export',  // 정적 사이트 생성을 위한 설정
};

export default nextConfig;
