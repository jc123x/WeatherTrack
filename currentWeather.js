// ----------------ORIGINAL CODE------------------------

// import { useState } from 'react';
// import { View, Text, Image, StyleSheet, TextInput, SafeAreaView, TouchableOpacity } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';

// const API_KEY = 'b5c4abb0f15875e71827323bc32aeeee';

// export default function CurrentWeather() {
//   const [city, setCity] = useState('');
//   const [mainTemp, setMainTemp] = useState('');
//   const [description, setDescription] = useState('');
//   const [feels_like, setFeels_Like] = useState('');
//   const [iconID, setIconID] = useState('');

//   const fetchWeatherData = async () => {
//     try {
//       const response = await fetch(
//         `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
//       );
//       const weather = await response.json();
//       console.log(weather);
//       setMainTemp(weather.main.temp);
//       setDescription(weather.weather[0].description);
//       setFeels_Like(weather.main.feels_like);
//       setIconID(weather.weather[0].icon);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <LinearGradient colors={['goldenrod', 'royalblue', 'midnightblue']} style={styles.gradient}>
//         <View style={styles.headingContainer}>
//           <Text style={styles.heading}>Current Weather</Text>
//           <View style={styles.contentContainer}>
//             <View style={styles.searchContainer}>
//               <TextInput

//                 style={styles.input}
//                 placeholder="Enter city"
//                 placeholderTextColor="white"
//                 value={city}
//                 onChangeText={setCity}
//               />
//               <TouchableOpacity style={styles.button} onPress={fetchWeatherData}>
//                 <Text style={styles.buttonText}>Search</Text>
//               </TouchableOpacity>
//             </View>
//             <View style={styles.weatherContainer}>
//               <Text style={styles.mainTemp}>{mainTemp && `${mainTemp}°C`}</Text>
//               {iconID && (
//                 <Image
//                   style={styles.icon}
//                   source={{
//                     uri: `http://openweathermap.org/img/wn/${iconID}@2x.png`,
//                   }}
//                 />
//               )}
//             </View>
//             <Text style={styles.feelsLike}>{feels_like && `Feels Like: ${feels_like}°C`}</Text>
//             <Text style={styles.description}>{description}</Text>
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
//     color:'white',
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
//   weatherContainer: {
//     alignItems: 'center',
//   },
//   mainTemp: {
//     fontSize: 55,
//     marginTop: 40,
//   },
//   icon: {
//     width: 250,
//     height: 250,
//   },
//   feelsLike: {
//     marginTop: 40,
//     fontSize: 20,
//     color:'white',
//   },
//   description: {
//     marginTop: 10,
//     fontSize: 45,
//     fontWeight: 'bold',
//     paddingLeft: 20,
//     marginBottom: 4,
//     color:'white',
//   },
// });

//--------ADDED PROGRESS BAR----------
// import { useState } from 'react';
// import {
//   View,
//   Text,
//   Image,
//   StyleSheet,
//   TextInput,
//   SafeAreaView,
//   TouchableOpacity,
//   ActivityIndicator,
// } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';

// const API_KEY = 'b5c4abb0f15875e71827323bc32aeeee';

// export default function App() {
//   const [city, setCity] = useState('');
//   const [mainTemp, setMainTemp] = useState('');
//   const [description, setDescription] = useState('');
//   const [feels_like, setFeels_Like] = useState('');
//   const [iconID, setIconID] = useState('');
//   const [loading, setLoading] = useState(false);

//   const fetchWeatherData = async () => {
//     try {
//       setLoading(true);
//       const response = await fetch(
//         `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
//       );
//       const weather = await response.json();
//       console.log(weather);
//       setMainTemp(weather.main.temp);
//       setDescription(weather.weather[0].description);
//       setFeels_Like(weather.main.feels_like);
//       setIconID(weather.weather[0].icon);
//       setLoading(false);
//     } catch (error) {
//       console.error(error);
//       setLoading(false);
//     }
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <LinearGradient
//         colors={['goldenrod', 'royalblue', 'midnightblue']}
//         style={styles.gradient}>
//         <View style={styles.headingContainer}>
//           <Text style={styles.heading}>Current Weather</Text>
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
//                 <View style={styles.weatherContainer}>
//                   <Text style={styles.mainTemp}>
//                     {mainTemp && `${mainTemp}°C`}
//                   </Text>
//                   {iconID && (
//                     <Image
//                       style={styles.icon}
//                       source={{
//                         uri: `http://openweathermap.org/img/wn/${iconID}@2x.png`,
//                       }}
//                     />
//                   )}
//                 </View>
//                 <Text style={styles.feelsLike}>
//                   {feels_like && `Feels Like: ${feels_like}°C`}
//                 </Text>
//                 <Text style={styles.description}>{description}</Text>
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
//   weatherContainer: {
//     alignItems: 'center',
//   },
//   mainTemp: {
//     fontSize: 55,
//     marginTop: 40,
//   },
//   icon: {
//     width: 250,
//     height: 250,
//   },
//   feelsLike: {
//     marginTop: 40,
//     fontSize: 20,
//     color: 'white',
//   },
//   description: {
//     marginTop: 10,
//     fontSize: 45,
//     fontWeight: 'bold',
//     paddingLeft: 20,
//     marginBottom: 4,
//     color: 'white',
//   },
// });

//---------------ADDED SEQUENCE---

import { useState, useRef } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
  Animated,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const API_KEY = "b5c4abb0f15875e71827323bc32aeeee";

export default function App() {
  const [city, setCity] = useState("");
  const [mainTemp, setMainTemp] = useState("");
  const [description, setDescription] = useState("");
  const [feels_like, setFeels_Like] = useState("");
  const [iconID, setIconID] = useState("");
  const [loading, setLoading] = useState(false);

  const scaleValue = useRef(new Animated.Value(0)).current;

  const fetchWeatherData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const weather = await response.json();
      setMainTemp(weather.main.temp);
      setDescription(weather.weather[0].description);
      setFeels_Like(weather.main.feels_like);
      setIconID(weather.weather[0].icon);
      setLoading(false);

      const scaleInAnimation = Animated.timing(scaleValue, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      });
      const scaleOutAnimation = Animated.timing(scaleValue, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      });

      Animated.sequence([scaleInAnimation, scaleOutAnimation]).start();
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={["goldenrod", "royalblue", "midnightblue"]}
        style={styles.gradient}
      >
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>Current Weather</Text>
          <View style={styles.contentContainer}>
            <View style={styles.searchContainer}>
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
            </View>
            {loading ? (
              <ActivityIndicator size="large" color="white" />
            ) : (
              <>
                <View style={styles.weatherContainer}>
                  <Text style={styles.mainTemp}>
                    {mainTemp && `${mainTemp}°C`}
                  </Text>
                  <Animated.View
                    style={[
                      styles.imageContainer,
                      { transform: [{ scale: scaleValue }] },
                    ]}
                  >
                    {iconID && (
                      <Image
                        style={styles.icon}
                        source={{
                          uri: `http://openweathermap.org/img/wn/${iconID}@2x.png`,
                        }}
                      />
                    )}
                  </Animated.View>
                </View>
                <Text style={styles.feelsLike}>
                  {feels_like && `Feels Like: ${feels_like}°C`}
                </Text>
                <Text style={styles.description}>{description}</Text>
              </>
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
  },
  buttonText: {
    color: "white",
  },
  weatherContainer: {
    alignItems: "center",
  },
  mainTemp: {
    fontSize: 55,
    marginTop: 40,
  },
  icon: {
    width: 250,
    height: 250,
  },
  feelsLike: {
    marginTop: 40,
    fontSize: 20,
    color: "white",
  },
  description: {
    marginTop: 10,
    fontSize: 45,
    fontWeight: "bold",
    paddingLeft: 20,
    marginBottom: 4,
    color: "white",
  },
});
