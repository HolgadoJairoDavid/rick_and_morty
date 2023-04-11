import { useState } from "react";
import validate from "./validation";
import style from "./form.module.css";
import Slider from "../Slider/Slider";

const Form = ({ login }) => {

  const [errors, setErrors] = useState({});
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

//   *****************************************************************

  const handleChange = (event) => {
    let property = event.target.name;
    let value = event.target.value;

    setUserData({ ...userData, [property]: value });
    setErrors(validate({ ...userData, [property]: value }));
  };

  //   *****************************************************************
  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  //   *****************************************************************

  return (
    <div className={style.Container}>
      <div className={style.Content}>
        <form action="" className={style.Form}>
          <h1>Welcome back</h1>
          <label htmlFor="email">Email </label>
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
          />
          <p>{errors.email}</p>

          <label htmlFor="password">Password </label>
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
          />
          <p>{errors.password}</p>

          <button
            disabled={
              !userData.email ||
              !userData.password ||
              errors.email ||
              errors.password
            }
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
        
        <Slider />
      </div>
    </div>
  );
};

export default Form;
