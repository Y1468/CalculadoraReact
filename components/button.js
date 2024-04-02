
import { TouchableHighlight,View,StyleSheet, Dimensions,Text} from "react-native";


export default props=>{

    const estiloBtn=[st.btn]

    if (props.duplo) {
        estiloBtn.push(st.btnDuplo)
    }

    if (props.igual) {
        estiloBtn.push(st.btnIgual)
    }

    if (props.operacao) {
        estiloBtn.push(st.btnOper)
    }

    if (props.ac) {
        estiloBtn.push(st.btnAc)
    }

    if (props.bs) {
        estiloBtn.push(st.btnBs)
    }
    return(
       <View>
          <TouchableHighlight onPress={()=>props.aoClicar()}>
                <Text style={estiloBtn}>{props.label}</Text>
          </TouchableHighlight>
       </View>
    )
}

const st=StyleSheet.create({

   btn:{
      fontSize:30,
      height:Dimensions.get('window').width/4,
      width:Dimensions.get('window').width/4,
      padding:20,
      backgroundColor:'#000',
      color:'#fff',
      borderWidth:1,
      borderColor:'#777',
      textAlign:'center',
   },

   btnOper:{
      color:'#0f0'
   },

   btnIgual:{
     color:'#f00'
   },

   btnAc:{
     color:'#ff0'
   },

   btnBs:{
     color:'#0ff'
   },

   btnDuplo:{
     width:Dimensions.get('window').width/4*2
   },

   
})