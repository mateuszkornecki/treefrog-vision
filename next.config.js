module.exports = {
    env: {
        NEXT_PUBLIC_TEST_PASSWORD: 'dixJu7-fetfug-bacqyx'
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/exercise/O1?iterationTime=30s&delay=5s',
                permanent: true,
            },
            {
                source: '/debug',
                destination: '/exercise/O1?iterationTime=5s&delay=3s',
                permanent: true,
            },
        ]
    },
}