import { useDispatch } from "react-redux";
import { deleteItem } from "../counterSlice";

const Delete = (props) => {
  const dispatch = useDispatch();
  const { id } = props;
  return (
    <div>
      <button onClick={() => dispatch(deleteItem(id))} className="bin">
        Delete
      </button>
    </div>
  );
};

export default Delete;
