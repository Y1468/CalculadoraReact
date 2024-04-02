import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Display from './components/display';
import Btn from './components/button';
import { useState } from 'react';


let estado={
   valorTela:'',
   resultado:0,
   operado:false,
   ponto:false
}

export default function App() {

  const [vTela,setVtela]=useState(estado.valorTela)
  const [res,setRes]=useState(estado.resultado)

  function adDigito(d) {

    if (d=='+' || d=='-' || d=='*' || d=='/') {
      estado.ponto=false
    }

    if (d=='.' && !estado.ponto) {
      estado.ponto=true
      estado.operado=false

    }

    else if (d=='.' && estado.ponto) {
      return
    }

    if ((d=='+' || d=='-' || d=='*' || d=='/') && estado.operado) {
      estado.valorTela=estado.resultado
      estado.resultado=0
      
    }
     
    //Adicionando digito na tela
     estado.valorTela=estado.valorTela+d
     setVtela(estado.valorTela)
     setRes(estado.resultado)
     estado.operado=false
  }

  function limparTela() {
   estado={
      valorTela:'',
      resultado:0,
      operado:false,
      ponto:false
   }

    setVtela(estado.valorTela)
    setRes(estado.resultado)
  }

  function operar(d) {
     
    if (d=='AC') {
      limparTela()
      return
    }

     //Limpando um digito
     if (d=='BS') {
       estado.valorTela=vTela.substring(0,(vTela.length-1))
       setVtela(estado.valorTela)
       return
     }

     try {

       //Realizando operação
       estado.resultado=eval(estado.valorTela)
       estado.operado=false
       setRes(estado.resultado)

     } catch (error) {
       
       estado.resultado='Erro'
       estado.operado=true
       setRes(estado.resultado)

     }
  }

  return (
    <View>
      <View style={st.display}>
      <Text style={st.texto}>
        <Display valor={vTela} res={res}/>
      </Text>
      </View>

      <View style={st.botao}>
         <Btn label='C' ac aoClicar={()=>{operar('AC')}}>AC</Btn>
         <Btn label='(' aoClicar={()=>{adDigito('(')}}></Btn>
         <Btn label=')' aoClicar={()=>{adDigito(')')}}></Btn>
         <Btn label='/' operacao aoClicar={()=>{adDigito('/')}}></Btn>
         <Btn label='7' aoClicar={()=>{adDigito('7')}}></Btn>
         <Btn label='8' aoClicar={()=>{adDigito('8')}}></Btn>
         <Btn label='9' aoClicar={()=>{adDigito('9')}}></Btn>
         <Btn label='*' operacao aoClicar={()=>{adDigito('*')}}></Btn>
         <Btn label='4' aoClicar={()=>{adDigito('4')}}></Btn>
         <Btn label='5' aoClicar={()=>{adDigito('5')}}></Btn>
         <Btn label='6' aoClicar={()=>{adDigito('6')}}></Btn>
         <Btn label='-' operacao aoClicar={()=>{adDigito('-')}}></Btn>
         <Btn label='1' aoClicar={()=>{adDigito('1')}}></Btn>
         <Btn label='2' aoClicar={()=>{adDigito('2')}}></Btn>
         <Btn label='3' aoClicar={()=>{adDigito('3')}}></Btn>
         <Btn label='+' operacao aoClicar={()=>{adDigito('+')}}></Btn>
         <Btn label='0' aoClicar={()=>{adDigito('0')}}></Btn>
         <Btn label='.' aoClicar={()=>{adDigito('.')}}></Btn>
         <Btn label='<-' bs aoClicar={()=>{operar('BS')}}></Btn>
         <Btn label='=' igual aoClicar={()=>{operar('=')}}></Btn>
      </View>
    </View>
  );
}

const st = StyleSheet.create({
   botao:{
      display:'flex',
      flexDirection:'row',
      flexWrap:'wrap',
   },

   display:{
     backgroundColor:'#1C1C1C',
     height:120,
     alignItems:'flex-end',
   },

   texto:{
      marginTop:13
   }
   
});
