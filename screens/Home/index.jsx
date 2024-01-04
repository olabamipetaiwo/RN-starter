import { View, Image, Text, Button, StyleSheet } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import Loader from "./component/Loader";

import { COLORS } from "@app/theme";

const HomeScreen = () => {
  const [loading] = useState(false);
  const navigation = useNavigation();

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
          <Text style={styles.textWhite} className="text-white">
            This is Home screen
          </Text>

          <Button
            title="Go to Details"
            onPress={() => navigation.navigate("Details")}
          />
        </SafeAreaView>
      )}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  textWhite: {
    color: COLORS.primary,
    fontSize: 20,
  },
});
