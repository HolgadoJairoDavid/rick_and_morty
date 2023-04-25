const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

//PRESTÁ ATENCIÓN
  
const getCharById = async (req, res) => {
  const { id } = req.params;
    try {
        const {data} = await axios.get(`${URL}${id}`)
        if(!data.name) {
            return ( res.status(404).json({error : 'Not found'}))    
        }
        const character =  {
            id: data.id,
            status: data.status,
            name: data.name, 
            origin: data.origin,
            species: data.species,
            image: data.image,
            gender: data.gender
        } 
        return res.status(200).json(character)  
    } catch (error) {
        res.status(500).send(error.message)
    }
};


module.exports = getCharById