import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL =
  'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      return await axios
        .get('/contacts')
        .then(({ data }) => data);
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      return await axios
        .post('/contacts', contact)
        .then(({ data }) => data);
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, { rejectWithValue }) => {
    try {
      await axios.delete(`/contacts/${contactId}`);
      return contactId;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

// ========== before using createAsyncThunk ==========
// export const fetchContacts = () => dispatch => {
//   dispatch(fetchContactsRequest());
//   axios
//     .get('/contacts')
//     .then(({ data }) =>
//       dispatch(fetchContactsSuccess(data)),
//     )
//     .catch(error => dispatch(fetchContactsError(error)));
// };

// export const addContact = (name, number) => dispatch => {
//   const contacts = { name, number };
//   dispatch(addContactRequest());
//   axios
//     .post('/contacts', contacts)
//     .then(({ data }) => dispatch(addContactSuccess(data)))
//     .catch(error => dispatch(addContactError(error)));
// };

// export const deleteContact = contactId => dispatch => {
//   dispatch(deleteContactRequest(contactId));

//   axios
//     .delete(`/contacts/${contactId}`)
//     .then(() => dispatch(deleteContactSuccess(contactId)))
//     .catch(error => dispatch(deleteContactError(error)));
// };
