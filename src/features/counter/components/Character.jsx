import Name from "./Name";
import Quote from "./Quote";
import Image from "./Image";
import Delete from "..counterSlice";
// import Direction from "./Direction";
import { useDispatch } from "react-redux";

const Character = (props) => {
  const { character, quote, image, id, characterDirection, liked } = props.item;
  // const { onLikeToggle, onDirection } = props;

  const [deleteItem] = useDispatch();

  // console.log(direction);

  if (characterDirection === "Right") {
    return (
      //this is like each "card"
      <div className="characterContainer">
        <Name
          character={character}
          // onLikeToggle={onLikeToggle}
          id={id}
          liked={liked}
        />
        <Quote quote={quote} />
        <Image image={image} character={character} liked={liked} />
        <Delete deleteItem={deleteItem} id={id} />
        {/* <Direction onDirection={onDirection} id={id} /> */}
      </div>
    );
  }
  return (
    //this is like each "card" character direction
    <div className="characterContainer">
      <Name
        character={character}
        // onLikeToggle={onLikeToggle}
        id={id}
        liked={liked}
      />
      <Image image={image} character={character} liked={liked} />
      <Quote quote={quote} />
      <Delete deleteItem={deleteItem} id={id} />
      {/* <Direction onDirection={onDirection} id={id} /> */}
    </div>
  );
};
export default Character;
