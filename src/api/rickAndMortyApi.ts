import axios from 'axios';

const api = axios.create({
  baseURL: 'https://rickandmortyapi.com/api/',
});

export const getCharacters = async (page: number, count: number, name: string = '') => {
  const response = await api.get(`character/?page=${page}&count=${count}&name=${name}`);

  return response.data;
}

export const getCharacterDetails = async (id: number) => {
    const response = await api.get(`character/${id}`);

    return response.data;
}