module.exports = {
    env: {
        NEXT_PUBLIC_TEST_PASSWORD: 'dixJu7-fetfug-bacqyx'
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/config',
                permanent: true,
            },
            {
                source: '/practice',
                destination: '/exercise/O1?iterationTime=5s&delay=3s',
                permanent: true,
            },
            {
                source: '/prodConfig',
                destination: '/config?password=dixJu7-fetfug-bacqyx',
                permanent: true,
            },
            {
                source: '/prodExercise',
                destination: '/exercise/O1?iterationTime=5s&delay=3s?password=dixJu7-fetfug-bacqyx',
                permanent: true,
            },
        ]
    },
}