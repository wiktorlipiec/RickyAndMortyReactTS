import { ICharacterDTO } from './character';

export interface IInfo {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

export interface ICharactersDTO {
  info: IInfo;
  results: ICharacterDTO[];
}
