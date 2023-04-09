import { NavLink, useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import style from './nav.module.css'

const Nav = ({onSearch, onRandom, characters, logOut}) => {
    const charactersId= [];
    for(const character of characters){
        charactersId.push(character.id)
    }
    let id = Math.floor(Math.random()*(825-1+1)) +1;

    function returnId (id) {
        if(!charactersId.includes(id)) return id;
        let newId = Math.floor(Math.random()*(825-1+1)) +1;
        return returnId(newId)
    }

    // 
    
    const navigate = useNavigate ();

    const handleLogOut = () => {
        logOut()
        navigate('/login')
    }

    return (
        <div className={style.Nav}>
            <div className={style.Head}></div>
            <div className={style.Heading}>

            <button onClick={handleLogOut}>Log out</button>

            <NavLink to='/start/about' className={style.NavLink}><p>About</p></NavLink>
            <NavLink to='/start/home' className={style.NavLink}><p>Home</p></NavLink>
            
            </div>
            <SearchBar onSearch={onSearch} />
            <button onClick={()=> onRandom(returnId(id))}>Personaje Random</button> 
        </div>
    )
}

export default Nav;