import React from "react";
import { View, Text, StyleSheet } from "react-native";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to Shinjitsu!</Text>
      <Text style={styles.infoText}>
        Your wallet is now connected. Explore the app and enjoy your experience.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  infoText: {
    fontSize: 18,
    textAlign: "center",
    marginHorizontal: 20,
    color: "#666",
  },
});

export default HomeScreen;
