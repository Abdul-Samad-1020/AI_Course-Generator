import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React from "react";
import Colors from "./../../Constants/ColoUrs";
const SignUp = () => {
  return (
    <View
      style={{
        display: "flex",

        alignItems: "center",
        paddingTop: 10,
        flex: 1,
        backgroundColor: Colors.WHITE,
      }}
    >
      <Image
        source={require("./../../assets/images/logo.png")}
        style={{
          width: 180,
          height: 180,
        }}
      ></Image>
      <Text
        style={{
          fontSize: 30,
          fontWeight: "outfit-bold",
          marginBottom: 20,
        }}
      >
        Create New Account
      </Text>
      <TextInput
        style={styles.TextInput}
        placeholder="Enter your Name"
      ></TextInput>
      <TextInput
        style={styles.TextInput}
        placeholder="Enter your email"
      ></TextInput>
      <TextInput
        style={styles.TextInput}
        secureTextEntry={true}
        placeholder="Enter your password"
        keyboardType="visible"
      ></TextInput>
      <TouchableOpacity
        style={{
          padding: 15,
          backgroundColor: Colors.PRIMARY,
          width: "100%",
          marginTop: 25,
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            fontFamily: "outfit",
            fontSize: 20,
            color: Colors.WHITE,
            textAlign: "center",
          }}
        >
          Create Account
        </Text>
            <View style={
                {
                    display: "flex",
                    flexDirection:'row', gap: 5,
                    marginTop: 20,
                }
            }> 
            <Text>ALrady hace an Account</Text>
            <Pressable>
            <Text>Sign In Here</Text>
            </Pressable>
            </TouchableOpacity>
            </View>
            
            
    </View>
  );
};

export default SignUp;
const styles = StyleSheet.create({
  textInput: {
    width: "85%", // Adjusts width for a clean look
    height: 50, // Fixed height for uniformity
    borderWidth: 1.5, // Slightly bold outline
    borderColor: "#ccc", // Light grey border
    borderRadius: 10, // Rounded corners
    paddingHorizontal: 15, // Spacing inside the input
    fontSize: 16, // Readable font size
    backgroundColor: "#fff", // White background
    marginBottom: 15, // Spacing between inputs
    elevation: 2, // Subtle shadow for depth (Android)
    shadowColor: "#000", // Shadow effect (iOS)
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
});
