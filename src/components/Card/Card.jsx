import styles from "./Card.module.css"
import { Link } from "react-router-dom";

export default function Card( props ) {
   return (
      <div className={styles.container}>
         <div className={styles.buttonContainer}>
            <button onClick={() => props.onClose(props.id)}>X</button>
         </div>
            <Link to={`/detail/${props.id}`}>
            <h2>Name: {props.name}</h2>
            </Link>
         <img src={props.image} alt="" />
         <div className={styles.dataContainer}>
            <h4>Status: {props.status}</h4>
            <h4>Species: {props.species}</h4>
            <h4>Gender: {props.gender}</h4>
            <h4>Origin: {props.origin}</h4>
         </div>
      </div>
   );
}
