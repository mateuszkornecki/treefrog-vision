module.exports = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/train?exercise=1_1',
                permanent: true,
            },
        ]
    },
}