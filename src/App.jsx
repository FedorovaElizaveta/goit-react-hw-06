import "./App.css";
import { useEffect, useState } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import data from "./data.json";

function App() {
  const [contacts, setContacts] = useState(() => {
    const currentContacts = localStorage.getItem("contacts");
    return currentContacts ? JSON.parse(currentContacts) : data;
  });
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const findContact = (inputValue) => {
    setFilter(inputValue);
  };

  useEffect(() => {
    const filtredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter)
    );
    setFilteredContacts(filtredContacts);
  }, [filter, contacts]);

  const handleSubmit = (newContact) => {
    setContacts((contacts) => [...contacts, newContact]);
  };

  const deleteContact = (id) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContacts);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm submit={handleSubmit} />
      <SearchBox findContact={findContact} />
      <ContactList contacts={filteredContacts} deleteContact={deleteContact} />
    </div>
  );
}

export default App;
