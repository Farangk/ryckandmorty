import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { filterCards, orderCards } from "../redux/actions";
import Card from "./Card";


export default function Favorites(onClose) {
    const {myFavorites} = useSelector ( state=>state)  ;
    const dispatch= useDispatch(); 

    function handleClick(e){
     e.preventDefault();
     const {name, value} = e.target;
     if(name === "filter") {
      return dispatch(filterCards(value));
     }
     if(name === "order"){
      dispatch(orderCards(value)); 
     }
    }
    return (
        
      <>
      <div>
      <select name="filter" defaultValue={"DEFAULT"} onChange={handleClick}>
          <option vale="DEFAULT" disabled>Select Order</option>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
         
        </select>
        <select name="filter" defaultValue={"DEFAULT"} onChange={handleClick}>
        <option vale="DEFAULT" disabled>Select Filter</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="Unknown">Unknown</option>
        </select>
      </div>
      {myFavorites.map(character => (
                
         <Card 
              key= {character.id}
               id={character.id}
               name = {character.name} 
               species = {character.species}
               gender = {character.gender}
               image = {character.image}
               onClose = {()=> onClose(character.id)}/>
        
               
      ))}
    
    </>
    )
}