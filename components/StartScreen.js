import * as React from 'react';
import {StyleSheet, View, Image} from 'react-native';

import {Button} from 'react-native-paper';

import 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import Constant from '../constant/Constant';

export default function StartScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoview}>
        <Image source={Constant.StartScreen.logo} />
        <Image source = {Constant.StartScreen.name}/>
        <Image source = {Constant.StartScreen.sologan}/>
      </View>

            <View style = {styles.buttonview}>
        <Button
          mode="contained"
                onPress = {()  => navigation.navigate(Constant.StartScreen.goTo)}
                style = {styles.button}>
                    Bắt đầu
                </Button>
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
        flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
        backgroundColor: '#e8f3f1',
    },

    logoview: {
        flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
    },

    buttonview: {
        flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    },

    button: {
    width: 200,
    backgroundColor: '#00aa9d',
  },
});
