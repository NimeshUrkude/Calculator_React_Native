import {Pressable, StyleSheet,Text,View} from 'react-native';
export default function Buton(props) {
  return (
    <Pressable onPress={()=>props.cback(props.val)}>
      <Text style={[styles.buton_txt, props.col === 0 ? { color: "black", backgroundColor: "#9f9f9f" } : props.col === 1 ? { color: "white", backgroundColor: "#f69906" } : { color: "white", backgroundColor: "#313131" }]}>{props.val}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buton_div:{
  },
  buton_txt:{
    fontSize:35,
    color:"white",
    backgroundColor:"red",
    width:75,
    height:75,
    borderRadius:75,
    textAlignVertical: "center",
    textAlign:"center",
    justifyContent:"center",
  },
});
