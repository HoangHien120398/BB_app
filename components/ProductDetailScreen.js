import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image, 
  TouchableOpacity, SafeAreaView, Dimensions, ScrollView,
  Linking
} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import {
   IconButton,
   Colors,
   Card,
   Button,
   List  } from 'react-native-paper';
import Constant from '../constant/Constant';
//import { black } from 'react-native-paper/lib/typescript/src/styles/colors';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import {LineChart} from 'react-native-charts-wrapper';
// Setup Icon.Button onPress quay lại 
// Chưa Xử Lý SegmentControlTab
// Cài npm install -i react-native-segmented-control-tab --save

export default function App({ navigation }) {
  const [expanded, setExpanded] = React.useState(false);
  const [expanded2, setExpanded2] = React.useState(false)
  const [expanded3, setExpanded3] = React.useState(false)
  const [expanded4, setExpanded4] = React.useState(false)
  const [expanded5, setExpanded5] = React.useState(false)
  const [customStyleIndex, setcustomStyleIndex] = React.useState(0);

  const handlePress = (expanded, setExpanded) => setExpanded(!expanded);
  
  return (
     <SafeAreaView style = {styles.container}>
       <View>
        <AutoHeightImage
          width = {Dimensions.get('window').width}
          source = {require('../assets/detail_1.png')}/>
          
        <IconButton
          icon="arrow-left"
          color="white"
          size={20}
          onPress={() => navigation.goBack()}
          style = {styles.icon}
        />   
       </View>
        <Button style = {styles.button} mode = 'contained' 
        onPress = {() =>navigation.navigate(Constant.ProductDetailsScreen.goTo)}>
          <Text style={{ color:'#cee8e4', fontSize: 15}}>Yêu cầu thêm thông tin</Text>
         
        </Button>
        <ScrollView>
          <View style = {styles.informationview}>
            <Text style = {{ fontWeight: 'bold', color: '#6c7a89', fontSize: 15 }}>
              CHÍNH CHỦ CẦN BÁN CĂN HỘ CC: ...
            </Text>
            <View style = {styles.informationdetail}>
              <Text style = {styles.textinformationdetail}>
                Giá: 
              </Text>
              <Text style = {styles.textinformationdetail}>
                Diện tích:
              </Text>
              <Text style = {styles.textinformationdetail}>
                Loại:
              </Text>
            </View>
            <Text style = {styles.textinformationdetail}>
              Địa chỉ: 
            </Text>
            <Text>
              172 Ngọc Khánh, Quận Ba Đình, Hà Nội
            </Text>
          </View>
          
          <List.Section>
            <List.Accordion
                style={{ flex: 1}}
                title = {<Text style = {styles.headerstyle}>
                  Miêu tả chi tiết
                </Text>}
                expanded={expanded}
                onPress={() => handlePress(expanded, setExpanded)}>
                <View style = {{ marginLeft: 20}}>
                  <Text style = {styles.textinformationdetail, { fontSize: 15},{color:'#667b78'}}>Phòng: {}</Text>
                  <Text style = {styles.textinformationdetail, { fontSize: 15},{color:'#667b78'}}>Hướng: {}</Text>
                  <Text style = {styles.textinformationdetail, { fontSize: 15},{color:'#667b78'}}>Giao Thông: {}</Text>
                </View>
            </List.Accordion>
            <TouchableOpacity
                onPress={() => navigation.navigate(Constant.ProjectWebviewScreen.goTo)}
                style={styles.buttonMarket}
            >
              <Text style = {styles.headerstyle}>
                    Thông tin chi tiêt dự án
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
                  onPress = {() =>navigation.navigate(Constant.MarketScreen.goTo)}
                  style={styles.buttonMarket}
                  >
                  <Text style = {styles.headerstyle}>
                       Tình hình thị trường
                  </Text>
            </TouchableOpacity>
          </List.Section>
        </ScrollView>
        <View style = {{height: 50}}></View>
     </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
  },

  icon: {
    position: "absolute",
    left: 0,
    top: 0,
  },

  button: {
    position: 'absolute',
    bottom: 0,
    width: Dimensions.get('window').width,
    height: 50,
    backgroundColor: '#00aa97',
    alignItems: "center",
    justifyContent: "center",
  },
  buttonMarket:{
    width: Dimensions.get('window').width,
    height: 50,
  },

  informationview: {
    justifyContent: 'center',
    
    marginLeft: 10,
    marginRight: 5,
    marginTop: 5
  }, 

  informationdetail: {
    flexDirection: "row",
    
  },

  textinformationdetail: {
    flex: 1, 
    fontWeight: 'bold'
  }, 

  headerstyle: {
    fontWeight: 'bold', 
    fontSize: 25,
    color: '#506461',
    //backgroundColor: '#e8f3f1',
    marginLeft: 20,
    marginTop: 20
  },

  tabsContainerStyle: {
    backgroundColor: '#6c7a89',
  },

  chart:{
    flex: 1
  },
  linechart: {
    flex: 1
  }
})