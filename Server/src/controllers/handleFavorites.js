let myFavorites = []


const postFav = (req, res) => {
 const {body} = req
myFavorites.push(body)
 res.status(200).json(myFavorites)

}

const deleteFav=(req, res)=> {
    const {id} = req.params

    myFavorites = myFavorites.filter(char => char.id !== +id);

    res.status(200).json(myFavorites)
}

const cleanFavs = (req, res) => {
    myFavorites= [];
    res.status(200).json(myFavorites)
}

module.exports = {
    postFav,
    deleteFav,
    cleanFavs
}