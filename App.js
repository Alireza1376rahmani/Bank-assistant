import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import VoiceRecorder from "./components/VoiceRecorder";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Text</Text>
      <VoiceRecorder />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
