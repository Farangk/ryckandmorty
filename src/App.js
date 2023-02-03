import "./App.css";
// import Card from './components/Card.jsx'
import Cards from "./components/Cards.jsx";

//Stylos
import { DivFlex } from "./components/styles/Div";
// import styled from 'styled-components'
import Nav from "./components/Nav";
import { useEffect, useState } from "react";
import { Routes, Route, useLocation, useNavigate} from "react-router-dom";
import About from "./components/About";
import Detail from "./components/Detail";
import Favorites from './components/Favorites'
import Form from "./components/Form";


function App() {
  const location = useLocation(); 
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false)
  const username = "Victor@hotmail.com"
  const password = "!Hola2230"
  const navigate = useNavigate();

  function login(userData) {
    if(userData.password === password && userData.username === username){
      setAccess(true); 
      navigate('/home');
      alert("Bienvenidos a nuestra app"); 
    }
  }
  useEffect(() => {
    !access && navigate('/');
  }, [access]); 
  const onSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  };

  function onClose(id) {
    setCharacters(characters.filter((character) => character.id !== id));
  }
  return (
    <div className="App"  style={{ padding: "25px" }}>
      {location.pathname ==="/" ? null:  <Nav onSearch={onSearch} />}
      <hr />
      
      <DivFlex>
        <Routes>
          <Route path="/" element={<Form login = {login}/>} />
          <Route
            path="/home"
            element={<Cards characters={characters} onClose={onClose} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/detail/:detailId" element={<Detail />} />
          <Route path="/favorites" element={<Favorites characters={characters} onClose={onClose}/>}/>

        </Routes>
      </DivFlex>
      <hr />
      <br />
      <br />
    </div>
  );
}

export default App;
