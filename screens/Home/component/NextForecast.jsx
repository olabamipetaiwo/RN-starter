import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { CalendarDaysIcon } from "react-native-heroicons/solid";
import { theme } from "@app/theme";
import { weatherImages } from "@app/constants";

const NextForecast = ({ weather }) => {
  return (
    <View className="mb-2 space-y-3">
      <View className="flex-row items-center mx-5 space-x-2">
        <CalendarDaysIcon size="22" color="white" />
        <Text className="text-white text-base">Daily forecast</Text>
      </View>
      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
      >
        {weather?.forecast?.forecastday?.map((item, index) => {
          const date = new Date(item.date);
          const options = { weekday: "long" };
          let dayName = date.toLocaleDateString("en-US", options);
          dayName = dayName.split(",")[0];

          return (
            <View
              key={index}
              className="flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4"
              style={{ backgroundColor: theme.bgWhite(0.15) }}
            >
              <Image
                source={weatherImages[item?.day?.condition?.text || "other"]}
                className="w-11 h-11"
              />
              <Text className="text-white">{dayName}</Text>
              <Text className="text-white text-xl font-semibold">
                {item?.day?.avgtemp_c}&#176;
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default NextForecast;
