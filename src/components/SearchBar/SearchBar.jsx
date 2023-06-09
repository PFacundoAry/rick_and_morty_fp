import styles from "./SearchBar.module.css"
import { useState } from "react";

export default function SearchBar(props) {

   const [id, setId] = useState("");

   const handleChange = (event) => {
      setId(event.target.value)
   }

   // const validate = () => {
   //    const idsCreated = [...id]
   //    let ids = [];
   //    idsCreated.forEach(control => {
   //       if(ids.includes(control.valueOf)){
   //          alert("Este personaje ya está agregado!");
   //          return;
   //       }
   //       ids.push(control.valueOf);
   //    })
   // }

   return (
      <div className={styles.container}>
         <input type="search" onChange={handleChange} value={id} />
         <button 
         onClick= {() => {
            const function1 = () => props.onSearch(id)
            // const function2 = () => validate();
            function1();
            // function2();
         }}         
         >Agregar</button>
      </div>
   );
}
