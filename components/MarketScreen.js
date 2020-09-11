import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image, 
  TouchableOpacity, SafeAreaView, Dimensions, ScrollView,
  Grid,
  processColor
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
import PureChart from 'react-native-pure-chart';


export default function App({ navigation }) {
  const [expanded, setExpanded] = React.useState(false);
  const [expanded2, setExpanded2] = React.useState(false)
  const [expanded3, setExpanded3] = React.useState(false)
  const [expanded4, setExpanded4] = React.useState(false)
  const [expanded5, setExpanded5] = React.useState(false)
  const [customStyleIndex, setcustomStyleIndex] = React.useState(0);

  const handlePress = (expanded, setExpanded) => setExpanded(!expanded);

  const greenBlue = "#ff6347";
  const petrel = "rgb(59, 145, 153)";
  
  let sampleData = [
    {
      
      seriesName: 'Ngọc Khánh',
      data: [
        {x: '02-01', y: 30},
        {x: '02-02', y: 200},
        {x: '02-03', y: 170},
        {x: '02-04', y: 250},
        {x: '02-05', y: 10}
      ],
      color: '#297AB1'
    },
    {
      seriesName: 'Ba Đình',
      data: [
        {x: '02-01', y: 200},
        {x: '02-02', y: 100},
        {x: '02-03', y: 140},
        {x: '02-04', y: 550},
        {x: '02-05', y: 60},
        {x: '02-05', y: 500},
        {x: '02-05', y: 120},
      ],
      color: 'yellow'
    }
  ]
  return (
     <SafeAreaView style = {styles.container}>
      

        <Button style = {styles.button} mode = 'contained' 
         onPress = {() =>navigation.navigate(Constant.ProductDetailsScreen.goTo)}>
          <Text style={{ color:'#cee8e4', fontSize: 15}}>Yêu cầu thêm thông tin</Text>
        </Button>

        <ScrollView>
          
            <View>
                <Text style = {styles.headerstyle}>
                  Tình hình thị trường
                </Text>
                  <View style = {{flexDirection: "row", flex: 1}}>
                    <Text style = {{flex: 1, textAlign: 'center', marginLeft: 10,color:'#667b78'}}>Giá trị trung bình theo đường{"\n"}</Text>
                    <Text style = {{flex: 1, textAlign: 'center',color:'#667b78'}}>Giá trị trung bình theo quận{"\n"}</Text>
                    <Text style = {{flex: 1, textAlign: 'center',marginRight: 10,color:'#667b78'}}>Giá trị dự báo trong 2021{"\n"}</Text>
                  </View>


                  <Text style = {styles.headerstyle}>
                      Giá các căn hộ tương tự
                    </Text>
                    <View>
                      <View style = {{flexDirection: "row", marginLeft: 15, borderBottomWidth: 1,
                      borderColor: 'black'}}>
                        <Text style = {{flex: 1, textAlign: 'center', borderRightWidth: 1,color:'#667b78'}}>Đống Đa{"\n"}</Text>
                        <Text style = {{flex: 1, textAlign: 'center', borderRightWidth: 1,color:'#667b78'}}>Hai Bà Trưng{"\n"}</Text>
                        <Text style = {{flex: 1, textAlign: 'center', borderRightWidth: 1,color:'#667b78'}}>Hoàng Mai{"\n"}</Text>
                      </View>
                      <View style = {{flexDirection: "row", marginLeft: 15}}>
                        <Text style = {{flex: 1, textAlign: 'center', borderRightWidth: 1,
                      borderColor: 'black',color:'#667b78'}}>Hoàn Kiếm{"\n"}</Text>
                        <Text style = {{flex: 1, textAlign: 'center', borderRightWidth: 1,
                      borderColor: 'black',color:'#667b78'}}>Thanh Xuân{"\n"}</Text>
                        <Text style = {{flex: 1, textAlign: 'center', borderRightWidth: 1,
                      borderColor: 'black',color:'#667b78'}}>Tây Hồ{"\n"}</Text>
                      </View>
                    </View>
                  </View>
                  <Text style = {styles.headerstyle}>
                      Biến động giá
                    </Text>
                              <View style={styles.address}>
                                        <TouchableOpacity style={styles.buttonAddress}><Text style={styles.textaddress}>Bình thường</Text></TouchableOpacity>
                                        <TouchableOpacity style={styles.buttonAddress}><Text style={styles.textaddress}>Studio</Text></TouchableOpacity>
                                        <TouchableOpacity style={styles.buttonAddress}><Text style={styles.textaddress}>Officetel</Text></TouchableOpacity>
                                        <TouchableOpacity style={styles.buttonAddress}><Text style={styles.textaddress}>Condotel</Text></TouchableOpacity>

                                      </View>
                                      <LineChart style={styles.linechartOne}
                                        data={{
                                            labels: ['label1','label2','label3','label4','label5','label6','label7','label8'],
                                            dataSets: [
                                          {
                                            label: "Ba Đình", 
                      
                                            values: [{y: 227}, {y: 206.1}, {y: 222.8}, {y: 203.1}, {y: 256.1}, {y:233},{y:230.4},{y:204.1},{y:200}],
                                            config: {
                                            color: processColor(petrel)

                                          },
                          
                                        },
                                          {
                                            label: "Ngọc Khánh", 
                                            values: [{y: 227}, {y: 199.2}, {y: 270.3}, {y: 228.5}, {y: 26.8}, {y:232},{y:201.7},{y:256.6},{y:200}],
                                            config: {
                                            color: processColor(greenBlue),
                                          }
                                        },
                                        ]}}
                                      />


                               {/* <PureChart
                                data={sampleData} 
                                type='line' 
                                width={'100%'}
                                height={200}
                               
                                customValueRenderer={(index, point) => {
                                  if (index % 2 === 0) return null
                                  return (
                                    <Text style={{textAlign:'center'}}>{point.y}</Text>
                                  )
                                }}
                               />
                               <View style={{flexDirection:'row', marginTop: 10}}>
                                 <Text style={{ color:'blue', marginLeft: 10}}>Ba Đình</Text>
                                 <Text style={{color:'yellow', marginLeft: 20}}>Ngọc Khánh</Text>
                               </View> */}

        </ScrollView>
        <View style = {{height: 50}}></View>
     </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
  },

  headerstyle: {
    fontWeight: 'bold', 
    fontSize: 25,
    color: '#506461',
    //backgroundColor: '#e8f3f1'
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

  tabsContainerStyle: {
    backgroundColor: '#6c7a89',
  },
  address: {
    backgroundColor: '#00aa97',
     alignItems:'center',
     justifyContent:'space-around',
     flexDirection:'row', 
     height: 40,
     marginTop: 10
    },
    textaddress:{
      fontWeight: 'bold'
    },

  chart:{
    flex: 1,
    marginTop: "3%"
  },
  linechartOne: {
    marginTop: "3%",
    marginLeft:"3%",
    width: 380,
    height: 250,
  },
})