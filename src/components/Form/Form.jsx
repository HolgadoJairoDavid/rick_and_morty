import { useState } from "react";
import Validate from "./validation";
import style from './form.module.css'
import slide1 from './img/slide1.png'
import slide2 from './img/slide2.jpg'
import slide3 from './img/slide3.jpg'

const Form = ({login}) => {

    const [errors, setErrors] = useState({})
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })

    const handleChange =(event)=> {
        let property= event.target.name
        let value= event.target.value;

        setUserData({...userData, [property]: value})
        setErrors(Validate({...userData, [property]: value}))
      }


    const handleSubmit = (event) => {
        event.preventDefault()
        login(userData)
    }

    return (
        <div className={style.Container}>
            <div className={style.Content}>
            <form action="" className={style.Form}>
            <h1>Welcome back</h1>
            <label htmlFor="email">Email </label>
            <input type="email" name="email" value={userData.email} onChange={handleChange}/>
            <p>{errors.email}</p>

            <label htmlFor="password">Password </label>
            <input type="password" name="password" value={userData.password} onChange={handleChange}/>
            <p>{errors.password}</p>

            <button disabled={!userData.email || !userData.password || errors.email || errors.password} type="submit" onClick={handleSubmit}>Submit</button>
            </form>

            <div className={style.Slider}>

                <ul>
                    <li><img src={slide1} alt=""  width='100%' height='100%'/></li>
                    <li><img src={slide2} alt=""  width='100%' height='100%'/></li>
                    <li><img src={slide3} alt="" width='100%' height='100%'/></li>
                </ul>            
            </div>
            </div>
        </div>
    )
}

export default Form;