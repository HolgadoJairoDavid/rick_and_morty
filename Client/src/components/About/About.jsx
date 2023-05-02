import style from "./about.module.css";
import aboutImg from "../../assets/img/About.jpg";
import bootstrap from "../../assets/img/bootstrap.png";
import css from "../../assets/img/css.png";
import express from "../../assets/img/express.png";
import git from "../../assets/img/git.png";
import html from "../../assets/img/html.png";
import JavaScript from "../../assets/img/JavaScript.png";
import Linkedin from "../../assets/img/Linkedin.png";
import node from "../../assets/img/node.png";
import react from "../../assets/img/react.png";
const About = () => {
  return (
    <div className={style.Container}>
      <div className={style.AboutMe}>
        <div className={style.Img}>
          <img src={aboutImg} alt="" />
        </div>
        <div>
          <h1>About me</h1>
          <span>
            Hello! I'm Jairo Holgado. I am 18 years old and I am passionate
            about computing and programming. I like to work in a team and always
            find the solution to problems. I am empathic, positive, persevering
            and very curious. And, thanks to these virtues, I was achieving
            goals and developing various projects. I am willing to expand my
            knowledge and grow as a professional and as a person.
          </span>
        </div>
      </div>
      <div className={style.Techs}>
        <h1>Technologies</h1>
        <div className={style.TechsImg}>
          <div className={style.Back}>
            <img src={react} alt="" />
          </div>
          <div className={style.Back}>
            <img src={express} alt="" />
          </div>
          <div className={style.Back}>
            <img src={html} alt="" />
          </div>
          <div className={style.Back}>
            <img src={css} alt="" />
          </div>
          <div className={style.Back}>
            <img src={bootstrap} alt="" />
          </div>
          <div className={style.Back}>
            <img src={JavaScript} alt="" />
          </div>
          <div className={style.Back}>
            <img src={git} alt="" />
          </div>
          <div className={style.Back}>
            <img src={node} alt="" />
          </div>
        </div>
      </div>
      <div className={style.Contact}>
        <h1>Contact Me</h1>
        <a target="blank" href="https://www.linkedin.com/in/jairo-david-holgado-a28589261">
          <div className={style.Back}>
            <img src={Linkedin} alt="" />
          </div>
        </a>
      </div>
      <div>
        <br />
      </div>
    </div>
  );
};
export default About;
