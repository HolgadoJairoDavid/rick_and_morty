const users = require("../utils/users");

const login = (req, res) => {
  const { email, password } = req.query;

  if (email && password) {
    const user = users.find(
      (currentUser) =>
        currentUser.email === email && currentUser.password === password
    );

    return (
      (user &&
        res
          .status(200)
          .json({ access: true })) ||
      res
        .status(200)
        .json({ access: false })
    );
  }
};
module.exports = login;
