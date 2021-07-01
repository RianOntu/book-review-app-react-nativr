import Books from '../../src/books';
import * as actionTypes from './actionTypes';

const initState={
    books:Books,
   reviewsLoading:false,
    reviews:[]
}

export const bookReducer=(state=initState,action)=>{
switch(action.type){
    case actionTypes.AUTHENTICATE_USER:
        return {
            ...state,
            token: action.payload,
            reviewsLoading:false
        }
        case actionTypes.ADD_REVIEW:
            let revObj=state.reviews;
            let revArr=null;
            if(revObj){
           revArr=Object.keys(revObj).map(key=>{
               return revObj[key]
           })
            }
            return {
                ...state,
                reviews:revArr.concat(action.payload),
                reviewsLoading:false
            }
            case actionTypes.LOADED_REVIEWS:
                let revObject=action.payload;
                let revArray=null;
                if(revObject){
               revArray=Object.keys(revObject).map(key=>{
                   return revObject[key]
               })
                }
                return {
                    ...state,
                    reviews:revArray,
                    reviewsLoading:false
                }
                case actionTypes.REVIEWS_LOADING:
                    return {
                        ...state,
                        reviewsLoading:true
                    }
        default:
            return state;
}

}