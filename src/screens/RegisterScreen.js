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
import * as yup from "yup";

export default function RegisterScreen() {
  const navigation = useNavigation();

  const [username, setUsername] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [userPassword, setUserPassword] = useState(null);
  const [confrimPassword, setConfirmPassword] = useState(null);

  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [usernameError, setUsernameError] = useState(null);
  const [confirmPasswordError, setConfirmPasswordError] = useState(null);

  function onChangeValue(inputType, enteredValue) {
    switch (inputType) {
      case "userMail":
        console.log("email", enteredValue);
        setUserEmail(enteredValue);
        break;
      case "userPassword":
        console.log("pas", enteredValue);

        setUserPassword(enteredValue);

        break;
      case "username":
        console.log("username", enteredValue);
        setUsername(enteredValue);

        break;
      case "confrimPassword":
        console.log("conf pas", enteredValue);

        setConfirmPassword(enteredValue);
        break;
    }
  }

  const schema = yup.object().shape({
    name: yup.string().required("Username is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .matches(
        /^(?=.*[A-Z])(?=.*[!@#$%^&*])/,
        "Password must contain an uppercase letter and a symbol"
      ),

    confPass: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords must match")
      .required("Confirm password must match password"),
  });

  const validateInput = async () => {
    try {
      await schema.validate({
        email: userEmail,
        password: userPassword,
        name: username,
        confPass: confrimPassword,
      });
      setEmailError(null);
      setPasswordError(null);
      setUsernameError(null);
      setConfirmPassword(null);

      console.log("SUCCESS");
      saveToken("23223234343453");
    } catch (error) {
      console.log(error.message);
      if (error.path === "email") {
        setEmailError(error.message);
      } else if (error.path === "password") {
        setPasswordError(error.message);
      } else if (error.path === "username") {
        setUsernameError(error.message);
      } else if (error.path === "confrimPassword") {
        setConfirmPasswordError(error.message);
      }
    }
  };

  const signUpHandler = () => {
    validateInput();
  };

  return (
    <ImageBackground
      source={require("../assets/backgroundImage.jpeg")}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>BOOK FAN APP</Text>
        <CustomTextInput
          icon={"ios-person-outline"}
          placeholder={"Username"}
          iconColor={"#a52a2a9b"}
          onChangeText={onChangeValue.bind(this, "username")}
          value={username}
        />
        {username && <Text style={styles.errorText}>{usernameError}</Text>}

        <CustomTextInput
          icon={"mail-outline"}
          placeholder={"Email"}
          iconColor={"#a52a2a9b"}
          onChangeText={onChangeValue.bind(this, "userMail")}
          value={userEmail}
        />
        {emailError && <Text style={styles.errorText}>{emailError}</Text>}

        <CustomTextInput
          icon={"lock-closed-outline"}
          placeholder={"Password"}
          iconColor={"#a52a2a9b"}
          value={userPassword}
          onChangeText={onChangeValue.bind(this, "userPassword")}
        />
        {passwordError && <Text style={styles.errorText}>{passwordError}</Text>}

        <CustomTextInput
          icon={"lock-closed-outline"}
          placeholder={"Confirm password"}
          iconColor={"#a52a2a9b"}
          value={confrimPassword}
          onChangeText={onChangeValue.bind(this, "confrimPassword")}
        />
        {confirmPasswordError && (
          <Text style={styles.errorText}>{confirmPasswordError}</Text>
        )}

        <View style={styles.buttonContainer}>
          <CustomButton
            title={"SIGN UP"}
            textColor={"white"}
            onPress={signUpHandler}
          />
        </View>

        <Text style={styles.forgotPassword}>Already have an account?</Text>
        <TouchableOpacity>
          <Text style={styles.signUp}>Log in</Text>
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
