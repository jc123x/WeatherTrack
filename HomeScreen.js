// import { useEffect } from "react";
// import {
//   View,
//   Text,
//   TouchableHighlight,
//   SafeAreaView,
//   StyleSheet,
//   Animated,
//   ImageBackground,
// } from "react-native";

// const HomeScreen = ({ navigation }) => {
//   const scaleValue = new Animated.Value(0);
//   const fadeInValue = new Animated.Value(0);
//   const slideValue = new Animated.Value(-200);
//   const colorValue = new Animated.Value(0);
//   const fadeInValue2 = new Animated.Value(0);

//   useEffect(() => {
//     Animated.timing(scaleValue, {
//       toValue: 2,
//       duration: 1000,
//       useNativeDriver: true,
//     }).start(() => {
//       Animated.timing(fadeInValue, {
//         toValue: 1,
//         duration: 1000,
//         useNativeDriver: true,
//         delay: 500,
//       }).start();

//       Animated.timing(slideValue, {
//         toValue: 0,
//         duration: 1000,
//         useNativeDriver: true,
//         delay: 1000,
//       }).start();

//       Animated.timing(fadeInValue2, {
//         toValue: 1,
//         duration: 1000,
//         useNativeDriver: true,
//         delay: 500,
//       }).start();

//       Animated.timing(colorValue, {
//         toValue: 1,
//         duration: 1000,
//         useNativeDriver: false,
//         delay: 2000,
//       }).start();
//     });
//   }, []);

//   const textColor = colorValue.interpolate({
//     inputRange: [0, 1],
//     outputRange: ["black", "red"],
//   });

//   return (
//     <SafeAreaView style={styles.container}>
//       <ImageBackground
//         source={{
//           uri: "https://as2.ftcdn.net/v2/jpg/03/11/66/63/1000_F_311666358_r2EvWA8HzucVIoXOvlRM9CLKotzHQMA8.jpg",
//         }}
//         style={styles.backgroundImage}
//       >
//         <View
//           style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
//         >
//           <Text style={styles.title}>WeatherTrack</Text>
//           <Animated.Text
//             style={{
//               fontSize: 24,
//               marginBottom: 20,
//               fontWeight: "bold",
//               transform: [{ scale: scaleValue }],
//             }}
//           >
//             Welcome!!
//           </Animated.Text>
//           <TouchableHighlight
//             onPress={() => navigation.navigate("CurrentWeather")}
//             underlayColor="whitesmoke"
//           >
//             <Animated.View style={[styles.item, { opacity: fadeInValue }]}>
//               <Text style={{ fontSize: 18, fontWeight: "bold" }}>
//                 Check Current Weather
//               </Text>
//             </Animated.View>
//           </TouchableHighlight>
//           <TouchableHighlight
//             onPress={() => navigation.navigate("AirQuality")}
//             underlayColor="whitesmoke"
//           >
//             <Animated.View
//               style={[
//                 styles.item,
//                 {
//                   opacity: fadeInValue,
//                   transform: [{ translateX: slideValue }],
//                 },
//               ]}
//             >
//               <Text style={{ fontSize: 18, fontWeight: "bold" }}>
//                 Check air quality
//               </Text>
//             </Animated.View>
//           </TouchableHighlight>
//           <TouchableHighlight
//             onPress={() => navigation.navigate("WeeklyWeather")}
//             underlayColor="whitesmoke"
//           >
//             <Animated.View style={[styles.item, { opacity: fadeInValue2 }]}>
//               <Text style={{ fontSize: 18, fontWeight: "bold" }}>
//                 Check Weekly Weather
//               </Text>
//             </Animated.View>
//           </TouchableHighlight>
//           <TouchableHighlight
//             onPress={() => navigation.navigate("question")}
//             underlayColor="whitesmoke"
//           >
//             <Animated.View
//               style={[styles.item, { backgroundColor: textColor }]}
//             >
//               <Text
//                 style={{ fontSize: 18, fontWeight: "bold", color: "white" }}
//               >
//                 Need Help?
//               </Text>
//             </Animated.View>
//           </TouchableHighlight>
//         </View>
//       </ImageBackground>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//   },
//   backgroundImage: {
//     flex: 1,
//     width: "100%",
//     height: "100%",
//     alignItems: "center",
//   },
//   item: {
//     padding: 16,
//     margin: 5,
//     textAlign: "left",
//     borderBottomWidth: 1,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     textAlign: "center",
//     position: "absolute",
//     top: 0,
//     paddingTop: 15,
//   },
// });

// export default HomeScreen;


import { useEffect } from "react";
import {
  View,
  Text,
  TouchableHighlight,
  SafeAreaView,
  StyleSheet,
  Animated,
  ImageBackground,
} from "react-native";

const HomeScreen = ({ navigation }) => {
  const scaleValue = new Animated.Value(0);
  const fadeInValue = new Animated.Value(0);
  const slideValue = new Animated.Value(-200);
  const colorValue = new Animated.Value(0);
  const fadeInValue2 = new Animated.Value(0);

  useEffect(() => {
    Animated.sequence([
      Animated.timing(scaleValue, {
        toValue: 2,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.stagger(200, [
        Animated.timing(fadeInValue, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(slideValue, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(fadeInValue2, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(colorValue, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: false,
        }),
      ]),
    ]).start();
  }, []);

  const textColor = colorValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["black", "red"],
  });

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={{
          uri: "https://as2.ftcdn.net/v2/jpg/03/11/66/63/1000_F_311666358_r2EvWA8HzucVIoXOvlRM9CLKotzHQMA8.jpg",
        }}
        style={styles.backgroundImage}
      >
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text style={styles.title}>WeatherTrack</Text>
          <Animated.Text
            style={{
              fontSize: 24,
              marginBottom: 20,
              fontWeight: "bold",
              transform: [{ scale: scaleValue }],
            }}
          >
            Welcome!
          </Animated.Text>
          <TouchableHighlight
            onPress={() => navigation.navigate("CurrentWeather")}
            underlayColor="whitesmoke"
          >
            <Animated.View style={[styles.item, { opacity: fadeInValue }]}>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                Check Current Weather
              </Text>
            </Animated.View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => navigation.navigate("AirQuality")}
            underlayColor="#DDF2FD"
          >
            <Animated.View
              style={[
                styles.item,
                {
                  opacity: fadeInValue,
                  transform: [{ translateX: slideValue }],
                },
              ]}
            >
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                Check air quality
              </Text>
            </Animated.View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => navigation.navigate("WeeklyWeather")}
            underlayColor="#DDF2FD"
          >
            <Animated.View style={[styles.item, { opacity: fadeInValue2 }]}>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                Check Weekly Weather
              </Text>
            </Animated.View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => navigation.navigate("question")}
            underlayColor="#DDF2FD"
          >
            <Animated.View
              style={[styles.item, { backgroundColor: textColor }]}
            >
              <Text
                style={{ fontSize: 18, fontWeight: "bold", color: "white" }}
              >
                Need Help?
              </Text>
            </Animated.View>
          </TouchableHighlight>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  item: {
    padding: 16,
    margin: 5,
    textAlign: "left",
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    position: "absolute",
    top: 0,
    paddingTop: 15,
  },
});

export default HomeScreen;
