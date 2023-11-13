import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import CustomButton from "../components/CustomButton";
import CustomTextInput from "../components/CustomTextInput";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../context/AuthStateContext";
import * as yup from "yup";

export default function LoginScreen() {
  const navigation = useNavigation();
  const [userEmail, setUserEmail] = useState(null);
  const [userPassword, setUserPassword] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);

  const { token, saveToken } = useAuth();

  const schema = yup.object().shape({
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .matches(
        /^(?=.*[A-Z])(?=.*[!@#$%^&*])/,
        "Password must contain an uppercase letter and a symbol"
      ),
  });

  function onChangeValue(inputType, enteredValue) {
    switch (inputType) {
      case "userMail":
        setUserEmail(enteredValue);
        console.log("entered email", enteredValue);
        break;
      case "userPassword":
        setUserPassword(enteredValue);
        console.log("entered pass", enteredValue);

        break;
    }
  }

  const signUpPressHandler = () => {
    navigation.navigate("Register");
  };

  const validateInput = async () => {
    try {
      await schema.validate({ email: userEmail, password: userPassword });
      setEmailError(null);
      setPasswordError(null);
      console.log("SUCCESS");
      saveToken("23223234343453");
    } catch (error) {
      console.log(error.message);
      if (error.path === "email") {
        setEmailError(error.message);
      } else if (error.path === "password") {
        setPasswordError(error.message);
      }
    }
  };

  const loginHandler = () => {
    validateInput();

    console.log("LOG IN PRESSED");
  };

  return (
    <ImageBackground
      source={require("../assets/backgroundImage.jpeg")}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>BOOK FAN APP</Text>

        <CustomTextInput
          icon={"mail-outline"}
          placeholder={"Enter your email"}
          iconColor={"#a52a2a9b"}
          onChangeText={onChangeValue.bind(this, "userMail")}
          value={userEmail}
        />

        {emailError && <Text style={styles.errorText}>{emailError}</Text>}

        <CustomTextInput
          icon={"lock-closed-outline"}
          placeholder={"Enter your password"}
          iconColor={"#a52a2a9b"}
          onChangeText={onChangeValue.bind(this, "userPassword")}
          value={userPassword}
        />
        {passwordError && <Text style={styles.errorText}>{passwordError}</Text>}

        <View style={styles.buttonContainer}>
          <CustomButton
            title={"LOG IN"}
            textColor={"white"}
            onPress={loginHandler}
          />
        </View>

        <Text style={styles.forgotPassword}>Don't have an account?</Text>

        <TouchableOpacity onPress={signUpPressHandler}>
          <Text style={styles.signUp}>Sign up!</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  container: {
    // marginVertical: 100,
    marginTop: 150,
    marginHorizontal: 20,
    flex: 1,
  },

  title: {
    marginBottom: 50,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 30,
    color: "#a52a2a9b",
  },
  buttonContainer: {
    marginTop: 50,
    marginBottom: 5,
  },
  forgotPassword: {
    textAlign: "center",
    color: "black",
  },
  signUp: {
    fontWeight: "bold",
    textAlign: "center",
  },

  errorText: {
    color: "#a52a2a9b",
    fontSize: 12,
  },
});
