import React, { useState, useEffect } from "react";
import { Button, Text, View } from "react-native";
import Voice from "react-native-voice";

const PersianVoiceToText = () => {
  const [isListening, setIsListening] = useState(false);
  const [results, setResults] = useState([]);

  // Start listening to the microphone
  const startListening = async () => {
    try {
      // Start the speech recognition with Persian language (fa-IR)
      setIsListening(true);
      await Voice.start("fa-IR"); // Persian language code
    } catch (error) {
      console.error(error);
    }
  };

  // Stop listening
  const stopListening = async () => {
    try {
      setIsListening(false);
      await Voice.stop();
    } catch (error) {
      console.error(error);
    }
  };

  // Handle speech results
  const onSpeechResults = (event) => {
    setResults(event.value); // Get the recognized speech as text
  };

  // Handle errors
  const onSpeechError = (event) => {
    console.error(event.error);
  };

  useEffect(() => {
    // Setup event listeners for speech recognition
    Voice.onSpeechResults = onSpeechResults;
    Voice.onSpeechError = onSpeechError;

    return () => {
      // Remove listeners on cleanup
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  return (
    <View style={{ padding: 20 }}>
      <Button
        title={isListening ? "Stop Listening" : "Start Listening"}
        onPress={isListening ? stopListening : startListening}
      />
      <Text style={{ marginTop: 20 }}>
        Recognized Text: {results.join(" ")}
      </Text>
    </View>
  );
};

export default PersianVoiceToText;
