import React from 'react';
import styles from './Contacts.module.css';
import ContactItem from '../ContactItem/ContactItem';

const Contacts = ({ contacts, onDeleteContact }) => {
  return (
    <div className={styles.contacts}>
      <ul className={styles.list}>
        {contacts.map(contact => (
          <ContactItem
            key={contact.id}
            contact={contact}
            onDeleteContact={onDeleteContact}
          />
        ))}
      </ul>
    </div>
  );
};

export default Contacts;
