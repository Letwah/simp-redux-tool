import { useDispatch } from "react-redux";
import { itemDirection } from "../counterSlice";

const Direction = (props) => {
  const dispatch = useDispatch();
  const { id } = props;
  return (
    <>
      <div>
        <label className="directionToggle">
          <p>Switch Character Direction</p>

          <input type="checkbox" onClick={() => dispatch(itemDirection(id))} />
          <span className="slider round"></span>
        </label>

        {/* {onDirection ? setDirectionToggle : } */}
      </div>
    </>
  );
};

export default Direction;
