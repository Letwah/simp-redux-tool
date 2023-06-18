import Name from "./Name";
import Quote from "./Quote";
import Image from "./Image";
import Delete from "./Delete";
import Direction from "./Direction";
// import { useDispatch } from "react-redux";

const Character = (props) => {
  const { character, quote, image, id, characterDirection } = props.item;
  const { likeToggle, onDirection } = props;

  // const dispatch = useDispatch();

  // console.log(direction);

  if (characterDirection === "Right") {
    return (
      //this is like each "card"
      <div className="characterContainer">
        <Name character={character} id={id} likeToggle={likeToggle} />
        <Quote quote={quote} />
        <Image image={image} character={character} likeToggle={likeToggle} />
        <Delete id={id} />
        <Direction onDirection={onDirection} id={id} />
      </div>
    );
  }
  return (
    //this is like each "card" character direction
    <div className="characterContainer">
      <Name character={character} id={id} likeToggle={likeToggle} />
      <Image image={image} character={character} likeToggle={likeToggle} />
      <Quote quote={quote} />
      <Delete id={id} />
      <Direction onDirection={onDirection} id={id} />
    </div>
  );
};
export default Character;
