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
      {state?.archives?.length === 0 && <h3>No Archives Found.</h3>}
      <div className="habits">
        {state?.archives?.map((habit) => (
          <div className="habit">
            <h1>{habit?.title}</h1>
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
