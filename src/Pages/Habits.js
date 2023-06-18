import { useData } from "../Contexts/DataProvider";
import { useNavigate } from "react-router-dom";
import { HabitForm } from "../Components/HabitForm";

export const Habits = () => {
  const { state, dispatch, showDialogBox, setShowDialogBox, loading } =
    useData();

  const navigate = useNavigate();
  const editHabit = (habit) => {
    setShowDialogBox(true);
    dispatch({ type: "EDIT_HABIT", payload: habit });
  };

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <button className="go-to" onClick={() => navigate("/archives")}>
            Go to archives
          </button>
          <div className="habits">
            <button
              className="habit habit-button"
              onClick={() => setShowDialogBox(!showDialogBox)}
            >
              Add New Habit
            </button>
            {state?.habits.map((habit) => (
              <div className="habit" key={habit?.id}>
                <h1 onClick={() => editHabit(habit)}>{habit?.title}</h1>
                <i
                  class="fa-solid fa-pen-to-square edit"
                  onClick={() => editHabit(habit)}
                ></i>
                <i
                  class="fa-solid fa-trash delete"
                  onClick={() =>
                    dispatch({ type: "DELETE_HABIT", payload: habit })
                  }
                ></i>
                <button
                  onClick={() =>
                    dispatch({ type: "ARCHIVE_HABIT", payload: habit })
                  }
                >
                  Archive
                </button>
              </div>
            ))}

            {showDialogBox && <HabitForm />}
          </div>
        </div>
      )}
    </>
  );
};
