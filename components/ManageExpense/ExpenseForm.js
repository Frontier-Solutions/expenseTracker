import { StyleSheet, Text, View } from "react-native";

import Input from "./Input";
import Button from "../UI/Button";
import { GlobalStyles } from "../../constants/styles";
import { useState } from "react";

function ExpenseForm({ isEditing, onCancel, onSubmit }) {
  const [inputValues, setInputValues] = useState({
    amount: "",
    date: "",
    description: "",
  });

  function inputChangedHandler(inputKey, enteredValue) {
    setInputValues((currentInputValues) => {
      return { ...currentInputValues, [inputKey]: enteredValue };
    });
  }

  function submitHandler() {}

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputsRow}>
        <Input
          label="Amount"
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: inputChangedHandler.bind(this, "amount"),
            value: inputValues.amount,
          }}
          style={styles.rowInput}
        />
        <Input
          label="Date"
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: inputChangedHandler.bind(this, "date"),
            value: inputValues.date,
          }}
          style={styles.rowInput}
        />
      </View>

      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          autoCorrect: false, // default is true, may want to turn off
          onChangeText: inputChangedHandler.bind(this, "description"),
          value: inputValues.description,
        }}
      />
      <View style={styles.buttons}>
        <Button style={styles.button} mode="flat" onPress={onCancel}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={submitHandler}>
          {isEditing ? "Update" : "Add"}
        </Button>
      </View>
    </View>
  );
}

export default ExpenseForm;

const styles = StyleSheet.create({
  form: {
    marginTop: 80,
  },
  title: {
    fontSize: 18,
    fontFamily: "Inter-Bold",
    color: "white",
    marginBottom: 12,
    textAlign: "center",
  },
  inputsRow: { flexDirection: "row", justifyContent: "space-between" },
  rowInput: { flex: 1 },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});
