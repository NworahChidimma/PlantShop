import { TouchableOpacity , Text, Alert} from "react-native"

const TextButton =({onPress,text}) =>{
    return(
        <TouchableOpacity onPress={onPress}>
                      <Text style={{color:"#004643", fontWeight:"500", marginLeft:5}}>{text}</Text>
                    </TouchableOpacity>
    )
}

export default TextButton;