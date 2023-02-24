// let axios = require('axios'); 
// let getCharById=(res, id)=>{
//     res.setHeader('Access-Control-Allow-Origin', '*');
//         axios(`https://rickandmortyapi.com/api/character/${id}`)
//                 .then((result)=> result.data) 
//                 .then(data => {
//                     let object = {
//                         id: data.id,
//                         name: data.name,
//                         image: data.image,
//                         gender: data.gender,
//                         species: data.species
//                     }
//                     res.writeHead(200, {'Conent-type':'application/json'})
//                     .end(JSON.stringify(object))
                    
//                 })
//                 .catch(error => res.writeHead(500, {'Content-Type':'text/plain'})
//                 .end('El Personaje no fue encontrado'))
// }
// module.exports= getCharById


