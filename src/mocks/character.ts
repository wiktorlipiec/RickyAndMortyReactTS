import { ICharacterDTO, ICharacter } from '../types/character';
import { Status, Species, Gender } from '../types/character';

export const characterDetailsMock: ICharacterDTO = {
  id: 1,
  name: 'Rick Sanchez',
  status: Status.Alive,
  species: Species.Human,
  type: '',
  gender: Gender.Male,
  origin: { name: 'Earth', url: '' },
  location: { name: 'Citadel of Ricks', url: '' },
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  episode: [
    'https://rickandmortyapi.com/api/episode/1',
    'https://rickandmortyapi.com/api/episode/2',
  ],
  url: '',
  created: '',
};

export const characterMock: ICharacter = {
  id: 1,
  name: 'Rick Sanchez',
  status: Status.Alive,
  species: Species.Human,
  location: { name: 'Citadel of Ricks' },
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
};

export const charactersMock = [
  {
    id: 1,
    name: 'Rick Sanchez',
    status: Status.Alive,
    species: Species.Human,
    location: { name: 'Citadel of Ricks' },
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  },
  {
    id: 2,
    name: 'Morty Smith',
    status: Status.Dead,
    species: Species.Alien,
    location: { name: 'London' },
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
  },
];
