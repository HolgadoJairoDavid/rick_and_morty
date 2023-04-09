import Cards from "./components/Cards/Cards";
import Nav from "./components/Nav/Nav";
import { useState, useEffect } from "react";
import axios from "axios";
import About from "./components/About/About";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Detail from "./components/Detail/Detail";
import Error from "./components/Error/Error";
import Form from "./components/Form/Form";

function App() {
  let [access, setAccess] = useState(false);
  const navigate = useNavigate();
  // ! CREDENCIALES FAKE
  const EMAIL = "jairodavidholgado@gmail.com",
    PASSWORD = "jairo18";

  // LOGIN

  const login = ({ email, password }) => {
    if (password === PASSWORD && email === EMAIL) {
      setAccess(true);
      navigate("/start/home");
    } else if (email !== EMAIL) {
      alert("Email incorrecto");
    } else {
      alert("Contraseña incorrecta");
    }
  };

  // *************************************************

  // LOGOUT

  const logOut = () => {
    setAccess(false);
  };

  let [characters, setCharacters] = useState([]);

  // API Y KEY
  const KEY = "7194934f1270.fac66ff2b08baf717919";
  const URL = "https://be-a-rym.up.railway.app/api/character/";

  // ONSEARCH
  function onSearch(id) {
    for (const character of characters) {
      if (character.id === id)
        return window.alert("El personaje ya esta agregado!");
    }
    axios(`${URL}${id}/?key=${KEY}`)
      .then(({ data }) => {
        if (data.id) {
          setCharacters([...characters, data]);
        } else {
          window.alert("¡No hay personajes con este ID");
        }
      })
      .catch(() => window.alert("¡No hay personajes con este ID"));
  }

  // ONCLOSE
  const onClose = (id) => {
    setCharacters(characters.filter((character) => id !== character.id));
  };

  // ONRANDOM
  const onRandom = (id) => {
    axios(`${URL}${id}/?key=${KEY}`).then(({ data }) => {
      if (data.id) {
        setCharacters([...characters, data]);
      } else {
        window.alert("¡No hay personajes con este ID");
      }
    });
  };

  let { pathname } = useLocation();

  const searchPath = (pathOfDetail) => {
    let number = pathOfDetail.split("/");

    return number.includes("detail");
  };

  useEffect(() => {
    (!access &&
      (pathname === "/start/home" ||
        pathname === "/start/about" ||
        searchPath(pathname)) &&
      navigate("/login"))
  }, [access]);

  return (
    <div className="App">
      {pathname === "/start/home" && (
        <Nav
          onSearch={onSearch}
          onRandom={onRandom}
          characters={characters}
          logOut={logOut}
        />
      )}

      <Routes>
        <Route path="/login" element={<Form login={login} />} />

        <Route
          path="/start/home"
          element={<Cards onClose={onClose} characters={characters} />}
        />

        <Route path="/start/about" element={<About />} />

        <Route path="/detail/:id" element={<Detail />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
