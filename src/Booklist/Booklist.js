import React,{useState,useEffect} from 'react';
import {View} from 'react-native';
import { FlatList } from 'react-native';
import ListItem from '../components/Listitem/Listitem';
import {connect} from 'react-redux';
import Bookdetail from '../components/Bookdetail/Bookdetail';


const mapStateToProps=state=>{
  return {
      books:state.books
  }
}


const Booklist=props=>{
const [selectedBook,setselectedBook]=useState(null);
const handleSelectedBook = key => {
    const book = props.books.find(book => {
        return book.key === key;
    })
    setselectedBook(book);
}
const handleHideModal = () => {
    setselectedBook(null);
}
let bookDetail = null;
if (selectedBook !== null) {
    bookDetail = <Bookdetail
        book={selectedBook}
        handleHideModal={handleHideModal}
       />
}
    return (
<View>
    {bookDetail}
<FlatList style={{
        width: "100%"
    }}
        data={props.books}
        renderItem={info => {
            return (
                <ListItem bookName={info.item.name} onItemPressed={() =>handleSelectedBook(info.item.key)} 
                    image={info.item.image} />
            );
        }}
    />
</View>)
}
export default connect(mapStateToProps)(Booklist);