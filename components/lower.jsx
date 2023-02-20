import { useEffect, useState } from 'react';
import {StyleSheet,Text,View} from 'react-native';
import Buton from "./buton.jsx";
export default function Lower(props) {

  const[a,seta]=useState(0);
  const[b,setb]=useState("");
  const[c,setc]=useState(0);
  const[out,setout]=useState("");

  useEffect(()=>{
    setout(b.length===0?(a):(a + " " + b + " " + c));
    //props.hero(out);
  },[a,b,c]);

  useEffect(()=>{
    props.hero(out);
  },[out]);

  function pback(s1){

    if(b.length===0 && typeof s1==="number"){
      seta((a*10)+s1);
    }
    else if(b.length!==0 && typeof s1==="number"){
      setc((c*10)+s1);
    }
    else if(typeof s1==="string"){
      if(s1==="="){
        if(b==="+"){seta(a+c);}
        else if(b==="-"){seta(a-c);}
        else if(b==="X"){seta(a*c);}
        else if(b==="/"){seta(a/c);}
        else if(b==="%"){seta(a%c);}
        setb("");
        setc(0);
      }
      else if(s1==="AC"){
        seta(0);
        setb("");
        setc(0);
      }
      else{
        setb(s1);
      }
    }
    //console.log(s1 + " " + a + " " + b + " " + c)
  }

  return (
    <View style={styles.lower_div}>
      <View style={styles.one}><Buton col={1} val={"="} cback={pback}/></View>
      <View style={styles.two}>
        <Buton col={2} val={7} cback={pback}/>
        <Buton col={2} val={8} cback={pback}/>
        <Buton col={2} val={9} cback={pback}/>
        <Buton col={1} val={"+"} cback={pback}/>
      </View>
      <View style={styles.two}>
        <Buton col={2} val={4} cback={pback}/>
        <Buton col={2} val={5} cback={pback}/>
        <Buton col={2} val={6} cback={pback}/>
        <Buton col={1} val={"-"} cback={pback}/>
      </View>
      <View style={styles.two}>
        <Buton col={2} val={1} cback={pback}/>
        <Buton col={2} val={2} cback={pback}/>
        <Buton col={2} val={3} cback={pback}/>
        <Buton col={1} val={"X"} cback={pback}/>
      </View>
      <View style={styles.two}>
        <Buton col={2} val={0} cback={pback}/>
        <Buton col={0} val={"AC"} cback={pback}/>
        <Buton col={0} val={"%"} cback={pback}/>
        <Buton col={1} val={"/"} cback={pback}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  lower_div:{
    flex:2.3,
    backgroundColor:"black",
    padding:10,
    justifyContent:"space-between",
  },
  one:{
    flexDirection:"row",
    justifyContent:"flex-end",
  },
  two:{
    flexDirection:"row",
    justifyContent:"space-between",
  }
});
