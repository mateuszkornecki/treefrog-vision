module.exports = {
    env: {
        NEXT_PUBLIC_TEST_PASSWORD: 'dixJu7-fetfug-bacqyx'
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/train',
                permanent: true,
            },
            {
                source: '/debug',
                destination: '/train?exercise=O1&iterationTime=5s&delay=3s',
                permanent: true,
            },
        ]
    },
}