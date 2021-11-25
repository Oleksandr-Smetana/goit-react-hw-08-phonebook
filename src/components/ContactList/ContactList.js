import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Loader from '../Loader';

import {
  fetchContacts,
  deleteContact,
} from '../../redux/contacts/contacts-operations';
import {
  getVisibleContacts,
  getLoading,
} from '../../redux/contacts/contacts-selectors';

import s from './ContactList.module.css';

export default function ContactList() {
  const dispatch = useDispatch();

  const isLoading = useSelector(getLoading);
  const contacts = useSelector(getVisibleContacts);

  useEffect(() => dispatch(fetchContacts()), [dispatch]);

  // const onDelete = contactId =>
  //   dispatch(deleteContact(contactId));

  return (
    <>
      {contacts.length !== 0 ? (
        <ul className={s.contactList}>
          {contacts.map(({ id, name, number }) => (
            <li className={s.contactItem} key={id}>
              <p className={s.contactInfo}>
                {name}: {number}
              </p>
              <button
                className={s.deleteButton}
                id={id}
                onClick={() => dispatch(deleteContact(id))}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className={s.notification}>
          There are no contacts...
        </p>
      )}

      {isLoading && <Loader />}
    </>
  );
}
