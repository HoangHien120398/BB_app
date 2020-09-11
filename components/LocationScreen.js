import * as React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image, 
    TouchableOpacity
} from 'react-native';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as lor,
    removeOrientationListener as rol
  } from 'react-native-responsive-screen';
  

import 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Constant from '../constant/Constant';

function Location(props){
    return(
        <View style = {styles.view}>
            <TouchableOpacity onPress = {() => props.nav.navigate(Constant.LocationScreen.goTo)}>
                <Image style = {styles.image} source = {props.src}/>
            </TouchableOpacity>
            <Text style = {styles.text}>{props.title}</Text>
        </View>)
}

export default function LocationScreen({ navigation }){
    return(
        <SafeAreaView style = {styles.container}>
            <Text style={styles.text_location}>
                Chọn quận có căn hộ bạn cần tìm
            </Text>
            <View style={styles.image_location}>
                <View style = {styles.rowone}>
                <Location src = {Constant.LocationScreen.BaDinh} title = {Constant.LocationScreen.BaDinh_text} nav = {navigation}/>
                <Location src = {Constant.LocationScreen.DongDa} title = {Constant.LocationScreen.DongDa_text} nav = {navigation}/>
                <Location src = {Constant.LocationScreen.HoanKiem} title = {Constant.LocationScreen.HoanKiem_text} nav = {navigation}/>
                <Location src = {Constant.LocationScreen.TayHo} title = {Constant.LocationScreen.TayHo_text} nav = {navigation}/>
                </View>

                <View style = {styles.rowtwo}>
                <Location src = {Constant.LocationScreen.CauGiay} title = {Constant.LocationScreen.CauGiay_text} nav = {navigation}/>
                <Location src = {Constant.LocationScreen.HaiBaTrung} title = {Constant.LocationScreen.HaiBaTrung_text} nav = {navigation}/>
                <Location src = {Constant.LocationScreen.HoangMai} title = {Constant.LocationScreen.HoangMai_text} nav = {navigation}/>
                <Location src = {Constant.LocationScreen.ThanhXuan} title = {Constant.LocationScreen.ThanhXuan_text} nav = {navigation}/>
                
                </View>
            </View>
            
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',
        backgroundColor: '#e8f3f1',
    },

    text_location: {
        flex: 1,
        color: '#00766F',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign:'center',
        marginTop:"3%"
    },
    image_location: {
        flex: 9,
        flexDirection: 'row'
    },
    rowone: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'space-around',
        flexDirection: 'column'
    },

    rowtwo: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'space-around',
        flexDirection: 'column'
    },

    view: {
        alignItems: "center",
        justifyContent: 'center'
    },

    text: {
        fontWeight: 'bold',
        margin : 5,
        color: '#007564',
        fontSize: 15,
        fontFamily:'UVN Sach Vo',
    },

    image: {
        width: 100,
        height: 100,
        //borderRadius: 75,
    },
    
})