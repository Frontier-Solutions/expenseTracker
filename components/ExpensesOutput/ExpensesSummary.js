import { View, Text, StyleSheet } from "react-native";
import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import loadFonts from "../../utils/FontHelper";

import { GlobalStyles } from "../../constants/styles";

function ExpensesSummary({ expenses, periodName }) {
  const onLayoutLoaded = useCallback(async () => {
    if (loadFonts) {
      await SplashScreen.hideAsync();
    }
  }, [loadFonts]);

  if (!loadFonts) {
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
