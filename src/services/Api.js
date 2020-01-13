const characterApi = 'https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json';

const fetchRickyMorty = () => fetch(characterApi).then(response => response.json());

export { fetchRickyMorty };
