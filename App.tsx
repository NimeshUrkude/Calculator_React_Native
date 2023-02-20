/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {SafeAreaView,ScrollView,StatusBar,StyleSheet,Text,useColorScheme,View,} from 'react-native';
import {Colors,DebugInstructions,Header,LearnMoreLinks,ReloadInstructions,} from 'react-native/Libraries/NewAppScreen';
import Homemain from "./components/home";

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Homemain/>
  );
}

const styles = StyleSheet.create({
  vv: {
    backgroundColor:"pink",
  },
});

export default App;
