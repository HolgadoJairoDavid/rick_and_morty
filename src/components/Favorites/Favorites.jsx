import { connect } from "react-redux";
import Card from "../Card/Card";
import { removeFav } from "../../redux/actions";
import style from './favoritres.module.css'

const Favorites = ({myFavorites, removeFav}) => {
    
  return (
    <div className={style.Container}>
      {myFavorites.map((character) => {
        return (
          <Card
            key= {character.id}
            id={character.id}
            name={character.name}
            status={character.status}
            image={character.image}
            onClose={()=>{
                removeFav(character.id)
            }}
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

const mapDispatchToProps = (dispatch)=>{
    return{
        removeFav: (id)=>{dispatch(removeFav(id))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);

