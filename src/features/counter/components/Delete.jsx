import { useDispatch } from "react-redux";
import { deleteItem } from "../counterSlice";

const Delete = (props) => {
  const { onDelete, id } = props;

  const dispatch = useDispatch;
  return (
    <div>
      <button onClick={() => dispatch(deleteItem(id))} className="bin">
        Delete
      </button>
    </div>
  );
};

export default Delete;
//test push
