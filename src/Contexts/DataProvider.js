import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { fakeFetch } from "../Database/habits";
import { v4 as uuid } from "uuid";
const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [showDialogBox, setShowDialogBox] = useState(false);
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
          habitsForm: {
            ...state.habitsForm,
            title: action.payload,
          },
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
        const isHabitPresent = state.habits.find(
          (item) => item.id === state.habitsForm.id
        );

        setShowDialogBox(false);
        return isHabitPresent
          ? {
              ...state,
              habits: state.habits.map((habit) =>
                habit.id === state.habitsForm.id ? state.habitsForm : habit
              ),
              habitsForm: {
                id: uuid(),
                title: "",
                description: "",
                repeat: "",
                goal: "",
                time: "",
                startDate: "",
              },
            }
          : {
              ...state,
              habits: [...state.habits, state.habitsForm],
              habitsForm: {
                id: uuid(),
                title: "",
                description: "",
                repeat: "",
                goal: "",
                time: "",
                startDate: "",
              },
            };

      case "DELETE_HABIT":
        return {
          ...state,
          habits: state.habits.filter(
            (habit) => habit.id !== action.payload.id
          ),
        };
      case "ARCHIVE_HABIT":
        return {
          ...state,
          habits: state.habits.filter(
            (habit) => habit.id !== action.payload.id
          ),
          archives: [...state.archives, action.payload],
        };
      case "UNARCHIVE_HABIT":
        return {
          ...state,
          archives: state.archives.filter(
            (habit) => habit.id !== action.payload.id
          ),
          habits: [...state.habits, action.payload],
        };
      case "EDIT_HABIT":
        return {
          ...state,
          habitsForm: action.payload,
        };
      default:
        return state;
    }
  };
  const initialState = {
    habits: [],
    habitsForm: {
      id: uuid(),
      title: "",
      description: "",
      repeat: "",
      goal: "",
      time: "",
      startDate: "",
    },
    archives: [],
  };
  useEffect(() => {
    fetchHabits();
  }, []);
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DataContext.Provider
      value={{ state, dispatch, showDialogBox, setShowDialogBox }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
