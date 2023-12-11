import { View, FlatList, Text, StyleSheet } from "react-native";
import ExpenseItem from "./ExpenseItem";

function renderExpenseItem(itemData) {
  return <ExpenseItem {...itemData.item} />;
}

function ExpensesList({ expenses }) {
  if (expenses.length === 0) {
    return (
      <View style={styles.noExpensesContainer}>
        <Text style={styles.noExpensesText}>No expenses</Text>
      </View>
    );
  } else {
    return (
      <View>
        <FlatList
          data={expenses}
          renderItem={renderExpenseItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  }
}

export default ExpensesList;

const styles = StyleSheet.create({
  noExpensesContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  noExpensesText: {
    fontSize: 18,
    fontFamily: "Inter-Bold",
    color: "white",
    opacity: 0.8,
  },
});
