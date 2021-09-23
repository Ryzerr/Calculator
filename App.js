import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  
 
  const[resultText, setResultText] = useState("");
  const[calcText, setCalcText] = useState("");
  // console.log(operators.includes(calcText.charAt(calcText.length-1)));
  const onButtonClick= (text) => {
    setCalcText(calcText + text);
     
    }; 
    
  
  
  const onOperationClick = (text) =>{
    let operators = ['DEL', 'C', '+', '-', '*', '/']

    const calculation =()=>{
      if(operators.includes(calcText.charAt(calcText.length-1)))
        setCalcText(calcText.slice(0,calcText.length-1));
      else setResultText(eval(calcText));
      return;
     };

      switch (text){
      
        case 'DEL':
          return(setCalcText(calcText.slice(0,calcText.length-1))); 
          case 'C':
           
              setResultText("");
              setCalcText("");
              return;
         
          case '=':
            return calculation();
            
      };
     

    if(operators.includes(calcText.charAt(calcText.length-1))) return;
    setCalcText(calcText + text); 
  }
  return (

    
    <View style={styles.container}>
     <View style = {styles.calculation}>
      <Text style = {styles.calcText}>{calcText}</Text>
     </View>
     <View style = {styles.result}>
    <Text style = {styles.resText}>{resultText}</Text>
     </View >
     <View style = {styles.container2}>
     <View style = {styles.buttons}>

       <View style = {styles.buttonView}>
         <TouchableOpacity style = {styles.button} onPress ={()=>{onButtonClick(1)}}>
           <Text style = {styles.buttonText}>1</Text>
         </TouchableOpacity >
         <TouchableOpacity style = {styles.button} onPress ={()=>{onButtonClick(2)}}>
           <Text style = {styles.buttonText}>2</Text>
         </TouchableOpacity>
         <TouchableOpacity style = {styles.button} onPress ={()=>{onButtonClick(3)}}>
           <Text style = {styles.buttonText}>3</Text>
         </TouchableOpacity>
       </View>
       <View style = {styles.buttonView}>
         <TouchableOpacity style = {styles.button} onPress ={()=>{onButtonClick(4)}}>
           <Text style = {styles.buttonText}>4</Text>
         </TouchableOpacity >
         <TouchableOpacity style = {styles.button} onPress ={()=>{onButtonClick(5)}}>
           <Text style = {styles.buttonText}>5</Text>
         </TouchableOpacity>
         <TouchableOpacity style = {styles.button} onPress ={()=>{onButtonClick(6)}}>
           <Text style = {styles.buttonText}>6</Text>
         </TouchableOpacity>
       </View>
       <View style = {styles.buttonView}>
         <TouchableOpacity style = {styles.button} onPress ={()=>{onButtonClick(7)}}>
           <Text style = {styles.buttonText}>7</Text>
         </TouchableOpacity >
         <TouchableOpacity style = {styles.button} onPress ={()=>{onButtonClick(8)}}>
           <Text style = {styles.buttonText}>8</Text>
         </TouchableOpacity>
         <TouchableOpacity style = {styles.button} onPress ={()=>{onButtonClick(9)}}>
           <Text style = {styles.buttonText}>9</Text>
         </TouchableOpacity>
       </View>
       <View style = {styles.buttonView}>
         <TouchableOpacity style = {styles.button} onPress ={()=>{onButtonClick(0)}}>
           <Text style = {styles.buttonText}>0</Text>
         </TouchableOpacity >
         <TouchableOpacity style = {styles.button}  onPress ={()=>{onButtonClick('.')}}>
           <Text style = {styles.buttonText}>.</Text>
         </TouchableOpacity>
         <TouchableOpacity style = {styles.button} onPress ={()=>{onOperationClick('=')}}>
           <Text style = {styles.buttonText}>=</Text>
         </TouchableOpacity>
       </View>

     </View>
     <View style = {styles.operators}>
     <View style = {styles.opView}>
         <TouchableOpacity style = {styles.button} onPress ={()=>{onOperationClick('+')}}>
           <Text style = {styles.buttonText}>+</Text>
         </TouchableOpacity >
         <TouchableOpacity style = {styles.button} onPress ={()=>{onOperationClick('-')}}>
           <Text style = {styles.buttonText}>-</Text>
         </TouchableOpacity>
         <TouchableOpacity style = {styles.button} onPress ={()=>{onOperationClick('*')}}>
           <Text style = {styles.buttonText}>*</Text>
         </TouchableOpacity>
         <TouchableOpacity style = {styles.button} onPress ={()=>{onOperationClick('/')}}>
           <Text style = {styles.buttonText}>/</Text>
         </TouchableOpacity>
         <TouchableOpacity style = {{marginBottom: 5, alignItems: 'center'}} onLongPress = {()=>{onOperationClick('C')}} onPress ={()=>{onOperationClick('DEL')}}>
           <Text style = {styles.buttonText}>Del</Text>
           <Text style={{fontSize: 20, lineHeight: 20 }}>C</Text>
         </TouchableOpacity>
       
       </View>
     </View>
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
  },
  calculation: {
    flex: 2,
    alignItems: 'flex-end',
    paddingRight: 10,
    justifyContent: 'flex-end',
    backgroundColor: 'cornsilk',
  },
  result: {
    flex: 1,
    alignItems: 'flex-end',
    paddingRight: 10,
    justifyContent: 'flex-end',
    backgroundColor: 'darkgrey'
  },
  container2: {
    flex: 4,
    flexDirection: 'row',
  },
  buttons:{
    flex: 7,
    backgroundColor: 'silver'
  },
  operators: {
    flex: 2,
    backgroundColor: 'grey'
  },
  calcText:{
    fontSize: 40,
    color: "black",
    marginLeft: 10
  
  },
  resText: {
    fontSize: 40,
    color: 'black',
    marginLeft: 10
    
  },
  buttonView: {
    flex: 1,
    marginBottom: 50,
    flexDirection: 'row',
    borderColor: 'white'
  },
  opView: {
    flex: 1,
    flexDirection: 'column',
    borderColor: 'white'
  },
  button: {
    alignItems: 'center',
    flex: 1,

  },
  buttonText:{
    padding: 10,
    fontSize: 30,
    fontWeight: 'bold'
  }
});
