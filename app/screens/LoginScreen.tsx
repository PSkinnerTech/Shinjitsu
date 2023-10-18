import React from "react";
import { ImageBackground, StyleSheet, Text } from "react-native";
import BackgroundImage from "../../assets/shinjitsu-login.png";
import LoginLogo from "../components/LoginLogo";
import WalletConnectButton from "../components/WalletConnectButton";

export const LoginScreen = () => {
  return (
    <ImageBackground
      source={BackgroundImage}
      style={styles.background}
      resizeMode="cover"
    >
      <LoginLogo />
      <WalletConnectButton />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
