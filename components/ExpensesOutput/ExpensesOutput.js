import { View, StyleSheet } from "react-native";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "shoes",
    amount: 39.99,
    date: new Date("2023-02-15"),
  },
  {
    id: "e2",
    description: "jacket",
    amount: 79.95,
    date: new Date("2023-04-23"),
  },
  {
    id: "e3",
    description: "backpack",
    amount: 49.99,
    date: new Date("2023-06-08"),
  },
  {
    id: "e4",
    description: "hat",
    amount: 19.99,
    date: new Date("2023-08-12"),
  },
  {
    id: "e5",
    description: "gloves",
    amount: 14.95,
    date: new Date("2023-09-30"),
  },
  {
    id: "e6",
    description: "t-shirt",
    amount: 24.99,
    date: new Date("2023-10-15"),
  },
  {
    id: "e7",
    description: "jeans",
    amount: 59.99,
    date: new Date("2023-12-02"),
  },
  {
    id: "e8",
    description: "umbrella",
    amount: 12.99,
    date: new Date("2023-01-21"),
  },
  {
    id: "e9",
    description: "sunglasses",
    amount: 29.99,
    date: new Date("2023-03-18"),
  },
  {
    id: "e10",
    description: "scarf",
    amount: 18.5,
    date: new Date("2023-05-07"),
  },
  {
    id: "e11",
    description: "watch",
    amount: 89.99,
    date: new Date("2023-07-09"),
  },
  {
    id: "e12",
    description: "socks",
    amount: 9.99,
    date: new Date("2023-09-14"),
  },
  {
    id: "e13",
    description: "hoodie",
    amount: 49.99,
    date: new Date("2023-10-28"),
  },
  {
    id: "e14",
    description: "wallet",
    amount: 29.95,
    date: new Date("2023-02-03"),
  },
  {
    id: "e15",
    description: "belt",
    amount: 15.99,
    date: new Date("2023-04-17"),
  },
  {
    id: "e16",
    description: "water bottle",
    amount: 8.99,
    date: new Date("2023-06-22"),
  },
  {
    id: "e17",
    description: "earphones",
    amount: 34.99,
    date: new Date("2023-08-05"),
  },
  {
    id: "e18",
    description: "notebook",
    amount: 7.5,
    date: new Date("2023-09-19"),
  },
  {
    id: "e19",
    description: "candle",
    amount: 12.49,
    date: new Date("2023-11-11"),
  },
  {
    id: "e20",
    description: "mug",
    amount: 9.99,
    date: new Date("2023-12-30"),
  },
];

SplashScreen.preventAutoHideAsync();

function ExpensesOutput({ expenses, expensesPeriod }) {
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

  return (
    <View style={styles.container} onLayout={onLayoutLoaded}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
