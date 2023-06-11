import { useDispatch } from "react-redux";
import { deleteItem } from "../counterSlice";

const Delete = () => {
  const [deleteItem, id] = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(deleteItem(id))} className="bin">
        Delete
      </button>
    </div>
  );
};

export default Delete;
