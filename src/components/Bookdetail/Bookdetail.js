import React,{useEffect,useState} from 'react';
import { View,TextInput, Modal, Image, Text, Button, TouchableOpacity,StyleSheet,ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import {loadReviews,addReview} from '../../redux/actionCreators';


const mapDispatchToProps=dispatch=>{
    return {
         loadReviews:()=>dispatch(loadReviews()),
         addReview:(id,author,review)=>dispatch(addReview(id,author,review))
    }
}
const mapStateToProps=state=>{
    return {
        reviews:state.reviews,
        reviewsLoading:state.reviewsLoading
    }
}
const Bookdetail = props => {
    useEffect(()=>{
        props.loadReviews()
      },[])
const [review,setReview]=useState({
    author:"",
    review:""
})
const changeWithInput=(value,name)=>{
    setReview({
        ...review,
        [name]:value
    })
}
    const handleSubmit=()=>{
        props.addReview(props.book.id,review.author,review.review)
    }
console.log(props.reviews);
   
    let reviewss=null;
    let revObj=props.reviews;
    let revArr=null;
if(revObj){
     revArr=Object.keys(revObj).map(key=>{
         return revObj[key]
     })
}
    
  
     let reviews=revArr &&revArr.filter(review=>review.id===props.book.id);
    
    
    if(typeof reviews!=="undefined" && reviews.length!==0){
        reviewss= reviews.map(item=>(
            <View key={Date.now().toString()}>
                <Text style={{fontSize:20,textAlign:"center"}}>{item.author}</Text>
            <Text style={{textAlign:"center"}}>{item.review}</Text>
            </View>
        ))
    }

    return (
        <Modal>
            <ScrollView>
            <Text style={{
                    textAlign: "center",
                    fontSize: 40
                }}>{props.book.name}</Text>
                <Image source={{ uri: props.book.image }} style={{
                    width: "100%",
                    height: 300
                }} />
                  
           
                <View style={{ alignItems: "center" }}>
                   
                    <TouchableOpacity
                        onPress={() => props.handleHideModal()}
                    >
                        <Icon name="times-circle" size={60} />
                    </TouchableOpacity>
                    <Text style={{
                    textAlign: "center",
                    fontSize: 20
                }}>Description:</Text>
                    <Text style={{
                    textAlign: "center",
                    fontSize: 15,
                    marginBottom:10
                }}>{props.book.description}</Text>
                 <Text style={{
                    textAlign: "center",
                    fontSize: 20,
                    marginBottom:10
                }}>Reviews:</Text>
{props.reviewsLoading ? <Text style={{textAlign:"center",fontSize:15,color:"green"}}>Reviews Loading...</Text> : reviews && reviews.length===0 ? <Text style={{textAlign:"center",fontSize:15,color:"red"}}>No Reviews Yet!</Text>: reviewss}

                    <TextInput
                    value={review.author}
                    onChangeText={value=>changeWithInput(value,"author")}
                style={{
                    width: "85%",
                    borderBottomWidth: 1,
                    borderColor: "green",
                    padding: 7,
                    textAlign:"center",
                    marginTop:10
                }}
                placeholder="Your Name..."
               
            />
                    <TextInput
                     value={review.review}
                     onChangeText={value=>changeWithInput(value,"review")}
                style={{
                    width: "85%",
                    borderBottomWidth: 1,
                    borderColor: "green",
                    padding: 7,
                    textAlign:"center"
                }}
                placeholder="Your Review..."
               
            />
               <TouchableOpacity style={styles.btnContainer} onPress={()=>handleSubmit()}
                  >
                    <Text style={styles.btnStyle}>Submit</Text>
                </TouchableOpacity>

                </View>
            </ScrollView>
        </Modal>
    )
}
const styles = StyleSheet.create({
    btnStyle: {
        fontSize: 16,
        color: "#fff",
        alignSelf: "center"
    },
    btnContainer: {
        flexDirection: "row",
        width: "85%",
        paddingVertical: 5,
        backgroundColor: "#009688",
        borderRadius: 5,
        marginTop: 10,
        justifyContent: "center",
        alignItems: "center",
        marginBottom:15

    }
})
export default connect(mapStateToProps,mapDispatchToProps)(Bookdetail);