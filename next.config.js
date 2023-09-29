module.exports = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/train?exercise=1_1',
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