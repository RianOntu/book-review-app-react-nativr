import React from 'react';
import { View, Modal, Image, Text, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Bookdetail = props => {
    return (
        <Modal>
            <View>
                <Image source={{ uri: props.book.image }} style={{
                    width: "100%",
                    height: 300
                }} />
                <Text style={{
                    textAlign: "center",
                    fontSize: 40
                }}>{props.place.value}</Text>
                <View style={{ alignItems: "center" }}>
                   
                    <TouchableOpacity
                        onPress={() => props.handleHideModal()}
                    >
                        <Icon name="times-circle" size={60} />
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

export default Bookdetail;