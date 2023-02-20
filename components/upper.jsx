import {StyleSheet,Text,View} from 'react-native';
export default function Upper(props) {
  return (
    <View style={styles.upper_div}>
      <Text style={styles.upper_txt}>{props.display}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  upper_div:{
    flex:1,
    backgroundColor:"black",
    justifyContent:"flex-end",
    alignItems:"flex-end",
    padding:10,
  },
  upper_txt:{
    color:"white",
    fontSize:30,
  }
});
