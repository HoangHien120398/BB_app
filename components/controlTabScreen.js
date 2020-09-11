/*This is an example of Segmented Control Tab in React Native*/
import React, { Component, useState } from 'react';
//Import React

import { StyleSheet,
   Text,
    View,
    AppRegistry,
    processColor,
    Button,
    Dimensions
   } from 'react-native';
//Import Basic React Native Component

import SegmentedControlTab from 'react-native-segmented-control-tab';
//Import SegmentedControlTab

//install react-native-charts-wrapper
import {LineChart} from 'react-native-charts-wrapper';

import Constant from '../constant/Constant';
//Screen này để em thử nếu ok thì em cho vào sau
export default function Control({navigation}) {
  const [customStyleIndex, setcustomStyleIndex] = useState(0);
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>
          Custom segmented control with custom styles
        </Text>

        {/* Simple Segmented with Custom Styling*/}
        <SegmentedControlTab
          values={['one', 'two']}
          selectedIndex={customStyleIndex}
          onTabPress={setcustomStyleIndex}
          borderRadius={0}
          tabsContainerStyle={{ height: 50, backgroundColor: '#F2F2F2' }}
          tabStyle={{
            backgroundColor: '#F2F2F2',
            borderWidth: 0,
            borderColor: 'transparent',
          }}
          activeTabStyle={{ backgroundColor: 'white', marginTop: 2 }}
          tabTextStyle={{ color: '#444444', fontWeight: 'bold' }}
          activeTabTextStyle={{ color: '#888888' }}
          style={styles.control}
        />
        {customStyleIndex === 0 && (
          <View style={styles.tabContent}>
                <View style={styles.chart}>
                  <LineChart style={styles.linechart}
                    data={{dataSets:[{label: "demo1", values: [{y: 1}, {y: 2}, {y: 1}]}]}}
                  />
              </View>

             </View>
        )}
        {customStyleIndex === 1 && (
          <View style={styles.tabContent}>
             <View style={styles.chart}>
               <LineChart style={styles.linechart}
                 data={{dataSets:[{label: "demo2", values: [{y: 1}, {y: 2}, {y: 1}]}]}}
               />
           </View>

          </View>
        )}

      <Button style = {styles.button} mode = 'contained' 
        onPress = {() =>navigation.navigate(Constant.controlTabScreen.goTo)}>
          <Text style={{ color:'#cee8e4', fontSize: 15}}>Yêu cầu thêm thông tin</Text>
         
        </Button>
        
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
  },
  headerText: {
    padding: 8,
    fontSize: 14,
    color: '#444444',
    textAlign: 'center',
    flex: 1
  },
  control:{
    flex: 10
  },
  tabContent: {
    color: '#444444',
    fontSize: 18,
    margin: 24,
    flex: 1
  },
  Seperator: {
    marginHorizontal: -10,
    alignSelf: 'stretch',
    borderTopWidth: 1,
    borderTopColor: '#888888',
    marginTop: 24,
  },
  tabStyle: {
    borderColor: '#D52C43',
  },
  activeTabStyle: {
    backgroundColor: '#D52C43',
  },
  
  chart: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
 linechart: {
    flex: 1
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

});

// export default App;