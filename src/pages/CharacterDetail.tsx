import React from 'react';
import { useParams } from 'react-router-dom';
import { useCharacterDetails } from '../hooks/useCharacters';
import { Container } from '../styles/global';
import { CharacterDetails, LinkButton } from '../components';

const CharacterDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, error } = useCharacterDetails(Number(id));

  return (
    <Container>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error loading character details</p>}
      {data && <CharacterDetails character={data} />}
      <LinkButton to="/">Back to List</LinkButton>
    </Container>
  );
};

export default CharacterDetail;
