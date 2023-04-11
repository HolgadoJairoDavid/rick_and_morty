import style from './slider.module.css'
import slide1 from "../../assets/img/slide1.png";
import slide2 from "../../assets/img/slide2.jpg";
import slide3 from "../../assets/img/slide3.jpg";

const Slider = () => {
    return (
        <div className={style.Slider}>
          <ul>
            <li>
              <img src={slide1} alt="" width="100%" height="100%" />
            </li>
            <li>
              <img src={slide2} alt="" width="100%" height="100%" />
            </li>
            <li>
              <img src={slide3} alt="" width="100%" height="100%" />
            </li>
          </ul>
        </div>
    )
}

export default Slider;