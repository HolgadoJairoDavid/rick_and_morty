const { Favorite } = require("../DB_connection");

const postFav = async (req, res) => {
  const { name, image, status, origin, species, gender, id } = req.body;
  if (!name || !image || !status || !origin || !species || !gender) {
    return res
      .status(401)
      .send(
        "Faltan datos para anexarlo al favorito de la ruta favrito en la sección favorito donde están los favoritos... entendiste?"
      );
  }

  try {

    const [fav, bool] = await Favorite.findOrCreate({
      where: {
        name,
      },
      defaults: {
        id,
        name,
        image,
        status,
        origin,
        species,
        gender,
      },
    });

    console.log(fav)

    const results = await Favorite.findAll();

    return bool
      ? res.status(200).json(results)
      : res
          .status(400)
          .send(
            "Todo salió mal jajaja hasta eso, DALE, VOS PODÉS CRACK, PROBÁ DE VUELTA"
          );
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = { postFav };
