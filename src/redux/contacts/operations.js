import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addNewContact,
  deleteContactById,
  requestContacts,
  updateContactById,
} from "../../services/api";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkApi) => {
    try {
      const data = await requestContacts();
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (newContact, thunkApi) => {
    try {
      const data = await addNewContact(newContact);

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkApi) => {
    try {
      const data = await deleteContactById(contactId);

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const updateContact = createAsyncThunk(
  "contacts/updateContact",
  async (contactUpdate, thunkApi) => {
    try {
      const data = await updateContactById(contactUpdate.contactId, {
        name: contactUpdate.name,
        number: contactUpdate.number,
      });

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
