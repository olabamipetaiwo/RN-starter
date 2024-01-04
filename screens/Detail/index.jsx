import { View, Text, Button } from "react-native";
import React from "react";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";
import { theme } from "@app/theme";


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

      <Text
            className="text-red"
            style={{
              ...theme.nunito,
            }}
          >
            Test Tailwind thme font
          </Text>
          <Text className="text-red font-nunito font-bold">
            Test Tailwind config font
          </Text>

          <Text className="text-red font-nunito-bold">
            Test Tailwind config bold font
          </Text>

          <Text className="text-red">Test Tailwind normal font</Text>
          <Text className="text-blue">Test Tailwind 2</Text>
          <Text className="text-pink mb-4">Test Tailwind 55</Text>

          <Text className="text-app-caption">Test Tailwind 3</Text>
          <Text className="text-app-accent">Test Tailwind 3</Text>
          <Text className="text-purple-100">Test Tailwind 3</Text>
          <Text className="text-violet">Test Tailwind 3</Text>
    </View>
  );
};

export default DetailsScreen;



{/* <SafeAreaProvider style={styles.container}> */}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });
