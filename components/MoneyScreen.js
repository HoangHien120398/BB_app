import * as React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image, 
    TouchableOpacity
} from 'react-native';

import 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Constant from '../constant/Constant';

function Money(props){
    return(
        <View style = {styles.view}>
            <TouchableOpacity onPress = {() => props.nav.navigate(Constant.MoneyScreen.goTo)}>
                <Image style = {styles.image} source = {props.src}/>
            </TouchableOpacity>
        <Text style = {styles.text}>{props.title}</Text>
    </View>)
}

export default function MoneyScreen({ navigation }){
    return(
        <SafeAreaView style = {styles.container}>

            <Text style={styles.text_money}>
                Ngân sách của bạn khoảng bao nhiêu ?
            </Text>
            <View style={styles.image_money}>
                <View style = {styles.rowone}>
                    <Money src = {Constant.MoneyScreen.cost_1} title = {Constant.MoneyScreen.cost_1_text} nav = {navigation}/>
                    <Money src = {Constant.MoneyScreen.cost_2} title = {Constant.MoneyScreen.cost_2_text} nav = {navigation}/>
                
                </View>

                <View style = {styles.rowtwo}>
                    <Money src = {Constant.MoneyScreen.cost_3} title = {Constant.MoneyScreen.cost_3_text} nav = {navigation}/>
                    <Money src = {Constant.MoneyScreen.cost_4} title = {Constant.MoneyScreen.cost_4_text} nav = {navigation}/>
                </View>
                <View style = {styles.rowthree}>
                    <Money src = {Constant.MoneyScreen.cost_5} title = {Constant.MoneyScreen.cost_5_text} nav = {navigation}/>
                    <Money src = {Constant.MoneyScreen.cost_6} title = {Constant.MoneyScreen.cost_6_text} nav = {navigation}/>
                </View>
            </View>
            
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e8f3f1',
    },
    text_money: {
        flex: 1,
        color: '#00766F',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign:'center',
        marginTop:"3%"
    },
    image_money: {
        flex: 9,
        flexDirection: 'column',
        
    },


    rowone: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'space-around',
        flexDirection: 'row'
    },

    rowtwo: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'space-around',
        flexDirection: 'row'
    },
    rowthree: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'space-around',
        flexDirection: 'row'
    },

    view: {
        
       
        alignItems: "center",
        justifyContent: 'center',
        height: 200,
        width: 100
    },

    text: {
        fontWeight: 'bold',
        margin : 5,
        color: '#007564',
        fontSize: 15,
        fontFamily:'UVN Sach Vo',
        textAlign:'center',
    },

    image: {
        width: 100,
        height: 100,
        resizeMode: 'contain'

    },

})