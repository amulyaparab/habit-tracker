import { createContext, useContext, useEffect, useReducer } from "react";
import { fakeFetch } from "../Database/habits";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const fetchHabits = async () => {
    try {
      const {
        data: { habits },
      } = await fakeFetch("https://example.com/api/habits");

      dispatch({ type: "INITIAL_HABITS", payload: habits });
    } catch (err) {
      console.log(err);
    }
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "INITIAL_HABITS":
        return { ...state, habits: action.payload };
      case "NAME_OF_HABIT":
        return {
          ...state,
          habitsForm: { ...state.habitsForm, title: action.payload },
        };
      case "DESC_OF_HABIT":
        return {
          ...state,
          habitsForm: { ...state.habitsForm, description: action.payload },
        };
      case "REPEAT_HABIT":
        return {
          ...state,
          habitsForm: { ...state.habitsForm, repeat: action.payload },
        };
      case "DAILY_GOAL_OF_HABIT":
        return {
          ...state,
          habitsForm: { ...state.habitsForm, goal: action.payload },
        };
      case "TIME_OF_HABIT":
        return {
          ...state,
          habitsForm: { ...state.habitsForm, time: action.payload },
        };
      case "START_DATE_OF_HABIT":
        return {
          ...state,
          habitsForm: { ...state.habitsForm, startDate: action.payload },
        };
      case "SUBMIT_FORM":
        return {
          ...state,
          habits: [...state.habits, state.habitsForm],
        };
      default:
        return state;
    }
  };
  const initialState = {
    habits: [],
    habitsForm: {
      title: "",
      description: "",
      repeat: "",
      goal: "",
      time: "",
      startDate: "",
    },
  };
  useEffect(() => {
    fetchHabits();
  }, []);
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
