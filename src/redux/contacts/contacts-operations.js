import axios from 'axios';
import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from './contacts-actions';

axios.defaults.baseURL =
  'https://618fc2d9f6bf450017484a37.mockapi.io';

export const fetchContacts = () => dispatch => {
  dispatch(fetchContactsRequest());
  // try {
  //   const { data } = axios.get('/contacts');
  //   dispatch(fetchContactsSuccess(data));
  // } catch (error) {
  //   dispatch(fetchContactsError(error));
  // }

  axios
    .get('/contacts')
    .then(({ data }) =>
      dispatch(fetchContactsSuccess(data)),
    )
    .catch(error => dispatch(fetchContactsError(error)));
};

export const addContact = (name, number) => dispatch => {
  const contacts = { name, number };
  dispatch(addContactRequest());
  axios
    .post('/contacts', contacts)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch(error => dispatch(addContactError(error)));
};

export const deleteContact = contactId => dispatch => {
  dispatch(deleteContactRequest(contactId));

  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(deleteContactSuccess(contactId)))
    .catch(error => dispatch(deleteContactError(error)));
};
