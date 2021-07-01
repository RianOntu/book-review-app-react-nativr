import React from 'react';
import {View,ActivityIndicator} from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome';

const Loading=()=>{
    return (
<View>
<ActivityIndicator color={"#fff"} size="small" />
<Text>Reviews Loading...</Text>
</View>
    )
}
export default Loading;