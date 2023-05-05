import Card from "../Card/Card";
import { removeFav, filterCards, orderCards, all, filterSpecies } from "../../redux/actions";
import style from "./favoritres.module.css";
import { useDispatch, connect } from "react-redux";
import { useEffect, useState } from "react";

const Favorites = ({ myFavorites, allCharacters, removeFav }) => {
  const dispatch = useDispatch();
  const [aux, setAux] = useState(false);

  useEffect(()=>{
return ()=>{
  dispatch(all()) // Muestra todos mis favoritos
}
  }, [dispatch])

  const species = []
  for(let i = 0; i < allCharacters.length; i++){
    if(!species.includes(allCharacters[i].species)){
      species.push(allCharacters[i].species)
    }
  }
  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
    setAux(!aux);
  };

  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };

  const handleSpecies = (event) => {
    dispatch(filterSpecies(event.target.value))
  }

  return (
    <div>
      <div className={style.Options}>

        <button
          className={style.SeeAll}
          onClick={() => {
            dispatch(all()); // Botón que muestra todos mis favoritos
          }}
        >
          See all
        </button>
      </div>

      <div className={style.Options2}>
      <div className={style.Selected}>
          <select className={style.Select} onChange={handleOrder}>
            <option selected disabled>
              Order your characters
            </option>
            <option value="A">Ascendant</option>
            <option value="D">Descendant</option>
          </select>
        </div>

        <div className={style.Selected}>
          <select className={style.Select} onChange={handleSpecies}>
            <option selected disabled>
              Show by species
            </option>
            {
              species.map(specie => <option value={specie}>{specie}</option>)
            }
          </select>
        </div>

        <div className={style.Selected}>
          <select className={style.Select} onChange={handleFilter}>
            <option selected disabled>
              Show by gender
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>
          </select>
        </div>
      </div>
      <div className={style.Container}>
        {myFavorites.map((props) => {
          return (
            <Card
              key={props.id}
              id={props.id}
              name={props.name}
              status={props.status}
              species={props.species}
              gender={props.gender}
              origin={props.origin.name}
              image={props.image}
            />
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
    allCharacters: state.allCharacters
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
