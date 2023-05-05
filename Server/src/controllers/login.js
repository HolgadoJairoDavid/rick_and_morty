const { User } = require("../DB_connection");

const login = async (req, res) => {
  const { email, password } = req.query;
  if (!email || !password) {
    return res.status(400).send("Faltan datos");
  }

  try {
    const userF = await User.findOne({where: {
        email
    }})

    if(!userF){
        return res.status(404).send('No estás logueado');
     } else if(userF.dataValues.password === password) {
      console.log(userF.dataValues.password)
        return res.status(201).json({access: true})
     } else {
        return res.status(403).send('Contraseña incorrecta')
     }

  } catch (error) {
    return res.status(500).send(error.message)
  }
};

module.exports = { login };

// router.get('wjjhjehqwkj', login)

// reducer ACTION

// action dispatch await
// axios.get(URL, body)
