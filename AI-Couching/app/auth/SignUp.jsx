import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useState } from "react"; // ✅ Fixed useState import
import { useRouter } from "expo-router"; // ✅ Fixed useRouter import
import Colors from "./../../Constants/ColoUrs";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../Config/FireBaseConfig"; // ✅ Import Firebase Auth & DB
import { setDoc, doc } from "firebase/firestore"; // ✅ Import Firestore functions

const SignUp = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createNewAccount = async () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (resp) => {
        const user = resp.user;
        console.log("User Created:", user);

        await saveUser(user); // ✅ Save user to Firestore

        // ✅ Navigate to home screen (modify if needed)
        router.push("/home");
      })
      .catch((e) => {
        console.log("Sign-up error:", e.message);
      });
  };

  const saveUser = async (user) => {
    try {
      await setDoc(doc(db, "users", email), {
        name: name,
        email: email,
        member: false,
        uid: user?.uid,
      });
      console.log("User saved in Firestore");
    } catch (error) {
      console.log("Firestore error:", error.message);
    }
  };

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
      />
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          marginBottom: 20,
        }}
      >
        Create New Account
      </Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(value) => setName(value)} // ✅ Fixed onChangeText
        placeholder="Enter your Name"
      />
      <TextInput
        style={styles.textInput}
        onChangeText={(value) => setEmail(value)} // ✅ Fixed onChangeText
        placeholder="Enter your email"
      />
      <TextInput
        style={styles.textInput}
        onChangeText={(value) => setPassword(value)} // ✅ Fixed onChangeText
        secureTextEntry={true}
        placeholder="Enter your password"
      />

      <TouchableOpacity
        style={{
          padding: 15,
          backgroundColor: Colors.PRIMARY,
          width: "100%",
          marginTop: 25,
          borderRadius: 10,
        }}
        onPress={createNewAccount} // ✅ Added event handler
      >
        <Text
          style={{
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
        <Text>Already have an Account?</Text>
        <Pressable onPress={() => router.push("/auth/SignIn")}>
          <Text
            style={{
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
    width: "85%",
    height: 50,
    borderWidth: 1.5,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: "#fff",
    marginBottom: 15,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
});
