const {Character} = require('../models/Character')
const getAllChars = async () => {
    try {
        const allCharacters = await Character.findAll(); //Trae todo
        return allCharacters;
    } catch (error) {
        return {error: error.message}
    }
};


module.exports = getAllChars;