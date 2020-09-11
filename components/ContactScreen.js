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

    const [name, setName] =useState('');
    const [numberphone, setNumberphone] = useState('');
    const [email, setEmail] = useState('');
    const [note, setNote] = useState('');

    CheckTextInput = () => {
        let regText = /^[a-zA-Z ]*$/;
        let regNumber = /^[0-9]*$/;
        let regEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ; 
        
if(name?.trim() && numberphone?.trim() && email?.trim() && note?.trim())
{
    if (regText?.test(name)) {
        if (regNumber.test(numberphone)) 
         
        {
            if( regEmail.test(email))
            {
                if(note.length > 10){
                  navigation.navigate(Constant.ContactScreen.goTo)
                }
                else {
                  alert('Số kí tự quá ngắn ! Hãy viết thêm để chúng tôi có thể hỗ trợ bạn chính xác hơn !');
                }
            }
           else {
          alert('Email không hợp lệ ');
           }
      }
       else {
        alert('Số điện thoại không hợp lệ');
      }
  }
  else{
      alert('Tên đăng nhập không hợp lệ');
  }
}
else{
    alert('Vui lòng không để trống')
}
       
    
};
    return (
        <SafeAreaView style = {styles.container}>
           <Text style={styles.text}>Liên hệ với chúng tôi để biết thêm chi tiết về căn hộ này! </Text>
           <TextInput 
           placeholder="Họ và tên"
           autoCapitalize="none"
           onChangeText={name => setName(name)}
           value = {name}
           style={styles.textinfor}
           ></TextInput>
           <TextInput 
           placeholder="Số điện thoại liên hệ "
           autoCapitalize="none"
           onChangeText={numberphone => setNumberphone(numberphone)}
           value = {numberphone}
           style={styles.textinfor}></TextInput>
           <TextInput 
           placeholder="Email "
           autoCapitalize="none"
           onChangeText={email => setEmail(email)}
           value = {email}
           style={styles.textinfor}></TextInput>
           <TextInput 
           placeholder="Ghi chú: "
           autoCapitalize="none"
           onChangeText={note => setNote(email)}
           value = {note}
           style={styles.textnote}></TextInput>
           
           <TouchableOpacity style={styles.buttonsend}
             onPress={CheckTextInput}
           >
                <Text style={styles.textsend}>Gửi</Text>
           </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#e8f3f1'
    },
    text :{
        fontSize : 28,
        color: '#5d706d',
        fontWeight:'bold',
        marginLeft: "6%",
        
    },
    textinfor: {
        height: 50,
        width: 300,
        borderColor: '#27b7a7',
        borderWidth: 2,
        borderRadius: 10,
        marginTop: "10%",
        backgroundColor: '#ecfdfa'
    
        
    },
    textnote: {
        height: 80,
        width: 300,
        borderColor: '#27b7a7',
        borderWidth: 2,
        marginTop: "10%",
        backgroundColor: '#ecfdfa'
    },
    buttonsend: {
        width: 150,
        height: 60,
        borderRadius: 10,
        borderColor:'black',
        backgroundColor: '#00aa9d',
        marginTop: "8%"
    },
    textsend: {
        fontSize: 30,
        color: 'white',
        fontWeight:'bold',
        marginTop: "5%",
        marginLeft: "30%",
        
        
    }
})