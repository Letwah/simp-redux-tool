import { useState } from "react";
import { validate } from "../validation";
import { useDispatch, useSelector } from "react-redux";
import {
  setLikedDropdownOption,
  setSearch,
  selectSearch,
} from "../counterSlice";

const Search = () => {
  const search = useSelector(selectSearch);
  const [errors, setErrors] = useState(null); //null mean no errors

  const dispatch = useDispatch();

  const onInput = async (e) => {
    dispatch(setSearch(e.target.value));
    // onCharacterInput(e.target.value);
    //validate input - can write like this

    // const res = await validate(characterInput);
    // setErrors(res);

    //OR

    setErrors(
      await validate({ [e.target.id]: e.target.value }, "searchSchema")
    );
  };

  return (
    <>
      <input
        value={search}
        id="search"
        onInput={onInput}
        type="text"
        placeholder="start typing ..."
      />
      <p>{errors && errors.characterId}</p>

      <select
        onChange={(e) => dispatch(setLikedDropdownOption(e.target.value))}
      >
        <option value="">Reset</option>
        <option value="liked">Liked</option>
        <option value="notLiked">Not Liked</option>
      </select>
    </>
  );
};
export default Search;
