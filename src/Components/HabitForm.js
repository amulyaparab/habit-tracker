import { useData } from "../Contexts/DataProvider";

export const HabitForm = () => {
  const { state, dispatch, setShowDialogBox } = useData();
  const areFieldsFull =
    state?.habitsForm?.title?.length === 0 ||
    state?.habitsForm?.description?.length === 0;
  return (
    <>
      {" "}
      <div className="overlay">
        <div className="dialog-box">
          <i
            class="fa-solid fa-square-xmark cross"
            onClick={() => setShowDialogBox(false)}
          ></i>
          <h1>New Habit</h1>
          <label>
            {" "}
            NAME:
            <input
              placeholder="Name of habit"
              value={state?.habitsForm?.title}
              onChange={(event) =>
                dispatch({
                  type: "NAME_OF_HABIT",
                  payload: event.target.value,
                })
              }
            />
          </label>
          <label>
            {" "}
            DESCRIPTION:
            <input
              placeholder="Description"
              value={state?.habitsForm?.description}
              onChange={(event) =>
                dispatch({
                  type: "DESC_OF_HABIT",
                  payload: event.target.value,
                })
              }
            />
          </label>
          <label>
            {" "}
            REPEAT
            <select
              value={state?.habits?.repeat}
              onChange={(event) =>
                dispatch({
                  type: "REPEAT_HABIT",
                  payload: event.target.value,
                })
              }
            >
              {[
                "Daily",
                "Three times a week",
                "Twice a week",
                "Once a week",
              ].map((repeat) => (
                <option value={repeat}>{repeat}</option>
              ))}
            </select>
          </label>
          <label>
            GOAL
            <select
              value={state?.habitsForm?.goal}
              onChange={(event) =>
                dispatch({
                  type: "DAILY_GOAL_OF_HABIT",
                  payload: event.target.value,
                })
              }
            >
              {[
                "1 time daily",
                "2 times daily",
                "3 times daily",
                "As many times as possible",
              ].map((goal) => (
                <option>{goal}</option>
              ))}
            </select>
          </label>
          <label>
            TIME OF DAY
            <select
              value={state?.habitsForm?.time}
              onChange={(event) =>
                dispatch({
                  type: "TIME_OF_HABIT",
                  payload: event.target.value,
                })
              }
            >
              {["Any time", "Morning", "Evening", "Night"].map((time) => (
                <option>{time}</option>
              ))}
            </select>
          </label>
          <label>
            START DATE
            <select
              value={state?.habitsForm?.startDate}
              onChange={(event) =>
                dispatch({
                  type: "START_DATE_OF_HABIT",
                  payload: event.target.value,
                })
              }
            >
              {["Today", "Tomorrow", "Weekend"].map((start) => (
                <option>{start}</option>
              ))}
            </select>
          </label>
          <button
            onClick={() => {
              areFieldsFull
                ? alert("Please fill name and description.")
                : dispatch({ type: "SUBMIT_FORM" });
            }}
            // disabled={areFieldsFull}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};
