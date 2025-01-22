import React, { useState } from "react";
import { Button, View } from "react-native";
import AudioRecorderPlayer from "react-native-audio-recorder-player";

const audioRecorderPlayer = new AudioRecorderPlayer();

export default function RecorderButton() {
  const [recording, setRecording] = useState(false);
  const [duration, setDuration] = useState("");

  const startRecording = async () => {
    await requestMicrophonePermission();
    setRecording(true);
    const path = "hello.m4a"; // Audio file path
    await audioRecorderPlayer.startRecorder(path);
    audioRecorderPlayer.addRecordBackListener((e) => {
      setDuration(e.current_position);
    });
  };

  const stopRecording = async () => {
    setRecording(false);
    await audioRecorderPlayer.stopRecorder();
  };

  return (
    <View>
      <Button
        title={recording ? "Stop Recording" : "Start Recording"}
        onPress={recording ? stopRecording : startRecording}
      />
      <Text>Duration: {duration}</Text>
    </View>
  );
}
