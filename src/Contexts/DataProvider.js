import { createContext, useContext, useEffect, useReducer } from "react";
import { fakeFetch } from "../Database/habits";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const fetchHabits = async () => {
    try {
      const {
        data: { habits },
      } = await fakeFetch("https://example.com/api/habits");
      console.log(habits, "jfdhdskj");
      dispatch({ type: "INITIAL_HABITS", payload: habits });
    } catch (err) {
      console.log(err);
    }
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "INITIAL_HABITS":
        return { ...state, habits: action.payload };
      default:
        return state;
    }
  };
  const initialState = {
    habits: [],
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
