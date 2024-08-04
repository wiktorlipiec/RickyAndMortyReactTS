export enum Gender {
  Female = 'Female',
  Male = 'Male',
  Unknown = 'unknown',
}

export enum Species {
  Alien = 'Alien',
  Human = 'Human',
}

export enum Status {
  Alive = 'Alive',
  Dead = 'Dead',
  Unknown = 'unknown',
}

export interface ILocationCharacter {
  name: string;
  url: string;
}

export interface ICharacterDTO {
  id: number;
  name: string;
  status: Status;
  species: Species;
  type: string;
  gender: Gender;
  origin: ILocationCharacter;
  location: ILocationCharacter;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface ICharacter {
  id: number;
  name: string;
  image: string;
  status: string;
  species: string;
  location: {
    name: string;
  };
}
