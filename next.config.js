module.exports = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/exercise/1_1',
                permanent: true,
            },
        ]
    },
}