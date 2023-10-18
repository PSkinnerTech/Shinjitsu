import React from "react";
import { Text, Image, View, StyleSheet } from "react-native";
import LoginLogoImage from "../../assets/shinjitsu.png";

function LoginLogo() {
  return <Image source={LoginLogoImage} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 60,
    marginBottom: 20,
  },
});

export default LoginLogo;
