import { Text, SafeAreaView, StyleSheet, View } from "react-native";
import store from "./Redux/Store/index";
import { Provider } from "react-redux";
import Weeklyweather from "./Weeklyweather";

export default function WeeklyApp() {
  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
        <Weeklyweather />
      </Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
});
