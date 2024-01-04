import AppNavigation from "./navigation/appNavigation";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    Nunito: require("./assets/fonts/nunito/Nunito-Regular.ttf"),
    "Nunito-Bold": require("./assets/fonts/nunito/Nunito-Bold.ttf"),
  });

  if (!fontsLoaded) return null;

  return <AppNavigation />;
}
