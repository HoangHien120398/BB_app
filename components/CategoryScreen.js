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

function Category(props){
    return(
        <View style = {styles.view}>
            <TouchableOpacity onPress = {() => props.nav.navigate(Constant.CategoryScreen.goTo)}>
                <Image style = {styles.image} source = {props.src}/>
            </TouchableOpacity>
        <Text style = {styles.text}>{props.title}</Text>
    </View>)
}

export default function CategoryScreen({ navigation }){
    return(
        <SafeAreaView style = {styles.container}>
             <Text style={styles.text_category}>
                Chọn loại căn hộ bạn muốn mua
            </Text>
            <View style = {styles.rowone}>
               <Category src = {Constant.CategoryScreen.normal} title = {Constant.CategoryScreen.normalname} nav = {navigation}/>
               <Category src = {Constant.CategoryScreen.studio} title = {Constant.CategoryScreen.studioname} nav = {navigation}/>
            </View>

            <View style = {styles.rowtwo}>
               <Category src = {Constant.CategoryScreen.officetel} title = {Constant.CategoryScreen.officetelname} nav = {navigation}/>
               <Category src = {Constant.CategoryScreen.condotel} title = {Constant.CategoryScreen.condotelname} nav = {navigation}/>
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e8f3f1',
    },

    text_category: {
        color: '#00766F',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign:'center',
        marginTop:"3%",
    },
 
    
    rowone: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'space-around',
        flexDirection: 'row',
    },

    rowtwo: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'space-around',
        flexDirection: 'row',
    },

    view: {
        alignItems: "center",
        justifyContent: 'center',
    },

    text: {
        fontWeight: 'bold',
        margin : 5,
        color: '#007564',
        fontSize: 15,
        fontFamily:'UVN Sach Vo',
    },

    image: {
        width: 150,
        height: 150,
        borderRadius: 75,
    },

    

})