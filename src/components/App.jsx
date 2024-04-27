import { PhonebookForm } from './Phonebook/Form/Form';
import Filter from './Phonebook/Filter/Filter';
import Contacts from './Phonebook/Contact/Contacts';
import { fetchContacts } from '../redux/operations';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


function App() {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <PhonebookForm />
      <Filter />
      <Contacts />
    </>
  );
}

export default App;
