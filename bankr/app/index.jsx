 import { Text, View , Image, TextInput, TouchableOpacity, ScrollView, Dimensions, Button} from "react-native";
 import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {

  const {width, height} = Dimensions.get('screen')
  return (
    <SafeAreaView style={{flex:1,backgroundColor:"white", paddingHorizontal:width*0.06}}>
      <Image 
      style={{alignSelf:"center",  marginTop:30,width:width*.362, height:height*.132}}
      source={require("../assets/images/logo-color.png")}>
      </Image>

      <Text
       style={{color:"#004643", textAlign:"center", fontSize:27 , marginTop:30, fontWeight:"semibold"}}>
        Sign in to your account
        </Text>

        <Text style={{fontSize:18, marginTop:35, fontWeight:"semibold"}}>
          Email Address
          </Text>

          <TextInput placeholder="Enter your email address" placeholderTextColor={"gray"}
          style={{borderWidth:1, borderColor:"gray",height:height*.06, marginTop:7, borderRadius:10, paddingLeft:10}}>
          </TextInput>

          <Text style={{fontSize:18, marginTop:25, fontWeight:"semibold"}}>
            Password
          </Text>

           <TextInput placeholder="Enter your Password" placeholderTextColor={"gray"}
          style={{borderWidth:1, borderColor:"gray",height:height*.06, marginTop:7, borderRadius:10, paddingLeft:10}}>
          </TextInput>

          <TouchableOpacity>
            <Text style={{ color:"#757575", textAlign:"right", marginTop:15, fontSize:17, fontWeight:"semibold"}}>
              Forgot password?
            </Text>
          </TouchableOpacity>

          <View style={{flexDirection:"row", flexWrap:"wrap", marginTop:20}}>
      
            <Text style={{ fontSize:15, color:"gray"}}>I've read and agreed to</Text>
            <TouchableOpacity><Text style={{marginStart:2, fontSize:15, color:"#004643", fontWeight:'500'}}>User Agreement</Text></TouchableOpacity>
            <Text style={{marginStart:2, fontSize:15, color:"gray"}}>and</Text>
            <TouchableOpacity><Text style={{marginStart:2, fontSize:15, color:"#004643", fontWeight:"500"}}>Privacy Policy</Text></TouchableOpacity>
          </View>

          
           <TouchableOpacity style={{backgroundColor:"#004643", borderRadius:50, marginTop:40}}>
            <Text style={{padding:15, textAlign:"center", color:"white", fontSize:20}}>
              Sign in
            </Text>
           </TouchableOpacity>
          

    </SafeAreaView>
  );
}
 
