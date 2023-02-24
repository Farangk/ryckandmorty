import {ADD_FAVORITES, DELETE_FAVORITES, FILTER, ORDER} from './actions_type'; 
import axios from 'axios'; 


export function addFavorites(character){
    // return {
    //     type: ADD_FAVORITES,
    //     payload: character
    // }
    return async (dispatch) => {
        const response = await axios.post('http://localhost:3001/rickandmorty/fav')
        
        return dispatch( {
            type: ADD_FAVORITES,
            payload: character
        })
    }

}


export function deleteFavorites(id){
    // return {
    //     type: DELETE_FAVORITES,
    //     payload: id
    // }
    return async(dispatch) => {
       const response =  await axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`)
      
       return dispatch( {
        type: DELETE_FAVORITES,
        payload: id
       })
    }
}

export function filterCards(status){
    return {
        type: FILTER,
        payload: status
    }
}

export function orderCards(id){
    return {
        type: ORDER,
        payload: id
    }
}