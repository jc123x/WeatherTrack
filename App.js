import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import WeeklyApp from "./WeeklyApp";
import AirQualityApp from "./airQuality";
import CurrentWeather from "./currentWeather";
import HomeScreen from "./HomeScreen";
import Question from "./query";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Home" }}
        />
        <Stack.Screen
          name="CurrentWeather"
          component={CurrentWeather}
          options={{ title: "Current Weather" }}
        />
        <Stack.Screen
          name="AirQuality"
          component={AirQualityApp}
          options={{ title: "Air Quality" }}
        />
        <Stack.Screen
          name="WeeklyWeather"
          component={WeeklyApp}
          options={{ title: "Weekly Weather" }}
        />
        <Stack.Screen
          name="question"
          component={Question}
          options={{ title: "Need Help" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
