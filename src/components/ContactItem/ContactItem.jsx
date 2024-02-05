import React from 'react';
import styles from './ContactItem.module.css';

const ContactItem = ({ contact, onDeleteContact }) => {
  return (
    <li className={styles.item}>
      <div className={styles.data}>
        <p>{contact.name}</p>
        <p>{contact.number}</p>
      </div>
      <div
        className={styles.delete}
        onClick={() => onDeleteContact(contact.id)}
      >
        ✖️
      </div>
    </li>
  );
};
export default ContactItem;
