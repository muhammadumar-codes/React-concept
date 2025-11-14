import { createContext, useReducer } from 'react'

// 1️ Create the context
export const CounterContext = createContext()

// Type for switch cases:-
export const type = {
  increment: 'INCREMENT',
  decrement: 'DECREMENT',
  reset: 'RESET',
  custom: 'CUSTOM',
}

// 2️ Define the provider component

export default function CounterContextProvider({ children }) {
  // 3️ Reducer function (pure function)
  function reducer(state, action) {
    switch (action.type) {
      case type.increment:
        
        return { ...action.names, count: state.count + 1 }
      case type.decrement:
        console.log(`The  names is ${action.names}`)
        return { ...action.names, count: state.count > 0 ? state.count - 1 : 0 }
      case type.reset:
        return { count: 0 }
      case type.custom:
        return { count: state.count + action.payload }
      default:
        return state // always return default state
    }
  }

  // 4️ useReducer hook
  const [state, dispatch] = useReducer(reducer, { count: 0, payload: 30 })

  // 5️ Provide state + dispatch to all children
  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  )
}
