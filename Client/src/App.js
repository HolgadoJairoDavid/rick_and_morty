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
import Favorites from "./components/Favorites/Favorites";
import { useDispatch } from "react-redux";
import { removeFav } from "./redux/actions";
import {cleanFavorites} from './redux/actions'
import style from './app.module.css'

function App() {
  const dispatch = useDispatch()

  let [access, setAccess] = useState(false);
  let [characters, setCharacters] = useState([]);
  let { pathname } = useLocation();
  const navigate = useNavigate();

    // ******************************************************************************

  const login=(userData) => {
    const { email, password } = userData;
    const URL = 'http://localhost:3001/rickandmorty/login';
    axios(URL + `/?email=${email}&password=${password}`).then(({ data }) => {
       const { access } = data;
       setAccess(access);
       access && navigate('/start/home')
    });
 }

  const logOut = () => {
    setAccess(false);
    dispatch(cleanFavorites())
  };

  // ******************************************************************************

  function onSearch(id) {
    for (const character of characters) {
      if (character.id === parseInt(id))
        return window.alert("El personaje ya esta agregado!");
    }
    axios(`${CONSTANTES.URL}${id}`)
      .then(({ data }) => {
        if (data.id) {
          setCharacters([...characters, data]);
        }
      })
      .catch(() => window.alert("¡No hay personajes con este ID"));
  }

  const onClose = (id) => {
    setCharacters(characters.filter((character) => id !== character.id));
    dispatch(removeFav(id))
  };

  const onRandom = (id) => {
    axios(`${CONSTANTES.URL}${id}`).then(({ data }) => {
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
      (pathname === "/start/home" || pathname === '/favorites' ||
        pathname === "/start/about" ||
        CONSTANTES.searchPath(pathname)) &&
      navigate("/login"))

      return ()=>{
        pathname === '/login' && setCharacters([])
      }
  }, [access, navigate, pathname]);

    // ******************************************************************************

  return (
    <div className={style.App}>
      {(pathname === "/start/home" || pathname === "/start/about" || pathname === "/favorites" ||  CONSTANTES.searchPath(pathname) ) && (
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
        <Route path="/favorites" element={<Favorites />}></Route>
      </Routes>
    </div>
  );
}

export default App;
