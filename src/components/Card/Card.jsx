import { Link } from "react-router-dom";
import style from "./card.module.css";
import { useState, useEffect } from "react";
import { addFav, removeFav } from "../../redux/actions";
import { connect } from "react-redux";

function Card({
  id,
  name,
  status,
  image,
  onClose,
  addFav,
  removeFav,
  myFavorites,
}) {
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else if (!isFav) {
      setIsFav(true);
  
      addFav({
        id: id,
        name: name,
        status: status,
        image: image,
        onClose: onClose,
        addFav: addFav,
        removeFav: removeFav,
        myFavorites: myFavorites,
      });
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites, id]);

  return (
    <div className={style.Card}>

   


      <div className={style.Close}>
        <button onClick={() => onClose(id)}>X</button>
      </div>
      <img src={image} alt="" />

      <Link to={`/detail/${id}`} className={style.Link}>
        <h2 className={style.Name}>{name}</h2>
      </Link>
      {
      isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )
      }
      <h2>{status}</h2>
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
