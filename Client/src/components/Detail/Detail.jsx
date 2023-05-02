import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import style from "./detail.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faGenderless,
  faGlobeAfrica,
  faHeartPulse,
  faTv,
} from "@fortawesome/free-solid-svg-icons";

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
          <div>
            <span className={style.Id}>#{id}</span>
          </div>
          <h1>{character.name}</h1>
          <p>
            {" "}
            <FontAwesomeIcon icon={faHeartPulse} /> &nbsp;<h2>State:</h2>{" "}
            {character.status}
          </p>
          <p>
            {" "}
            <FontAwesomeIcon icon={faUser} /> &nbsp;<h2>Species:</h2>{" "}
            {character.species}
          </p>
          <p>
            {" "}
            <FontAwesomeIcon icon={faGenderless} /> &nbsp;<h2>Gender:</h2>{" "}
            {character.gender}
          </p>
          <p>
            {" "}
            <FontAwesomeIcon icon={faGlobeAfrica} /> &nbsp;<h2>Origin:</h2>{" "}
            {character.origin.name}
          </p>
        </div>
          <img src={character.image} alt="" />
          <figcaption>
            <FontAwesomeIcon className={style.Television} icon={faTv} />
            <br />
            <h1 className={style.Episode}>Episodes</h1>
            <br />

            {character.episode.map((epi, index) => {
              const arr = epi.split("/");
              if(index === character.episode.length -1){
                return <span className={style.Number}> {arr[arr.length - 1]} </span>;

              }
              return <span className={style.Number}> {arr[arr.length - 1]} - </span>;
            })}
          </figcaption>
      </div>
    );
  } else return <div className={style.Charging}>Cargando...</div>;
};

export default Detail;
