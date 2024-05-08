import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  addContact,
  deleteContact,
  fetchContacts,
  updateContact,
} from "./operations";
import { logout } from "../auth/operations";

const INITIAL_STATE = {
  contacts: {
    items: [],
    loading: false,
    error: null,
  },
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: INITIAL_STATE,
  extraReducers: (builder) =>
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts.loading = false;
        state.contacts.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.loading = false;
        state.contacts.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts.loading = false;
        state.contacts.items = state.contacts.items.filter(
          (contact) => contact.id !== action.payload.id
        );
      })
      .addCase(updateContact.fulfilled, (state, action) => {
        state.contacts.loading = false;
        const updatedContact = action.payload;
        const index = state.contacts.items.findIndex(
          (contact) => contact.id === updatedContact.id
        );
        if (index !== -1) {
          state.contacts.items[index] = updatedContact;
        }
      })
      .addCase(logout.fulfilled, () => {
        return INITIAL_STATE;
      })
      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          addContact.pending,
          deleteContact.pending,
          updateContact.pending,
          logout.pending
        ),
        (state) => {
          state.contacts.loading = true;
          state.contacts.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          addContact.rejected,
          deleteContact.rejected,
          updateContact.rejected,
          logout.rejected
        ),
        (state, action) => {
          state.contacts.loading = false;
          state.contacts.error = action.payload;
        }
      ),
});

export const contactsReducer = contactsSlice.reducer;
