import { useData } from "../Contexts/DataProvider";

export const Habits = () => {
  const { state, dispatch } = useData();
  console.log(state);
  return (
    <div className="habits">
      <button className="habit habit-button">Add New Habit</button>
      {state?.habits.map((habit) => (
        <p className="habit">{habit?.title}</p>
      ))}
    </div>
  );
};
