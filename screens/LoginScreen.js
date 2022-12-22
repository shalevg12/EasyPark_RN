import { View, Text, StyleSheet, KeyboardAvoidingView } from "react-native";
import React, { useState } from "react";

import { StatusBar } from "expo-status-bar";

import { Button, Input, Image } from "@rneui/base";

import { carLogo } from "../assets";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = () => {
    navigation.navigate("Home");
  };

  return (
    <KeyboardAvoidingView styles={styles.contaienr}>
      <StatusBar style="light" />

      <Image
        source={{
          url: "https://img.freepik.com/premium-vector/car-parking-sign-parking-space-icon-parking-lot-car-parking-flat-style-vector-illustration-web-element_435184-1157.jpg?w=2000",
        }}
        style={{ weight: 200, height: 200 }}
      />
      <View>
        <Input
          placeholder="Email"
          autoFocus
          type="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          type="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <Button containerStyle={styles.button} onPress={signIn} title="Login" />
      <Button
        onPress={() => navigation.navigate("Register")}
        containerStyle={styles.button}
        type="outline"
        title="Register"
      />
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  contaienr: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  inputContainer: {},
  button: {},
});
