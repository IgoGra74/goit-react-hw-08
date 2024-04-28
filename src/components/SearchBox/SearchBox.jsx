import { useSelector, useDispatch } from "react-redux";
import css from "./SearchBox.module.css";
import { selectNameFilter } from "../../redux/filters/selectors";
import { changeFilter } from "../../redux/filters/slice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectNameFilter);

  const onFilterChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };
  const onChange = (event) => onFilterChange(event);

  return (
    <div className={css.search}>
      <p className={css.title}>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={name}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBox;
