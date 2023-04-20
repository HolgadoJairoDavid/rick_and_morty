const axios = require('axios')
 
const getCharById = (res, id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response => response.data)
    .then(data => {
        const character = {
            id,
            name: data.name,
            gender: data.gender,
            species: data.species,
            origin: data.origin,
            image: data.image,
            status: data.status
        }
        res.writeHead(200, {'Content-Type': 'application/json'})
        .end(JSON.stringify(character));
    }).catch(error=>{
        res.writeHead(500, {'Content-Type': 'text/plain'})
        .end(`Personaje con id ${id} no encontrado`)
    })
}

module.exports = getCharById