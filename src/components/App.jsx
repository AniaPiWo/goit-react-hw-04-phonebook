import React, { useState, useEffect } from 'react';
import Form from './Form/Form';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';
import styles from './App.module.css';

const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = newContact => {
    const isContactExists = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (!isContactExists) {
      setContacts(prevContacts => [...prevContacts, newContact]);
      setFilteredContacts(prevFilteredContacts => [
        ...prevFilteredContacts,
        newContact,
      ]);
    } else {
      setError(`${newContact.name} is already in contacts`);
    }
  };

  const handleFilterChange = filter => {
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    setFilteredContacts(filteredContacts);
  };

  const handleDeleteContact = contactId => {
    const updatedContacts = contacts.filter(
      contact => contact.id !== contactId
    );
    const updatedFilteredContacts = filteredContacts.filter(
      contact => contact.id !== contactId
    );
    setContacts(updatedContacts);
    setFilteredContacts(updatedFilteredContacts);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Phonebook</h2>
      <p className={styles.error}>{error}</p>
      <Form onAddContact={handleAddContact} />
      <Filter onFilterChange={handleFilterChange} />
      <Contacts
        contacts={filteredContacts.length ? filteredContacts : contacts}
        onDeleteContact={handleDeleteContact}
      />
    </div>
  );
};

export default App;
