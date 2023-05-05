import { Link, useLocation } from "react-router-dom";
import style from "./card.module.css";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { addFav, removeFav } from "../../redux/actions";

function Card(props) {
  const {pathname} = useLocation()
  const [isFav, setIsFav] = useState(false);
  

  const handleFavorite = () => {
    
    if (isFav) {
      setIsFav(!isFav);
      props.removeFav(props.id);
    } else if (!isFav) {
      setIsFav(!isFav);
      props.addFav(props); 
    }
  };

  useEffect(() => {
    props.myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [props]);

  return (
    <div className={style.Card}>
      {isFav === true? (
        <button className={style.FavoritesButton} onClick={handleFavorite}>
          ❤️
        </button>
      ) : (
        <button className={style.FavoritesButton} onClick={handleFavorite}>
          🤍
        </button>
      )}

      <div className={style.Close}>
        
         {pathname !== '/favorites' && <button onClick={() => props.onClose(props.id)}>X</button>}
        
      </div>
      <img src={props.image} alt="" />

      <Link to={`/detail/${props.id}`} className={style.Link}>
        <h2 className={style.Name}>{props.name}</h2>
      </Link>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (personaje) => {
      dispatch(addFav(personaje));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
