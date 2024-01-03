import { View, Image, Text, Button } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { debounce } from "lodash";
import { fetchLocations, fetchWeatherForecast } from "@app/api/weather";
import { StatusBar } from "expo-status-bar";
import { getData, storeData } from "@app/utils/asyncStorage";

import { useNavigation } from "@react-navigation/native";
import Loader from "./component/Loader";
import Search from "./component/Search";
import Forecast from "./component/Forecast";
import NextForecast from "./component/NextForecast";

const HomeScreen = () => {
  const [showSearch, toggleSearch] = useState(false);
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState({});

  const navigation = useNavigation();

  const handleSearch = (search) => {
    // console.log('value: ',search);
    if (search && search.length > 2)
      fetchLocations({ cityName: search }).then((data) => {
        // console.log('got locations: ',data);
        setLocations(data);
      });
  };

  const handleLocation = (loc) => {
    setLoading(true);
    toggleSearch(false);
    setLocations([]);
    fetchWeatherForecast({
      cityName: loc.name,
      days: "7",
    }).then((data) => {
      setLoading(false);
      setWeather(data);
      storeData("city", loc.name);
    });
  };

  useEffect(() => {
    fetchMyWeatherData();
  }, []);

  const fetchMyWeatherData = async () => {
    let myCity = await getData("city");
    let cityName = "Islamabad";
    if (myCity) {
      cityName = myCity;
    }
    fetchWeatherForecast({
      cityName,
      days: "7",
    }).then((data) => {
      // console.log('got data: ',data.forecast.forecastday);
      setWeather(data);
      setLoading(false);
    });
  };

  const handleTextDebounce = useCallback(debounce(handleSearch, 1200), []);

  const { location, current } = weather;

  return (
    <View className="flex-1 relative">
      <StatusBar style="light" />
      <Image
        blurRadius={70}
        source={require("../../assets/images/bg.png")}
        className="absolute w-full h-full"
      />

      {loading ? (
        <Loader />
      ) : (
        <SafeAreaView className="flex flex-1">
          <Search
            showSearch={showSearch}
            locations={locations}
            handleLocation={handleLocation}
            handleTextDebounce={handleTextDebounce}
            toggleSearch={toggleSearch}
          />
          {/* <Forecast weather={weather} location={location} current={current} /> */}
          {/* <NextForecast weather={weather} /> */}

          <Button
            title="Go to Details"
            onPress={() => navigation.navigate('Details')}
          />
          <Text>Test Tailwind</Text>
          <Text>Test Tailwind 2</Text>
          <Text>Test Tailwind 3</Text>
        </SafeAreaView>
      )}
    </View>
  );
};

export default HomeScreen;
