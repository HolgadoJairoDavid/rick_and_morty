import style from "./inicio.module.css";
import { NavLink } from "react-router-dom";

const Inicio = () => {
  return (
    <div className={style.Container}>
        <NavLink to = '/login'>
            <button>Start</button>
        </NavLink>
    </div>
  )
};

export default Inicio;
