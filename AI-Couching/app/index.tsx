import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Color from "./../Constants/ColoUrs";
import { useRoute } from "@react-navigation/native";
import { router } from "expo-router";
const Index = () => {
  const Abdul = "Abdul Samad"; // Replace with your name
 const route = useRoute();
 
 
 
 
  return (
    <View style={{ flex: 1, backgroundColor: Color.WHITE }}>
      <Image
        source={require("../assets/images/landing.png")}
        style={{ width: "100%", height: 300, marginTop: 70 }} // Set proper width & height
        resizeMode="contain"
      />
      <View
        style={{
          padding: 25,
          backgroundColor: Color.PRIMARY,
          height: "100%",
          borderTopLeftRadius: 35,
          borderTopRightRadius: 35,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 30,
            color: Color.WHITE,
            textAlign: "center",
            fontFamily: 'outfit-bold',
          }}
        >
          Wellcome {Abdul}
        </Text>

        <Text
          style={{
            fontSize: 20,
            color: Color.WHITE,
            marginTop: 20,
            fontFamily: 'outfit-bold',
            textAlign: "center",
          }}
        >
          Transform your ideas into engaging educational content
        </Text>

        <TouchableOpacity 
          style={styles.button} 
          onPress={() => router.push('/auth/SignIn')} // Remove '.jsx' extension
        >

          <Text style={[styles.buttonText,{color:Color.PRIMARY, fontSize:16,fontWeight:600}]}>Get Start</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{router.push('/auth/SignUp')}} style={[styles.button,{backgroundColor:Color.PRIMARY, borderWidth:1, borderColor: Color.WHITE}]}>
          <Text style={[styles.buttonText,{color:Color.WHITE,fontSize:14}]}>Already Have an Account</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  button: {
    backgroundColor: Color.WHITE,
    padding: 15,
    borderRadius: 10,
    width: 150,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
  textAlign: "center",
  fontSize: 18,
  fontFamily: 'Outfit',
  },
});
