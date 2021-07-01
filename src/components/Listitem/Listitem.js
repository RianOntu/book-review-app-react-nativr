import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const ListItem = props => {
    return (
        <TouchableOpacity onPress={props.onItemPressed} style={{marginTop:10}}>
            <View style={styles.listItem} >
                <Image source={{ uri: props.image }} style={{
                    width: 50,
                    height: 50,
                }} />
                <Text style={{ paddingLeft: 15,alignSelf:"center" }}>
                    {props.bookName}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItem: {
        width: "100%",
        padding: 10,
        backgroundColor: "#eee",
        margin: 5,
        flexDirection: "row"
    }
})

export default ListItem;