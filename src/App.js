import s from './App.module.css';

import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import { ToastContainer } from 'react-toastify';

export default function Phonebook() {
  return (
    <div className={s.app}>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={s.title}>Contacts</h2>
      <Filter />
      <ContactList />
      <ToastContainer
        autoClose={3000}
        position="top-center"
        theme="colored"
      />
    </div>
  );
}
