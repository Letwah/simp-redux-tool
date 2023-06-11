import { useDispatch } from "react-redux";
import { likeToggle } from "../counterSlice";

const Name = (props) => {
  const dispatch = useDispatch();
  const { liked, character, id } = props;
  // console.log(props);
  return (
    <div>
      <h2>{character}</h2>
      <button className="liked" onClick={() => dispatch(likeToggle(id))}>
        {liked ? "Liked" : "Not liked"}
      </button>
    </div>
  );
};

export default Name;
