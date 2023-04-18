
import Card from "../Card/Card";
import { removeFav, filterCards, orderCards, all } from "../../redux/actions";
import style from "./favoritres.module.css";
import { useDispatch, connect } from "react-redux";
import { useState } from "react";


const Favorites = ({ myFavorites, removeFav }) => {
  const dispatch = useDispatch();
  const [aux, setAux] = useState(false);

  const handleOrder = (event) => {
      dispatch(orderCards(event.target.value));
      setAux(!aux)
  };

  const handleFilter = (event) => {
    
      dispatch(filterCards(event.target.value));
    
  
  };

  return (
   <div>
     <div className={style.Options}>

   
   <select onChange={handleOrder}>
     <option value="A">Ascendente</option>
     <option value="D">Descendente</option>
   </select>

   <select onChange={handleFilter}>
     
     <option value="Male">Male</option>
     <option value="Female">Female</option>
     <option value="Genderless">Genderless</option>
     <option value="unknown">unknown</option>
   </select>
   <button onClick={()=> {dispatch(all())}}>See all</button>
</div>
    <div className={style.Container}>
      {myFavorites.map((props) => {
        return (
          <Card
                      id={props.id}
                      name={props.name}
                      status={props.status}
                      species={props.species}
                      gender={props.gender}
                      origin={props.origin.name}
                      image={props.image}
                      onClose={() => {
                          removeFav(props.id);
                      }}
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