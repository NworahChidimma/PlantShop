 import { Text, View , Image, TextInput, TouchableOpacity, ScrollView, Dimensions, Button} from "react-native";
 import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
 import { useState, useEffect } from "react";
 import TextButton from "../components/button";
  import Feather from '@expo/vector-icons/Feather';

 export default function signUp () {
   const {width, height} = Dimensions.get('screen')
     const [passwordVisible, setPasswordVisible]= useState(false)
     const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false)
     return (
        <ScrollView>
       <SafeAreaView style={{flex:1,backgroundColor:"white", paddingHorizontal:width*0.06}}>
         <Image 
         style={{alignSelf:"center",  marginTop:30,width:width*.362, height:height*.132}}
         source={require("../assets/images/logo-color.png")}>
         </Image>
   
         <Text
          style={{color:"#004643", textAlign:"center", fontSize:27 , marginTop:30, fontWeight:"semibold"}}>
           Create new  account
           </Text>
   
           <Text style={{fontSize:18, marginTop:35, fontWeight:"semibold"}}>
             Email Address
             </Text>
   
             <TextInput keyboardType="email-address" placeholder="Enter your email address" placeholderTextColor={"gray"}
             style={{borderWidth:1, borderColor:"gray",height:height*.06, marginTop:7, borderRadius:10, paddingLeft:10}}>
             </TextInput>
   
             <Text style={{fontSize:18, marginTop:25, fontWeight:"semibold"}}>
               Password
             </Text>
   
              <TextInput secureTextEntry={!passwordVisible} placeholder="Enter your Password" placeholderTextColor={"gray"}
             style={{borderWidth:1, borderColor:"gray",height:height*.06, marginTop:7, borderRadius:10, paddingLeft:10}}>
             </TextInput>

              <TouchableOpacity onPress={() => {

            setPasswordVisible(!passwordVisible)

          }} style={{bottom:height*.046, left:width*.78}}>
          <Text  style={{color:"black"}}>{passwordVisible ? <Feather name="eye" size={24} color="black" /> : <Feather name="eye-off" size={24} color="black" />}</Text>
          </TouchableOpacity>

             <Text style={{fontSize:18, marginTop:2, fontWeight:"semibold"}}>
               Confirm Password
             </Text>
   
              <TextInput secureTextEntry={!confirmPasswordVisible} placeholder="Enter your Confirm Password" placeholderTextColor={"gray"}
             style={{borderWidth:1, borderColor:"gray",height:height*.06, marginTop:7, borderRadius:10, paddingLeft:10}}>
             </TextInput>

              <TouchableOpacity onPress={() => {

            setConfirmPasswordVisible(!confirmPasswordVisible)

          }} style={{bottom:height*.046, left:width*.78}}>
          <Text  style={{color:"black"}}>{confirmPasswordVisible ? <Feather name="eye" size={24} color="black" /> : <Feather name="eye-off" size={24} color="black" />}</Text>
          </TouchableOpacity>
   
   
             <View style={{flexDirection:"row", flexWrap:"wrap", marginTop:20}}>
         
               <Text style={{ fontSize:15, color:"gray"}}>I've read and agreed to</Text>
               <TextButton text={"User Agreement"}/>
               <Text style={{marginStart:2, fontSize:15, color:"gray"}}>and</Text>
               <TextButton text={"Privacy Policy"}/>
              
             </View>
   
             
              <TouchableOpacity style={{backgroundColor:"#004643", borderRadius:50, marginTop:40}}>
               <Text style={{padding:15, textAlign:"center", color:"white", fontSize:20}}>
                 Sign up
               </Text>
              </TouchableOpacity>
   
              <TouchableOpacity>
               <Text style={{color:"gray", textAlign:"center", marginTop:17}}> 
                 other way to sign in
               </Text>
              </TouchableOpacity>
   
              <View style={{flex:1, flexDirection:"row", alignSelf:"center", marginTop:20, }}>
               <TouchableOpacity>
               <Image style={{marginRight:10}} source={require("../assets/images/google-icon.png")}></Image>
               </TouchableOpacity>
               <TouchableOpacity>
               <Image source={require("../assets/images/facebook-icon.png")}></Image>
               </TouchableOpacity>
              </View>
   
              <View style={{flex:1, flexDirection:"row", marginTop:50, alignSelf:"center"}}>
               <Text>Already have an account?</Text>
               <TextButton onPress={()=> router.back("./index")} text={"Back to sign In"}/>
              </View>
             
   
       </SafeAreaView>
       </ScrollView>
     );
 }
