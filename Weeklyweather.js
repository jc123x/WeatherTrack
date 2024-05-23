import {
  Text,
  StyleSheet,
  View,
  Modal,
  TouchableHighlight,
  SectionList,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useState, useEffect } from "react";
import { fetchWeatherData } from "./Redux/Action/index";
import { connect } from "react-redux";
import { LinearGradient } from "expo-linear-gradient";

function Weeklyweather({ fetchWeatherData, weatherData }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedWeather, setSelectedWeather] = useState(null);
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [sections, setSections] = useState([]);

  useEffect(() => {
    if (city == "") {
      return () => {
        fetchWeatherData([]);
      };
    }
  }, [city]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=1b91abf2a88670b903bf8f482c71b85c`
      );
      const data = await response.json();
      fetchWeatherData(data.list);
      setCity("");
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  console.log(weatherData);

  const groupDataByDay = ({ data }) => {
    if (!data || !Array.isArray(data) || data.length === 0) {
      return [];
    }

    const groupedData = {};
    data.forEach((item) => {
      const day = item.dt_txt?.split(" ")[0];
      if (!day) {
        return;
      }

      if (!groupedData[day]) {
        groupedData[day] = [];
      }
      groupedData[day].push(item);
    });

    return Object.entries(groupedData).map(([title, data]) => ({
      title,
      data,
    }));
  };

  useEffect(() => {
    setSections(groupDataByDay({ data: weatherData }));
  }, [weatherData]);

  const renderItem = ({ item }) => (
    <TouchableHighlight
      onPress={() => handleWeatherPress(item)}
      underlayColor="#DDF2FD"
    >
      <View style={styles.item}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>{item.dt_txt}</Text>
        <Text style={{ fontSize: 16 }}>
          Temperature: {Math.round(item.main.temp - 273.15)}
        </Text>
        <Text style={{ fontSize: 16 }}>
          Feels Like: {Math.round(item.main.feels_like - 273.15)}{" "}
        </Text>
      </View>
    </TouchableHighlight>
  );

  const handleWeatherPress = (weather) => {
    setSelectedWeather(weather);
    setModalVisible(true);
  };

  const renderContent = () => {
    if (loading) {
      return <ActivityIndicator size="large" color="white" />;
    }

    if (!weatherData || weatherData.length === 0) {
      return <Text>No weather data available</Text>;
    }

    return (
      <View style={{ alignItems: "flex-end" }}>
        <SectionList
          sections={sections}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.sectionHeader}>{title}</Text>
          )}
        />
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
              marginTop: 22,
              flex: 1,
              backgroundColor: "rgba(221, 242, 253,0.8)",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View style={styles.modalView}>
              <Text style={styles.modalHeader}>Weather Details</Text>
              {selectedWeather && (
                <>
                  <Text style={{ fontSize: 16 }}>
                    Lowest Temperature:{" "}
                    {Math.round(selectedWeather.main.temp_min - 273.15)}
                  </Text>
                  <Text style={{ fontSize: 16 }}>
                    Highest Temperature:{" "}
                    {Math.round(selectedWeather.main.temp_max - 273.15)}
                  </Text>
                  <Text style={{ fontSize: 16 }}>
                    Humidity: {selectedWeather.main.humidity}
                  </Text>
                  <Text style={{ fontSize: 16 }}>
                    Weather: {selectedWeather.weather[0].main}
                  </Text>
                  <Text style={{ fontSize: 16 }}>
                    Wind Speed: {selectedWeather.wind.speed}
                  </Text>
                </>
              )}
              <TouchableHighlight
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
                underlayColor="white"
              >
                <Text style={styles.closeButton}>Close </Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={["goldenrod", "royalblue", "midnightblue"]}
        style={styles.gradient}
      >
        <View style={styles.headingContainer}>
          <Text style={styles.heading}> Weekly Weather</Text>
          <View style={styles.contentContainer}>
            <View style={styles.searchContainer}>
              <TextInput
                style={styles.input}
                placeholder="Enter city"
                placeholderTextColor="white"
                value={city}
                onChangeText={setCity}
              />
              <TouchableOpacity style={styles.button} onPress={fetchData}>
                <Text style={styles.buttonText}>Search</Text>
              </TouchableOpacity>
            </View>
            <View>{renderContent()}</View>
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
  item: {
    padding: 16,
    margin: 5,
    textAlign: "left",
    borderBottomWidth: 1,
  },
  gradient: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  sectionHeader: {
    fontWeight: "bolder",
    fontSize: 20,
    padding: 16,
    backgroundColor: "#67729D",
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
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    padding: 1,
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
  headingContainer: {
    flex: 1,
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
    margin: 50,
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
});

const mapStateToProps = (state) => ({
  weatherData: state.weatherReducer.weatherData,
});

const mapDispatchToProps = { fetchWeatherData };
export default connect(mapStateToProps, mapDispatchToProps)(Weeklyweather);
