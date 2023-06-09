import './App.css';
import Cards from './components/Cards/Cards.jsx';
import { useState } from 'react';
import Nav from "./components/Nav/Nav.jsx";
import axios from 'axios';
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
import { Routes, Route, useLocation } from 'react-router-dom';
import Form from "./components/Form/Form.jsx";

function App() {

   const [ characters, setCharacters ] = useState([]);
   const location = useLocation();

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = id => {
      const charactersFilter = characters.filter(character =>
         character.id !== Number(id))
      setCharacters(charactersFilter);
   }
   
   return (
      <div className='App'>
         {
            location.pathname !== "/"
            ? <Nav onSearch={onSearch}/>
            : null
         }
         <Routes>
            <Route exact path="/" element={<Form />}/>
            <Route path="/home" element={
               <Cards characters={characters} onClose={onClose} />
            }/>
            <Route path="/about" element={<About />} />
            <Route path="/detail/:id" element={<Detail />} />
         </Routes>
         
      </div>
   );
}

export default App;
