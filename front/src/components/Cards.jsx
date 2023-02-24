import Card from './Card';





export default function Cards({characters, onClose}) {

   return (
      <>
      
      {characters.map(character => (
         
         
         <Card 
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
