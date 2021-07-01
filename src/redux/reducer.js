import Books from '../../src/books';
import * as actionTypes from './actionTypes';

const initState={
    books:Books,
    authLoading:false,
    reviews:[]
}

export const bookReducer=(state=initState,action)=>{
switch(action.type){
    case actionTypes.AUTHENTICATE_USER:
        return {
            ...state,
            token: action.payload
        }
        case actionTypes.ADD_REVIEW:
            return {
                ...state,
                books:state.books.concat(action.payload)
            }
        default:
            return state;
}

}