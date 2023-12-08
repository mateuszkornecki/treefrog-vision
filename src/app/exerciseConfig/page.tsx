import { Heading } from '@chakra-ui/react';

const Page =() => {

    return (
        <header>
            <Heading as='h1' size='xl'>Ustawienia ćwiczenia</Heading>
            <main className='exercise-config__list--scrollable'>
                <Heading as='h2' size='md' className='exercise-config__item'>Kolorystyka ćwiczenia:</Heading>
                <Heading as='h2' size='md' className='exercise-config__item'>Wielkość obiektu:</Heading>
                <Heading as='h2' size='md' className='exercise-config__item'>Szybkość poruszania się obiektu:</Heading>
                <Heading as='h2' size='md' className='exercise-config__item'>Czas zatrzymania obiektu:</Heading>
                <Heading as='h2' size='md' className='exercise-config__item'>Kierunki:</Heading>

            </main>
    </header>
    );
}

export default Page;