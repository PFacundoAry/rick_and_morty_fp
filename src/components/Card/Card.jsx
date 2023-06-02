import styles from "./Card.module.css"
export default function Card( props ) {
   return (
      <div className={styles.container}>
         <div className={styles.buttonContainer}>
            <button onClick={props.onClose}>X</button>
         </div>
            <h2>Name: {props.name}</h2>
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
