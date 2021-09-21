import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, ImageBackground, StyleSheet, Image } from "react-native";
import Button from "../components/Button";

const WelcomeScreen = () => {
  return (
    <ImageBackground
      blurRadius={8}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoCnntainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.tagLine}>Sell What You Don't Need</Text>
      </View>
      <SafeAreaView style={styles.buttonsContainer} edges={["bottom"]}>
        <Button color="primary" onPress={() => console.log("lala")}>
          LOGIN
        </Button>
        <View style={{ marginTop: 20 }} />
        <Button color="secondary" onPress={() => console.log("lala")}>
          REGISTER
        </Button>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  logo: {
    width: 100,
    height: 100,
  },
  buttonsContainer: {
    paddingHorizontal: 20,
    width: "100%",
  },
  logoCnntainer: {
    alignItems: "center",
    position: "absolute",
    top: 70,
  },
  tagLine: {
    fontSize: 25,
    fontWeight: "600",
    paddingTop: 20,
  },
});

export default WelcomeScreen;
