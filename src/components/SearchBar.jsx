export default function SearchBar(props) {
   return (
      <div>
         <input type="text" />
         <button onClick={props.onSearch}>Agregar</button>
      </div>
   );
}
