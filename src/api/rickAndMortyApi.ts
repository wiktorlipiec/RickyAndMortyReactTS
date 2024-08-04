import axios from 'axios';
import { ICharactersDTO, ICharacterDTO } from '../types';

const api = axios.create({
  baseURL: 'https://rickandmortyapi.com/api/',
});

export const getCharacters = async (page: number, count: number, name: string = ''): Promise<ICharactersDTO> => {
  const response = await api.get(`character/?page=${page}&count=${count}&name=${name}`);

  return response.data;
}

export const getCharacterDetails = async (id: number): Promise<ICharacterDTO> => {
    const response = await api.get(`character/${id}`);

    return response.data;
}