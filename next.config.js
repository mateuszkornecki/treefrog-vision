module.exports = {
    async redirects() {
        return [
            {
                source: '/debug',
                destination: '/train?exercise=1_1&iterationTime=5s&delay=3s',
                permanent: true,
            },
        ]
    },
}