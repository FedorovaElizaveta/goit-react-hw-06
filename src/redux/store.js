import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import { filtersReducer } from "./filtersSlice";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

const contactsPersistConfig = {
  key: "contacts",
  storage,
};

const contactsPersistedReducer = persistReducer(
  contactsPersistConfig,
  contactsReducer
);

export const store = configureStore({
  reducer: {
    contacts: contactsPersistedReducer,
    filters: filtersReducer,
  },
});

export const persistor = persistStore(store);
