import { createContext, useReducer } from "react";

// 1️ Create the context
export const CounterContext = createContext();

// 2️ Define the provider component
export default function CounterContextProvider({ children }) {

  // 3️ Reducer function (pure function)
  function reducer(state, action) {
    switch (action.type) {
      case "INCREMENT":
        return { count: state.count + 1 };
      case "DECREMENT":
        return { count: state.count > 0 ? state.count - 1 : 0 };
      case "RESET":
        return { count: 0 };
      default:
        return state; // always return default state
    }
  }

  // 4️ useReducer hook
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  // 5️ Provide state + dispatch to all children
  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
}
