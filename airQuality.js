//---------------------ORIGINAL CODE--------------------------

// import { useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   SafeAreaView,
//   TouchableOpacity,
//   ActivityIndicator,
// } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';

// const WEATHER_API_KEY = 'a769920061cfd8d93e4846374ab8ccee';
// const AIR_POLLUTION_API_KEY = 'a611cf76641d62a67f3be03d1a93ecd6';

// export default function CurrentWeather() {
//   const [city, setCity] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [airQuality, setAirQuality] = useState({
//     aqi: null,
//     co: null,
//     no2: null,
//     o3: null,
//     so2: null,
//   });

//   const fetchWeatherData = async () => {
//     try {
//       setLoading(true);
//       const response = await fetch(
//         `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}&units=metric`
//       );

//       if (!response.ok) {
//         throw new Error(
//           `Weather API request failed with status: ${response.status}`
//         );
//       }

//       const weather = await response.json();
//       console.log('Weather Data:', weather);

//       const airPollutionResponse = await fetch(
//         `https://api.openweathermap.org/data/2.5/air_pollution?lat=${weather.coord.lat}&lon=${weather.coord.lon}&appid=${AIR_POLLUTION_API_KEY}`
//       );

//       if (!airPollutionResponse.ok) {
//         throw new Error(
//           `Air Pollution API request failed with status: ${airPollutionResponse.status}`
//         );
//       }

//       const airPollutionData = await airPollutionResponse.json();
//       console.log('Air Pollution Data:', airPollutionData);

//       setAirQuality({
//         aqi: airPollutionData.list[0].main.aqi,
//         co: airPollutionData.list[0].components.co,
//         no2: airPollutionData.list[0].components.no2,
//         o3: airPollutionData.list[0].components.o3,
//         so2: airPollutionData.list[0].components.so2,
//       });
//       setLoading(false);
//     } catch (error) {
//       console.error('Error fetching data:', error.message);
//       setLoading(false);
//     }
//   };

//   const getAqiDescription = (aqi) => {
//     if (aqi === 1) {
//       return 'Air quality is good';
//     } else if (aqi === 2) {
//       return 'Air quality is fair';
//     } else if (aqi === 3) {
//       return 'Air quality is moderate';
//     } else if (aqi === 4) {
//       return 'Air quality is poor';
//     } else if (aqi === 5) {
//       return 'Air quality is very poor';
//     } else {
//       return 'Air quality data not available';
//     }
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <LinearGradient
//         colors={['goldenrod', 'royalblue', 'midnightblue']}
//         style={styles.gradient}>
//         <View style={styles.headingContainer}>
//           <Text style={styles.heading}>Air Quality</Text>
//           <View style={styles.contentContainer}>
//             <View style={styles.searchContainer}>
//               <TextInput
//                 style={styles.input}
//                 placeholder="Enter city"
//                 placeholderTextColor="white"
//                 value={city}
//                 onChangeText={setCity}
//               />
//               <TouchableOpacity
//                 style={styles.button}
//                 onPress={fetchWeatherData}>
//                 <Text style={styles.buttonText}>Search</Text>
//               </TouchableOpacity>
//             </View>
//             {loading ? (
//               <ActivityIndicator size="large" color="white" />
//             ) : (
//               <>
//                 <Text style={styles.airQuality}>
//                   {airQuality.aqi && `Air Quality Index (AQI): ${airQuality.aqi}`}
//                 </Text>
//                 <Text style={styles.airQuality}>
//                   {airQuality.co && `CO: ${airQuality.co} µg/m³`}
//                 </Text>
//                 <Text style={styles.airQuality}>
//                   {airQuality.no2 && `NO2: ${airQuality.no2} µg/m³`}
//                 </Text>
//                 <Text style={styles.airQuality}>
//                   {airQuality.o3 && `O3: ${airQuality.o3} µg/m³`}
//                 </Text>
//                 <Text style={styles.airQuality}>
//                   {airQuality.so2 && `SO2: ${airQuality.so2} µg/m³`}
//                 </Text>
//                 <Text style={styles.description}>
//                   {airQuality.aqi &&
//                     `Description: ${getAqiDescription(airQuality.aqi)}`}
//                 </Text>
//               </>
//             )}
//           </View>
//         </View>
//       </LinearGradient>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//   },
//   gradient: {
//     flex: 1,
//     width: '100%',
//     height: '100%',
//     alignItems: 'center',
//   },
//   headingContainer: {
//     flex: 1,
//     alignSelf: 'stretch',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   heading: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     color: 'white',
//   },
//   contentContainer: {
//     alignItems: 'center',
//   },
//   searchContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 10,
//     padding: 1,
//   },
//   input: {
//     height: 40,
//     width: 200,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginRight: 10,
//     paddingHorizontal: 10,
//     borderRadius: 20,
//     color: 'white',
//   },
//   button: {
//     backgroundColor: 'midnightblue',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 20,
//     marginTop: 10,
//   },
//   buttonText: {
//     color: 'white',
//   },
//   airQuality: {
//     marginTop: 10,
//     fontSize: 18,
//     color: 'white',
//   },
//   description: {
//     marginTop: 10,
//     fontSize: 16,
//     color: 'white',
//   },
// });

//airQuality
import { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
  TouchableHighlight,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Animated, {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
} from "react-native-reanimated";
import Modal from "react-native-modal";

const WEATHER_API_KEY = "a769920061cfd8d93e4846374ab8ccee";
const AIR_POLLUTION_API_KEY = "a611cf76641d62a67f3be03d1a93ecd6";

const getAqiDescription = (aqi) => {
  if (aqi === 1) {
    return "Air quality is good";
  } else if (aqi === 2) {
    return "Air quality is fair";
  } else if (aqi === 3) {
    return "Air quality is moderate";
  } else if (aqi === 4) {
    return "Air quality is poor";
  } else if (aqi === 5) {
    return "Air quality is very poor";
  } else {
    return "Air quality data not available";
  }
};

export default function CurrentWeather() {
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [airQuality, setAirQuality] = useState({
    aqi: null,
    co: null,
    no2: null,
    o3: null,
    so2: null,
  });
  const [modalVisible, setModalVisible] = useState(false);

  const fadeAnim = useSharedValue(0);

  useEffect(() => {
    fadeAnim.value = withSpring(1);
  }, [fadeAnim]);

  const fetchWeatherData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}&units=metric`
      );

      if (!response.ok) {
        throw new Error(
          `Weather API request failed with status: ${response.status}`
        );
      }

      const weather = await response.json();

      const airPollutionResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/air_pollution?lat=${weather.coord.lat}&lon=${weather.coord.lon}&appid=${AIR_POLLUTION_API_KEY}`
      );

      if (!airPollutionResponse.ok) {
        throw new Error(
          `Air Pollution API request failed with status: ${airPollutionResponse.status}`
        );
      }

      const airPollutionData = await airPollutionResponse.json();

      setAirQuality({
        aqi: airPollutionData.list[0].main.aqi,
        co: airPollutionData.list[0].components.co,
        no2: airPollutionData.list[0].components.no2,
        o3: airPollutionData.list[0].components.o3,
        so2: airPollutionData.list[0].components.so2,
      });

      setLoading(false);
      setModalVisible(true);
    } catch (error) {
      console.error("Error fetching data:", error.message);
      setLoading(false);
    }
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: fadeAnim.value,
    };
  });

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={["goldenrod", "royalblue", "midnightblue"]}
        style={styles.gradient}
      >
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>Air Quality</Text>
          <View style={styles.contentContainer}>
            <Animated.View style={[styles.searchContainer, animatedStyle]}>
              <TextInput
                style={styles.input}
                placeholder="Enter city"
                placeholderTextColor="white"
                value={city}
                onChangeText={setCity}
              />
              <TouchableOpacity
                style={styles.button}
                onPress={fetchWeatherData}
              >
                <Text style={styles.buttonText}>Search</Text>
              </TouchableOpacity>
            </Animated.View>
            {loading ? (
              <ActivityIndicator size="large" color="white" />
            ) : (
              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "rgba(221, 242, 253, 0.8)",
                  }}
                >
                  <View style={styles.modalView}>
                    <Text style={styles.modalHeader}>Air Quality Details</Text>
                    {airQuality.aqi && (
                      <>
                        <Text style={{ fontSize: 16 }}>
                          Air Quality Index (AQI): {airQuality.aqi}
                        </Text>
                        <Text style={{ fontSize: 16 }}>
                          CO: {airQuality.co} µg/m³
                        </Text>
                        <Text style={{ fontSize: 16 }}>
                          NO2: {airQuality.no2} µg/m³
                        </Text>
                        <Text style={{ fontSize: 16 }}>
                          O3: {airQuality.o3} µg/m³
                        </Text>
                        <Text style={{ fontSize: 16 }}>
                          SO2: {airQuality.so2} µg/m³
                        </Text>
                        <Text style={styles.description}>
                          Description: {getAqiDescription(airQuality.aqi)}
                        </Text>
                      </>
                    )}
                    <TouchableHighlight
                      onPress={() => {
                        setModalVisible(!modalVisible);
                      }}
                      underlayColor="white"
                    >
                      <Text style={styles.closeButton}>Close</Text>
                    </TouchableHighlight>
                  </View>
                </View>
              </Modal>
            )}
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}

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
    marginRight: 10,
  },
  buttonText: {
    color: "white",
  },
  modalView: {
    width: "80%",
    backgroundColor: "white",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "black",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
  },
  modalHeader: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  closeButton: {
    fontSize: 16,
    color: "blue",
    marginTop: 16,
  },
});
