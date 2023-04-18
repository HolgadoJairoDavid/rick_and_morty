import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import style from "./detail.module.css";

const Detail = () => {
  let { id } = useParams();
  let [character, setCharacter] = useState({});

    // ******************************************************************************

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

    // ******************************************************************************

  if (Object.keys(character).length > 0) {
    return (
      <div className={style.Container}>
        <div className={style.Content}>
          <h1>{character.name}</h1>
          <p>- State: {character.status}</p>
          <p>- Species: {character.species}</p>
          <p>- Gender: {character.gender}</p>
          <p>- Origin: {character.origin.name}</p>
        </div>
        <img src={character.image} alt=""/>
      </div>
    );
  } else return <div className={style.Charging}>Cargando...</div>;
};

export default Detail;