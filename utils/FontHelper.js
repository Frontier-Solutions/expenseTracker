import { useFonts } from "expo-font";

const loadFonts = async () => {
  try {
    await useFonts({
      "Inter-Black": require("../assets/fonts/Inter-Black.otf"),
      "Inter-SemiBold": require("../assets/fonts/Inter-SemiBold.otf"),
      "Inter-Light": require("../assets/fonts/Inter-Light.otf"),
      "Inter-Bold": require("../assets/fonts/Inter-Bold.otf"),
    });
  } catch (error) {
    console.error("Error loading fonts:", error);
  }
};

export default loadFonts;
