import { NavLink, useLocation } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import style from "./nav.module.css";
import idGenerator from "./CONSTANTES";
import Head from "../Head/Head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightFromBracket,
  faHouse,
  faAddressCard,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

const Nav = ({ onSearch, onRandom, characters, logOut }) => {
  let { pathname } = useLocation();
  const charactersId = [];
  for (const character of characters) {
    charactersId.push(character.id);
  }

  const returnId = (id) => {
    if (!charactersId.includes(id)) return id;
    return returnId(idGenerator());
  };

  return (
    <div className={style.Nav}>
      <Head />
      <div className={style.Heading}>
        <button
          className={style.LogOut}
          onClick={() => {
            logOut();
          }}
        >
          <FontAwesomeIcon className={style.Icons} icon={faRightFromBracket} />
        </button>

        <NavLink to="/about" className={style.NavLink}>
          <button className={style.About}>
            <FontAwesomeIcon  icon={faAddressCard} />
          </button>
        </NavLink>
        <NavLink to="/home" className={style.NavLink}>
          <button className={style.Home}>
            <FontAwesomeIcon className={style.Icons} icon={faHouse} />
          </button>
        </NavLink>
        <NavLink to="/favorites">
          <button className={style.Favorites}>
            <FontAwesomeIcon className={style.Icons} icon={faHeart} />
          </button>
        </NavLink>
      </div>
      {pathname === "/home" && <SearchBar onSearch={onSearch} />}
      {pathname === "/home" && (
        <button
          className={style.Button}
          onClick={() => onRandom(returnId(idGenerator()))}
        >
          Random character
        </button>
      )}
    </div>
  );
};

export default Nav;
