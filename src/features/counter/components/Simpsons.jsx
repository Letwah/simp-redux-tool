import Character from "./Character";

const Simpsons = (props) => {
  const { simpsons, onDelete, onLikeDislikeInput, onDirection, direction } =
    props;
  return (
    <>
      {simpsons.map((item) => {
        return (
          <Character
            item={item}
            key={item.id}
            onDelete={onDelete}
            onLikeDislikeInput={onLikeDislikeInput}
            onDirection={onDirection}
            direction={direction}
          />
        );
      })}
    </>
  );
};

export default Simpsons;
