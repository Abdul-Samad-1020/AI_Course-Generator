import { View, Image, Text, StyleSheet } from "react-native";
import React from "react";
import Color from "./../Constants/ColoUrs";
const Index = () => {
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
            fontWeight: "bold",
            color: Color.WHITE,
            textAlign: "center",
          }}
        >
          WEllcome to Abdul SAmad
        </Text>

        <Text
          style={{
            fontSize: 20,
            color: Color.WHITE,
            marginTop: 20,
            textAlign: "center",
          }}
        >
          Transform your ideas into engaging educational content
        </Text>

        <View style={styles.button}>
          <Text style={[styles.buttonText,{color:Color.PRIMARY, fontSize:16,fontWeight:600}]}>Get Start</Text>
        </View>

        <View style={[styles.button,{backgroundColor:Color.PRIMARY, borderWidth:1, borderColor: Color.WHITE}]}>
          <Text style={[styles.buttonText,{color:Color.WHITE,fontSize:14,fontWeight:600}]}>Already Have an Account</Text>
        </View>

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
  },
});
