import '../Filter/filter.css';
import { getFilterValue } from '../../../redux/selector';
import { useDispatch, useSelector } from 'react-redux';

export default function Filter() {
  const filterValue = useSelector(getFilterValue);

  const dispatch = useDispatch();
  return (
    <>
      <p className="text">Find contacts by name</p>
      <input
        onChange={e => {
          console.log(e.target.value);
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
