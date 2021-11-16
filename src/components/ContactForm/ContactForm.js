// import PropTypes from 'prop-types';
import { useState } from 'react';
import {
  // connect,
  useSelector,
  useDispatch,
} from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Loader from '../Loader';

import { addContact } from '../../redux/contacts/contacts-operations';
import {
  getAllItems,
  getLoading,
} from '../../redux/contacts/contacts-selectors';

import s from './ContactForm.module.css';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const allContacts = useSelector(getAllItems);
  const isLoading = useSelector(getLoading);
  const dispatch = useDispatch();

  // запись имени и номера телефона в стейт
  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  // добавлено для dispatch
  const onSubmit = (name, number) => {
    const duplicateContact = allContacts.find(
      contact =>
        contact.name.toLowerCase() === name.toLowerCase(),
    );
    if (duplicateContact) {
      toast.warn(`${name} is already exist!`);
      return;
    } else {
      dispatch(addContact(name, number));
      toast.success(
        `${name} successfully added to Phonebook!`,
      );
    }
  };

  // сброс стейта
  const resetForm = () => {
    setName('');
    setNumber('');
  };

  // добавление контакта в список контактов и сброс инпутов
  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(name, number);
    resetForm();
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
        Name
        <input
          className={s.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          value={name}
          onChange={handleChange}
          required
        />
      </label>

      <label className={s.label}>
        Number
        <input
          className={s.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять из цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          value={number}
          onChange={handleChange}
          required
        />
      </label>

      <button
        className={s.submitButton}
        type="submit"
        // disabled={isLoading}
      >
        Add contact
      </button>

      {isLoading && <Loader />}
    </form>
  );
}

// ========== до использования useSelector и useDispatch ==========
// const mapDispatchToProps = dispatch => ({
//   onSubmit: (name, number) =>
//     dispatch(addContact(name, number)),
// });

// export default connect(
//   null,
//   mapDispatchToProps,
// )(ContactForm);

// ContactForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
