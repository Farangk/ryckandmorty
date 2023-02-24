const express = require('express'); 

const app = express(); 
const axios = require('axios')
const cors = require('cors');
const getAllChars = require('../controllers/getAllChars');
app.use(cors()); 

app.use(express.json());


app.get('/rickandmorty/allCharacters', async (req, res) => {
    try {
        const allCharacters = await getAllChars(); 
        res.status(200).json(allCharacters);
    } catch (error) {
        res.status(404).send('Hubo un error')
    }
})


app.get('/rickandmorty/character/:id', async (req, res) => {
    
    try {
        const {id} = req.params; 
        const response = await axios(`https://rickandmortyapi.com/api/character/${id}`)
        const data = response.data; 

        const infoCharacter = {
            id: data.id,
            name: data.name,
            species: data.species,
            gender: data.gender,
            image: data.image
        }
        res.status(200).json(infoCharacter); 

    } catch (error) {
        res.status(404).send(error.message); 
    }

})

app.get('/rickandmorty/detail/:detailId', async (req, res)=> {
    
    try {
        const {detailId} = req.params; 
        const response =(await axios(`https://rickandmortyapi.com/api/character/${detailId}`)).data

        const infoCharacterDetail = {
            name: response.name,
            status: response.status,
            species: response.species,
            gender: response.gender,
            origin: response.origin.name,
            image: response.image
        }
        res.status(200).json(infoCharacterDetail);
    } catch (error) {
        res.status(404).send(error.message)
    }
})


let fav = []; 

app.get('/rickandmorty/fav', (req, res) => {
    
    res.status(200).json(fav); 
})

app.post('/rickandmorty/fav', (req, res) => {
    
    fav.push(req.body); 

    res.status(200).send('Se guardaron correctamente'); 


})


app.delete('/rickandmorty/fav/:id', (req, res) => {
    
    const {id} =req.params; 

    const favFiltered = fav.filter(char => char.id !== parseInt(id));
    fav = favFiltered; 

    res.status(200).send('Se elimino correctamente'); 

})


module.exports = app; 