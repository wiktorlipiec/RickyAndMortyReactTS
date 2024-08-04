import { useState } from 'react';
import { useCharacters } from '../hooks/useCharacters';
import { Container } from '../styles/global';
import { SearchBar, CharacterList, Pagination } from '../components';

const Home: React.FC = () => {
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(10);
  const [name, setName] = useState('');

  const { data, isLoading, error } = useCharacters(page, count, name);

  const handleSearch = (name: string) => {
    setName(name);
    setPage(1);
    setCount(10);
  };

  const onPageChange = (event: { selected: number }) => {
    setPage(event.selected + 1);
  };

  return (
    <Container>
      <SearchBar onSearch={handleSearch} />
      {isLoading && <p>Loading...</p>}
      {error && <p>Error loading characters</p>}
      {data && <CharacterList characters={data.results} />}
      {data && (
        <Pagination
          currentPage={page - 1}
          pageCount={data.info.pages}
          onPageChange={onPageChange}
        />
      )}
    </Container>
  );
};

export default Home;
