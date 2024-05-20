import styles from "../loader/Loader.module.scss"
import ReactDOM from "react-dom"
import loaderImg from "../../assets/Aisling (1).jpg"
const Loader = () => {
  return (
    ReactDOM.createPortal(
      <article className={styles.wrapper}>
      <div className={styles.loader}>
      <img src={loaderImg} alt="loader" style={{borderRadius:"50%"}} />
      </div>
      </article>,
      document.getElementById("loader")
    )
  )
}

export default Loader