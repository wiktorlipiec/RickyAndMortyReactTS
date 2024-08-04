import { useQuery } from '@tanstack/react-query';
import { getCharacters, getCharacterDetails } from '../api/rickAndMortyApi';

export const useCharacters = (page: number, count: number, name: string) => {
  return useQuery({
    queryKey: ['characters', page, count, name],
    queryFn: () => getCharacters(page, count, name),
  });
};

export const useCharacterDetails = (id: number) => {
  return useQuery({
    queryKey: ['character', id],
    queryFn: () => getCharacterDetails(id),
  });
};
