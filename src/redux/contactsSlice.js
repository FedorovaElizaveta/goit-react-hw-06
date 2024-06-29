import { createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice({
  name: "contacts",
  initialState: { items: [] },
  reducers: {
    addContact: (state, { payload }) => {
      state.items.push(payload);
    },
    deleteContact: (state, { payload }) => {
      state.items = state.items.filter((contact) => contact.id !== payload);
    },
  },
});

export const selectContacts = (state) => state.contactSlice.items;
export const { addContact, deleteContact } = contactSlice.actions;
export const contactsReducer = contactSlice.reducer;
