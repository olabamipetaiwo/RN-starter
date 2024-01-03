import { View, Text, Button } from "react-native";
import React from "react";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";

const DetailsScreen = () => {
  const width = useSharedValue(100);

  const handlePress = () => {
    width.value = withSpring(width.value + 50);
  };

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Text>DetailsScreen</Text>
      <Animated.View
        style={{
          // width,
          widtgh: 50,
          height: 100,
          backgroundColor: "violet",
        }}
      />
      <Button onPress={handlePress} title="Click me" />
    </View>
  );
};

export default DetailsScreen;
