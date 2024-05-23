import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Alert,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
const Question = () => {
  const [question, setQuestion] = useState();

  const onSubmit = () => {
    return Alert.alert("Alert", `We will respond to your question shortly.`, [
      { text: "Close", onPress: () => {} },
    ]);
  };
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={["goldenrod", "royalblue", "midnightblue"]}
        style={styles.gradient}
      >
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>Tell us your Problem:</Text>
          <View style={styles.contentContainer}>
            <View style={styles.searchContainer}>
              <TextInput
                style={styles.input}
                placeholder="Question"
                placeholderTextColor="white"
                value={question}
                onChangeText={setQuestion}
              />
              <TouchableOpacity style={styles.button} onPress={onSubmit}>
                <Text style={styles.buttonText}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  gradient: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  headingContainer: {
    flex: 1,
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "white",
  },
  contentContainer: {
    alignItems: "center",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    padding: 1,
  },
  input: {
    height: 40,
    width: 200,
    borderColor: "gray",
    borderWidth: 1,
    marginRight: 10,
    paddingHorizontal: 10,
    borderRadius: 20,
    color: "white",
  },
  button: {
    backgroundColor: "midnightblue",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 10,
  },
  buttonText: {
    color: "white",
  },
});
export default Question;
