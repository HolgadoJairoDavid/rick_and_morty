import { Link } from 'react-router-dom';
import style from './card.module.css'

export default function Card({id, name, status, species, gender, origin, image, onClose}) {
   return (
      <div className={style.Card}>
         <div className={style.Close}>
            <button onClick={()=>onClose(id)}>X</button>
            </div>
         <img src={image} alt=''/>

         <Link to={`/detail/${id}`} className={style.Link}><h2 className={style.Name}>{name}</h2></Link>

         <h2>{status}</h2>
      </div>
   );
}