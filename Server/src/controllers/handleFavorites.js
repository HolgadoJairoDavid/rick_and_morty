let myFavorites = []


const postFav = (req, res) => {
 const {body} = req
myFavorites.push(body)
 res.status(200).json(myFavorites)

}

const deleteFav=(req, res)=> {
    const {id} = req.params

    const newFavorites = myFavorites.filter(char => char.id !== +id);
    myFavorites= newFavorites;

    res.status(200).json(myFavorites)
}

module.exports = {
    postFav,
    deleteFav
}