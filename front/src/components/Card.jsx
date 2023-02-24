import { ImgStyle } from "./styles/Div.js";
import {
  DivCard,
  Button,
  H2Species,
  H2Gender,
  H2Name,
} from "./styles/PositionCards.js";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavorites, deleteFavorites } from "../redux/actions.js";

export default function Card(props) {
  const [isFav, setIsFav] = useState(false);
  const dispatch = useDispatch();
  const myFavorites = useSelector((state)=> state.myFavorites)
  
  function handleFavorite(character) {
    if (isFav) {
      setIsFav(false);
      dispatch(deleteFavorites(character.id));
    } else {
      setIsFav(true);
      dispatch(addFavorites(character));
    }
  }

  useEffect(() => {
    myFavorites.forEach((character) => {
      if(character.id === props.id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  return (
    <>
      <DivCard>
        {isFav ? (
          <button onClick={()=>handleFavorite(props)}>❤️</button>
        ) : (
          <button onClick={()=>handleFavorite(props)}>🤍</button>
        )}
        <Button onClick={props.onClose}>X</Button>
        <Link to={`/detail/${props.id}`}>
          <H2Name>{props.name}</H2Name>
        </Link>
        <H2Species>{props.species}</H2Species>
        <H2Gender>{props.gender}</H2Gender>
        <ImgStyle src={props.image} alt="" />
      </DivCard>
      </>
  );
}
