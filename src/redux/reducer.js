import {ADD_FAVORITES, DELETE_FAVORITES, FILTER, ORDER} from './actions_type'; 

const initialState= {
    myFavorites: [],
    myFavoritesOrigin: []
}

export default function rootReducer(state=initialState, {type, payload}) {
switch (type) {
    case ADD_FAVORITES:
        return{
            ...state,
            myFavorites:[...state.myFavoritesOrigin, payload],
            myFavoritesOrigin: [...state.myFavoritesOrigin, payload]

            // myFavorites: [...state.myFavorites, payload],
            // allCharacters: [...state.myFavorites, payload]
        };
    case DELETE_FAVORITES: 
    const filtered = state.myFavorites.filter((character)=>{
        return character.id !== payload 
    })
    return {
        ...state,
        myFavorites: filtered,
        myFavoritesOrigin: filtered
    };

    case FILTER:
        const filterCopy = [...state.myFavoritesOrigin]
        const filter = filterCopy.filter((character) =>character.gender === payload)
        return {
            ...state,
            myFavorites: filter
        };

    case ORDER: 
    const orderCopy = [...state.myFavoritesOrigin];
    const order = orderCopy.sort((a,b) => {
        if(a.id > b.id){
            return "Ascendente" === payload ? 1 : -1;
        }
        if(a.id<b.id){
            return "Descendente" === payload ? 1: -1;
        }
        return 0;
    }) ; 
    return {
        ...state,
        myFavorites: order,
    }  
    default:
        return state; 
}
}