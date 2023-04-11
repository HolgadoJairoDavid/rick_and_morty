import Cards from "./components/Cards/Cards";
import Nav from "./components/Nav/Nav";
import { useState, useEffect } from "react";
import axios from "axios";
import About from "./components/About/About";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Detail from "./components/Detail/Detail";
import Error from "./components/Error/Error";
import Form from "./components/Form/Form";
import CONSTANTES from "./App/CONSTANTES";
import Inicio from "./components/Inicio/Inicio";

function App() {

  let [access, setAccess] = useState(false);
  let [characters, setCharacters] = useState([]);
  let { pathname } = useLocation();
  const navigate = useNavigate();

    // ******************************************************************************

  const login = ({ email, password }) => {
    if (password === CONSTANTES.PASSWORD && email === CONSTANTES.EMAIL) {
      setAccess(true);
      navigate("/start/home");
    } else if (email !== CONSTANTES.EMAIL) {
      alert("Email incorrecto");
    } else {
      alert("Contraseña incorrecta");
    }
  };

  const logOut = () => {
    setAccess(false);
  };

  // ******************************************************************************

  function onSearch(id) {
    for (const character of characters) {
      if (character.id === id)
        return window.alert("El personaje ya esta agregado!");
    }
    axios(`${CONSTANTES.URL}${id}/?key=${CONSTANTES.KEY}`)
      .then(({ data }) => {
        if (data.id) {
          setCharacters([...characters, data]);
        } else {
          window.alert("¡No hay personajes con este ID");
        }
      })
      .catch(() => window.alert("¡No hay personajes con este ID"));
  }

  const onClose = (id) => {
    setCharacters(characters.filter((character) => id !== character.id));
  };

  const onRandom = (id) => {
    axios(`${CONSTANTES.URL}${id}/?key=${CONSTANTES.KEY}`).then(({ data }) => {
      if (data.id) {
        setCharacters([...characters, data]);
      } else {
        window.alert("¡No hay personajes con este ID");
      }
    });
  };

  // ******************************************************************************

  useEffect(() => {
    (!access &&
      (pathname === "/start/home" ||
        pathname === "/start/about" ||
        CONSTANTES.searchPath(pathname)) &&
      navigate("/login"))

      return ()=>{
        pathname === '/login' && setCharacters([])
      }
  }, [access, navigate, pathname]);

    // ******************************************************************************

  return (
    <div className="App">
      {pathname !== "/login" && pathname !== '/'&&(
        <Nav
          onSearch={onSearch}
          onRandom={onRandom}
          characters={characters}
          logOut={logOut}
        />
      )}

      <Routes>
        <Route path="/" element={<Inicio/>} />
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
