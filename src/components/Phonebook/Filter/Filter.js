import '../Filter/filter.css';
import { getFilterValue } from '../../../redux/selector';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../../redux/filterSlice';

export default function Filter() {
  const filterValue = useSelector(getFilterValue);

  const dispatch = useDispatch();
  return (
    <>
      <p className="text">Find contacts by name</p>
      <input
        onChange={e => {
          dispatch(changeFilter(e.target.value));
        }}
        className="inputFilter"
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$
        "
        required
        value={filterValue}
      />
    </>
  );
}
