import axios from 'axios';

const baseUrl = 'https://openmind-api.vercel.app/4-14/';

const getRequest = async endpoint => {
  try {
    const response = await axios.get(`${baseUrl}${endpoint}`);

    if (response.status !== 200) {
      throw new Error(`${endpoint}에서 불러오는데 실패했습니다`);
    }

    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const postRequest = async (endpoint, data) => {
  try {
    const response = await axios.post(`${baseUrl}${endpoint}`, data);

    if (response.status !== 201) {
      throw new Error(`${endpoint}에서 불러오는데 실패했습니다`);
    }

    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getPageRequest = async (offset, sort) => {
  return getRequest(`subjects/?limit=8&offset=${offset}&sort=${sort}`);
};

//id 동적으로 받아오기
export const getSubjectInfo = async subjectId => {
  return getRequest(`subjects/${subjectId}/`);
};

export const getSubjectQuestion = async (subjectId, offset) => {
  return getRequest(`subjects/${subjectId}/questions/?limit=8&offset=${offset}`);
};

export const fetchData = async () => {
  const allPokemonData = [];
  for (let i = 1; i <= 50; i++) {
    const getName = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${i}`);
    const koreanName = getName.data.names.find(name => name.language.name === 'ko');
    const URL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
    allPokemonData.push({ name: koreanName.name, imgUrl: URL });
  }
  console.log(allPokemonData);
  return allPokemonData;
};
