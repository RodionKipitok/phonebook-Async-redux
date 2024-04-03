import { PhonebookForm } from './Phonebook/Form/Form';
import Filter from './Phonebook/Filter/Filter';
import Contacts from './Phonebook/Contact/Contacts';
import { useDispatch, useSelector } from 'react-redux';
import { getIsLoading, getError } from '../redux/selector';

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  return (
    <>
      <PhonebookForm />
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      <Contacts />
    </>
  );
}

export default App;
