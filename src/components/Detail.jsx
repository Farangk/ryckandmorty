import { useState, useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
import { DivPadre, ImgStyle } from "./styles/Detail";
import { ButtonStyle } from "./styles/login.js";


export default function Detail(){
    const {detailId} =useParams(); 
    const [character, setCharacter] = useState({});
    const navigate = useNavigate(); 
    
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [detailId]);
    return(
        <>

        <DivPadre>
        <div>
          <ButtonStyle onClick={()=>navigate("/home")}>Volver</ButtonStyle>
            <h1>Nombre: {character.name}</h1>
            <h2>Status: {character.status}</h2>
            <h2>Especie: {character.species}</h2>
            <h2>Genero: {character.gender}</h2>
            <h2>Origin: {character.origin?.name}</h2>
            <h2>Locacion: {character.location?.name }</h2>
          </div>
          <div>
          <ImgStyle src={character.image} alt="" />
          </div>
          
        </DivPadre>

            
            
        </>

    )
}