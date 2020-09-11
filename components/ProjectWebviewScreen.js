import * as React from 'react';
import {StyleSheet} from 'react-native';
import 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {WebView} from 'react-native-webview';

export default class WebviewScreen extends React.Component {
    render() {
      
    return (
      <SafeAreaView style={styles.container}>
        <WebView source={{ uri: 'https://batdongsan.com.vn/khu-phuc-hop-ba-dinh/artex-building-172-ngoc-khanh-pj197/p1' }} />
      </SafeAreaView>
    );
  }

  
}


const styles = StyleSheet.create({
  container: {
      flex: 1,
  },

  view: {
      alignItems: "center",
      justifyContent: 'center'
  },

  text: {
      fontWeight: 'bold',
      margin : 5,
      color: '#007564',
      fontSize: 15
  },

})
