import { useSelector, useDispatch } from "react-redux";
import css from "./SearchBox.module.css";
import { selectNameFilter } from "../../redux/filters/selectors";
import { changeNameFilter } from "../../redux/filters/slice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectNameFilter);

  const onFilterChange = (event) => {
    const input = event.target.value;

    dispatch(changeNameFilter(input));
  };

  const onChange = (event) => onFilterChange(event);

  return (
    <div className={css.search}>
      <p className={css.title}>Find contacts by name or phone number</p>
      <input
        className={css.input}
        type="text"
        placeholder="Search by name or phone number"
        value={name}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBox;
