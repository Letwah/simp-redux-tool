import Character from "./Character";

const Simpsons = (props) => {
  const { simpsons, onDelete, onLikeDislikeInput, onDirection } = props;
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
          />
        );
      })}
    </>
  );
};

export default Simpsons;
