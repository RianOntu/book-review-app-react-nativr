import * as actionTypes from './actionTypes';
import axios from 'axios';
import {navigate} from '../NavigationRoot';


export const addReview=(id,author,review)=>dispatch=>{
    const newReview={
        id:id,
        author:author,
        review:review
    }
    axios.post('https://book-review-app-e3742-default-rtdb.firebaseio.com/reviews.json',newReview)
     dispatch(concatReview(newReview))
}
export const concatReview=review=>({
    type:actionTypes.ADD_REVIEW,
    payload:review
});

export const reviewsLoaded=(reviews)=>({
    type:actionTypes.LOADED_REVIEWS,
    payload:reviews
});
export const loadReviews=()=>dispatch=>{
    dispatch(reviewsLoading())
    axios.get('https://book-review-app-e3742-default-rtdb.firebaseio.com/reviews.json').then(response=>response.data).then(reviews=>dispatch(reviewsLoaded(reviews)));
    }
    export const reviewsLoading=()=>({
        type:actionTypes.REVIEWS_LOADING
      
    });


export const authUser = token => {
    return {
        type: actionTypes.AUTHENTICATE_USER,
        payload: token
    }
}
export const tryAuth = (email, password, mode) => dispatch => {
    let url = "";
    const API_KEY = "AIzaSyC0zern-D_xjJUWj25ZB2rCWJIzEiSF5GY";
    if (mode === "signup") {
        url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + API_KEY;
    } else if (mode === "login") {
        url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" + API_KEY;
    }
 
    fetch(url, {
        method: "POST",
        body: JSON.stringify({
            email: email,
            password: password,
            returnSecureToken: true
        }),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .catch(err => {
            console.log(err);
            alert("Authentication Failed!");
        })
        .then(res => res.json())
        .then(data => {
            if (data.error) {
                alert(data.error.message);
            } else {
                dispatch(authUser(data.idToken));
                navigate("Books");
            }
            console.log(data)
        })

}