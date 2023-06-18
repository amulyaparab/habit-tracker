import { useState } from "react";
import { useData } from "../Contexts/DataProvider";

export const Habits = () => {
  const { state, dispatch } = useData();

  const [showDialogBox, setShowDialogBox] = useState(false);
  return (
    <div className="habits">
      <button
        className="habit habit-button"
        onClick={() => setShowDialogBox(!showDialogBox)}
      >
        Add New Habit
      </button>
      {state?.habits.map((habit) => (
        <p className="habit">{habit?.title}</p>
      ))}

      {showDialogBox && (
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
            <button onClick={() => dispatch({ type: "SUBMIT_FORM" })}>
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
