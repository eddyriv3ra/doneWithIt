import React from "react";
import { StyleSheet, Text, View, Modal } from "react-native";
import ProgressBar from "react-native-progress/Bar";
import LottieView from "lottie-react-native";
import colors from "../config/colors";

interface IUploadScreen {
  progress: number;
  visible: boolean;
  onDone: () => void;
}

const UploadScreen = ({ onDone, progress, visible }: IUploadScreen) => {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {progress < 1 ? (
          <ProgressBar color={colors.primary} progress={progress} width={200} />
        ) : (
          <LottieView
            autoPlay
            onAnimationFinish={onDone}
            loop={false}
            source={require("../assets/animations/done.json")}
            style={styles.animation}
          />
        )}
      </View>
    </Modal>
  );
};

export default UploadScreen;

const styles = StyleSheet.create({
  animation: {
    width: 100,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});
