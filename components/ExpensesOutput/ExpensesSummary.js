import { View, Text, StyleSheet } from "react-native";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import { GlobalStyles } from "../../constants/styles";

SplashScreen.preventAutoHideAsync();

function ExpensesSummary({ expenses, periodName }) {
  const [fontsLoaded] = useFonts({
    "Inter-Black": require("../../assets/fonts/Inter-Black.otf"),
    "Inter-SemiBold": require("../../assets/fonts/Inter-SemiBold.otf"),
    "Inter-Light": require("../../assets/fonts/Inter-Light.otf"),
    "Inter-Bold": require("../../assets/fonts/Inter-Bold.otf"),
  });

  const onLayoutLoaded = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  // toFixed(2) = limited to two decimal places

  return (
    <View style={styles.container} onLayout={onLayoutLoaded}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>${expensesSum.toFixed(2)}</Text>
    </View>
  );
}

export default ExpensesSummary;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary50,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  period: {
    fontSize: 14,
    color: GlobalStyles.colors.primary400,
    fontFamily: "Inter-SemiBold",
  },
  sum: {
    fontSize: 16,
    fontFamily: "Inter-Bold",
  },
});
