module.exports = {
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