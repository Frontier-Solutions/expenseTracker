import { createContext, useReducer } from "react";

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
    date: new Date("2023-12-06"),
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
    date: new Date("2023-12-09"),
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

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case "UPDATE":
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );

      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data }; // spreading out values where their index already exists will result in an update of those values

      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;

      return updatedExpenses;
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData });
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  }

  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    updateExpense: updateExpense,
    deleteExpense: deleteExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpensesContextProvider;
