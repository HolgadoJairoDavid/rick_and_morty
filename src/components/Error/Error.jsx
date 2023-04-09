import error from './Error404.png'
import style from './error.module.css'

const Error = () => {
    return (
        <div className={style.Error}>
            <img src={error} alt="" />
            <h2>ERROR 404</h2>
            <p>UPS! algo salió mal...</p>
        </div>
    )
}

export default Error;