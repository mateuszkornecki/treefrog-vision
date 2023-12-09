import { Heading, Box } from '@chakra-ui/react';

const Page =() => {

    return (
        <header>
            <Heading as='h1' size='xl'>Ustawienia ćwiczenia</Heading>
<Box as='main' padding='1rem' overflowY='auto' maxH='100vh'  bgGradient="linear(to-t, green.200, pink.500)">
    <Heading as='h2' size='md'>Kolorystyka ćwiczenia:</Heading>
    <Heading as='h2' size='md'>Wielkość obiektu:</Heading>
    <Heading as='h2' size='md'>Szybkość poruszania się obiektu:</Heading>
    <Heading as='h2' size='md'>Czas zatrzymania obiektu:</Heading>
    <Heading as='h2' size='md'>Kierunki poruszania się obiektu:</Heading>
    <Heading as='h2' size='md'>Długość ćwiczenia:</Heading>
</Box>
        </header>
    );
}

export default Page;