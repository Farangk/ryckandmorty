const axios = require('axios'); 
const {Character} = require('../models/Character')
const getApiData =async () => {
    try {
        let i=1;
        let character= [];
        while(i <=5){
            let apiData = await axios(`https://rickandmortyapi.com/api/character?page=${i}`)

            character.push(apiData); 
            i++; 
        }
                                                            //CON AXIOS SIEMPRE HAY QUE TRAER A DATA PRIMERO 
        character = (await Promise.all(character)).map(res => res.data.results.map(char=> {
            return ({
                id: char.id,
                name: char.name,
                status: char.status,
                species: char.species,
                gender: char.gender,
                origin: char.origin.name,
                image: char.image

            })
        }))
        let allCharacters = [];
        allCharacters.map(char => {allCharacters = allCharacters.concat (char)})
        return allCharacters;
        
    } catch (error) {
        return 
        {error: error.message}
    }
}

const saveApiData = async () => {
    try {
        const allCharacters = await getApiData(); 
        const createCharacter = await Character.bulkCreate(allCharacters);    //se le pasa un array de objetos y los crea todos en la DB
    } catch (error) {
        return 
        {error: error.message}
    }
}

module.exports = saveApiData;
