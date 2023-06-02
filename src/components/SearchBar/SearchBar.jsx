import styles from "./SearchBar.module.css"
export default function SearchBar(props) {
   return (
      <div className={styles.container}>
         <input type="text" />
         <button onClick={props.onSearch}>Agregar</button>
      </div>
   );
}
