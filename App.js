/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


// ảnh ở file assets
// lưu những file const ở thư mục constant
// từng screen ở components

import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StartScreen from './components/StartScreen.js'
import CategoryScreen from './components/CategoryScreen.js'
import LocationScreen from './components/LocationScreen.js'
import MoneyScreen from './components/MoneyScreen.js'
import SearchResultScreen from './components/SearchResultScreen.js'
import WebviewScreen from './components/WebviewScreen.js' //sửa
import ProjectWebviewScreen from './components/ProjectWebviewScreen.js' //sửa
import ProductDetailScreen from './components/ProductDetailScreen.js'
import ContactScreen from './components/ContactScreen';
import MarketScreen from './components/MarketScreen'
import ChartScreen from './components/ChartScreen'
import ContactScreen_true from './components/ContactScreen_true'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={StartScreen} options = {{headerShown: false}}/>
        <Stack.Screen name="Chọn loại căn hộ bạn muốn mua" component={CategoryScreen} options = {{title: "CĂN HỘ"}}/>
        <Stack.Screen name="Chọn quận bạn cần tìm" component={LocationScreen} options = {{title: "CÁC QUẬN"}}/>
        <Stack.Screen name="Ngân sách của bạn là bao nhiêu ?" component={MoneyScreen} options = {{title: "NGÂN SÁCH CỦA BẠN"}} />
        <Stack.Screen name="Search" component={SearchResultScreen} options = {{headerShown: false}}/>
        <Stack.Screen
          name="Webview"
          component={WebviewScreen}
          options={{title: ""}}
        />
        <Stack.Screen name="Contact" component={ContactScreen} options = {{title: "CONTACT"}} /> 
        <Stack.Screen name="Details" component={ProductDetailScreen} options = {{headerShown: false}}/>
        <Stack.Screen
          name="ProjectWebview"
          component={ProjectWebviewScreen}
          options={{title: ""}}
        />
        <Stack.Screen name="Market" component={MarketScreen} options = {{title:"MARKET"}}/>
        <Stack.Screen name="Chart" component={ChartScreen} options = {{title:"chart"}}/>
        <Stack.Screen name="Contact_true" component={ContactScreen_true} options = {{headerShown: false}}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};
