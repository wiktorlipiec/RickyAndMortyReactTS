import { useState } from 'react';
import { useCharacters } from '../hooks/useCharacters';

const Home = () => {
    const [page, setPage] = useState(1);
    const [count, setCount] = useState(10);
    const [name, setName] = useState('');

    const { data, isLoading, error } = useCharacters(page, count, name);

    return (
        <div>
            {data?.results.map((character) => (<div key={character.id}>{character.name}</div>))}
        </div>
    );
}

export default Home;