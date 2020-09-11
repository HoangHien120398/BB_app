import React,{useState} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    TextInput,
    Alert
} from 'react-native';

import {
    Button
} from 'react-native-paper'

import 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Constant from '../constant/Constant';


export default function ContactScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ marginLeft: "3%", alignContent:'center', alignItems:'center'}}>
                <Text style={ styles.text_end}> Cám ơn bạn !</Text>
                <Text style={styles.text_end}> Trong lúc chúng tôi sàng lọc & cung cấp cho bạn thông tin đầy đủ & chính xác nhất, bạn có thể liên hệ:(LH) để biết thêm thông tin chi tiết. </Text>
            </View>
            
            <TouchableOpacity
                style={styles.button_end}
                onPress={() => navigation.goBack()}
                >
                    <Text style={styles.text_back}>Quay lại trang trước </Text>
            </TouchableOpacity>
        </SafeAreaView>
       
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#e8f3f1'
    },
    button_end:{
        width: 250,
        height: 60,
        borderRadius: 10,
        borderColor:'black',
        backgroundColor: '#00aa9d',
        marginTop: "3%"
    },
    text_end: {
        fontSize: 25,
        color:'#4f8c8a',
        fontWeight:'bold'

    },
    text_back: {
        fontSize: 25,
        color: 'white',
        fontWeight:'bold',
        marginTop: "5%",
        marginLeft: "5%",
        alignItems: "center",
    }

})