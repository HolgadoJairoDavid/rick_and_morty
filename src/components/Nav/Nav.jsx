import { NavLink, useLocation } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import style from './nav.module.css';
import idGenerator from './CONSTANTES'
import Head from '../Head/Head'

const Nav = ({onSearch, onRandom, characters, logOut}) => {
    let {pathname} = useLocation();
    const charactersId= [];
    for(const character of characters){
        charactersId.push(character.id)
    }

    const returnId = (id) => {
        if(!charactersId.includes(id)) return id;
        return returnId(idGenerator())
    }

    return (
        <div className={style.Nav}>
            <Head />
            <div className={style.Heading}>

            <button onClick={()=> {logOut()}}>Log out</button>

            <NavLink to='/start/about' className={style.NavLink}><p>About</p></NavLink>
            <NavLink to='/start/home' className={style.NavLink}><p>Home</p></NavLink>
            <NavLink to="/favorites">
      <button>Favorites</button>
      </NavLink>
            
            </div>
            {pathname === '/start/home' && <SearchBar onSearch={onSearch} />}
            {pathname === '/start/home' && <button onClick={()=> onRandom(returnId(idGenerator()))}>Random character</button> }
        </div>
    )
}

export default Nav;