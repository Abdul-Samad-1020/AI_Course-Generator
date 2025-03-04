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
import { useRouter, useState } from "expo-router";
import Colors from "./../../Constants/ColoUrs";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { db } from "../../Config/FireBaseConfig";
const SignUp = () => {
  const router = useRouter();
  const [name , setName]= useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const createNewAccount=()=>{
   createUserWithEmailAndPassword(Auth,email,password)
   .then(async(resp)=>{
    const user=resp.user;
    console.log(user);
    await saveUser(user);
    // save user to database 
   })
   .catch((e) => {
     console.log(e.message);
   });
   //NAviagte to new screen
  }
  const saveUser=async(user)=>{
    await setDoc(doc(db, ' users', email),{
      name: name,
      email: email,
      member:false,
      uid:user?.uid
    })
    // save user to database
    // navigate to home screen
  }


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
        style={styles.textInput}
        onChange={(value)=>setName(value)}
        placeholder="Enter your Name"
      ></TextInput>
      <TextInput
        style={styles.textInput}
        onChange={(value)=>setEmail(value)}
        
        placeholder="Enter your email"
      ></TextInput>
      <TextInput
        style={styles.textInput}
        onChange={(value)=>setPassword(value)}
        
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
        onPress={createNewAccount}
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
      </TouchableOpacity>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 5,
          marginTop: 20,
        }}
      >
        <Text
          style={{
            fontFamily: "outfit",
          }}
        >
          ALrady hace an Account
        </Text>
        <Pressable onPress={() => router.push("auth/SignIn")}>
          <Text
            style={{
              fontFamily: "outfit-bold",
              color: Colors.PRIMARY,
            }}
          >
            Sign In Here
          </Text>
        </Pressable>
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
