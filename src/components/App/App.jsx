import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import css from '../App/App.module.css';
import CONTACTS from '/contacts.json';
import Section from '../Section/Section';
import SearchBox from '../SearchBox/SearchBox';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';

export default function App() {

  function initLocalStorage() {
    const saveContacts = localStorage.getItem('contacts');
    return saveContacts ? JSON.parse(saveContacts) : CONTACTS;
  }

  const [contacts, setContacts] = useState(initLocalStorage);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const filteredContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(searchValue.toLowerCase().trim()));

  function onAddId(data) {
    const finishAddContact = {
      ...data,
      id: nanoid(),
    };
    setContacts((prev) => [...prev, finishAddContact]);
  }

  function onChangeValue(e) {
    setSearchValue(e.target.value);
  }

  function onDeleteContact(contactId) {
    const updateContact = contacts.filter((contact) => contact.id !== contactId);
    setContacts(updateContact);
  }
 
  return (
    <>
      <Section title={"Phone Book"}>
        <div className={css.boxComment}>
            <div className={css.boxComment__firstEl}>
            <SearchBox searchValue={searchValue}
             onChangeValue={onChangeValue}
            />
            <ContactForm onAddId={onAddId}/>
          </div>
          <ContactList array={filteredContacts}
           onDeleteContact={onDeleteContact}
          />
        </div>
      </Section>
    </>
  )
}
