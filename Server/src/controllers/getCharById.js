const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

//PRESTÁ ATENCIÓN
  
const getCharById = (req, res) => {
  const { id } = req.params;
  axios.get(`${URL}${id}`)
    .then((response) => response.data)
    .then(({id, status, name, origin, species, image, gender}) => {
        const character = {
            id,
            status,
            name,
            origin,
            species,
            image,
            gender
        }

        return (!character && res.writeHead(404, {'Content-Type': 'application/json'}).end({error : 'Not found'})) || res.writeHead(200, {'Content-Type': 'application/json'}).end(JSON.stringify(character))
    })
    .catch(error => res.writeHead(500, {'Content-Type': 'application/text/plain'}).end(error.message))
};

module.exports = getCharById