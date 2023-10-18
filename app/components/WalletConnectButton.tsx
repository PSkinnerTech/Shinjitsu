import React from "react";
import { Text, Pressable, StyleSheet } from "react-native";
import {
  WalletConnectModal,
  useWalletConnectModal,
} from "@walletconnect/modal-react-native";
import { router } from "expo-router";

const projectId = "8b22527de28e97b2448fd6311eb32ec2";

const providerMetadata = {
  name: "shinjitsu",
  description:
    "Shinjitsu is the Source of Truth for the Brazilian Jiu Jitsu Community; allowing practitioners to make claims about their BJJ experience, attest to others claims, and verify the truth and authenticity of another practitioners skill level.",
  url: "https://shinjitsu.app",
  icons: ["https://your-project-logo.com/"],
  redirect: {
    native: "shinjitsu://",
    universal: "https://shinjitsu.app",
  },
};

const styles = StyleSheet.create({
  button: {
    marginTop: 500,
    marginBottom: 10,
    marginHorizontal: 25,
    borderWidth: 2,
    borderColor: "#fdcc8e",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: "center",
    backgroundColor: "transparent",
  },
  buttonText: {
    color: "#fdcc8e",
    fontSize: 16,
    fontWeight: "bold",
    textShadowColor: "rgba(255, 100, 65, 1)",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
});

function WalletConnectButton() {
  const { open, isConnected } = useWalletConnectModal();

  const handlePress = () => {
    if (isConnected) {
      router.replace("/home");
    } else {
      open();
    }
  };

  return (
    <>
      <Pressable style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>
          {isConnected ? "View Account" : "Connect Wallet"}
        </Text>
      </Pressable>
      <WalletConnectModal
        projectId={projectId}
        providerMetadata={providerMetadata}
        themeMode="dark"
      />
    </>
  );
}

export default WalletConnectButton;
