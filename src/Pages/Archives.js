import { useNavigate } from "react-router-dom";
import { useData } from "../Contexts/DataProvider";

export const Archives = () => {
  const { state, dispatch } = useData();
  const navigate = useNavigate();
  return (
    <>
      <button className="go-to" onClick={() => navigate("/")}>
        Go to habits
      </button>
      <h1>Archives</h1>
      <div className="habits">
        {state?.archives?.map((habit) => (
          <div className="habit">
            <p>{habit?.title}</p>
            <button
              onClick={() =>
                dispatch({ type: "UNARCHIVE_HABIT", payload: habit })
              }
            >
              Unarchive
            </button>
          </div>
        ))}
      </div>
    </>
  );
};
