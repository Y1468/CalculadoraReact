
import { View,StyleSheet,Text,TouchableHighlight } from "react-native";

export default props=>{
    return(
        <View>
            <Text numberOflines={1} style={st.txt}>
                {
                   props.valor
                }
            </Text>

            <Text numberOflines={1} style={st.txt}>
                {
                   props.res
                }
            </Text>
            
        </View>
    )
}

const st=StyleSheet.create({

    txt:{
        color:'white',
        fontSize:28
      },
    
})