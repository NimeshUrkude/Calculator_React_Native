import { useState } from 'react';
import {StyleSheet,Text,View} from 'react-native';
import Lower from"./lower.jsx";
import Upper from "./upper.jsx";

export default function Home() {

  const[display,setdisplay]=useState("0");
  function herofun(s1){
    setdisplay(s1);
    console.log(s1);
  }

  return (
    <View style={styles.home_div}>
      <Upper display={display}/>
      <Lower hero={herofun}/>
    </View>
  );
}

const styles = StyleSheet.create({
  home_div: {
    flex: 1,
    flexDirection:"column",
  },
});
