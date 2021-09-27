import fetch from 'node-fetch';
// need to load this into SERVICES 
module.exports = async () => {

  const fetchedApi = await fetch('https://rickandmortyapi.com/api/character');
  const mungedData = await fetchedApi.json();

  console.log('FETCHED API DATA >>', mungedData);

  return {
    'name': mungedData.name,
    'status': mungedData.status,
    'species': mungedData.species
  };

};



