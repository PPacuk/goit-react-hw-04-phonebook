import { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import Section from './Section/Section';
import { Filter } from './Filter/Filter';
import css from './App.module.css';

export const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  const addContact = ({ name, number }) => {
    const contactCard = {
      id: nanoid(),
      name: name,
      number: number,
    };

    const isOnList = contacts
      .map(contact => contact.name.toLocaleLowerCase())
      .includes(name.toLocaleLowerCase());

    if (!isOnList) {
      setContacts(prev => [...prev, contactCard]);
      Notify.success(`${name} added to contact list!`);
      localStorage.setItem('phonebook', JSON.stringify(contactCard));
    } else {
      Notify.failure(`${name} is already in contact list!`);
    }
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const searchInputHandler = e => {
    setFilter(e.currentTarget.value);
  };

  useEffect(() => {
    if (!JSON.parse(localStorage.getItem('phonebook'))) {
      localStorage.setItem('phonebook', JSON.stringify([]));
    } else {
      setContacts(JSON.parse(localStorage.getItem('phonebook')));
    }
  }, []);

  // useEffect(() => {
  //   if (prev => prev !== contacts) {
  //     localStorage.setItem('phonebook', JSON.stringify(contacts));
  //     console.log(contacts);
  //   }
  // }, [contacts]);

  const addContactToLocalestore = () => {
    
    localStorage.setItem('phonebook', JSON.stringify(contacts));
    console.log(contacts);
  };

  // componentDidMount() {
  //   if (JSON.parse(localStorage.getItem('phonebook') === null)) {
  //     localStorage.setItem('phonebook', JSON.stringify([]));
  //   }
  //   this.setState({
  //     contacts: JSON.parse(localStorage.getItem('phonebook')),
  //   });
  // }

  // componentDidUpdate() {
  //   localStorage.setItem('phonebook', JSON.stringify(this.state.contacts));
  // }

  return (
    <>
      <Section title="Phonebook">
        <ContactForm
          onAddContact={addContact}
          addContactToLocalestore={addContactToLocalestore}
          contacts={contacts}
        />
      </Section>
      <Section title="Contacts">
        <div className={css.contactsWrapper}>
          <Filter searchInputHandler={searchInputHandler} />
          <ContactList
            filter={filter}
            contacts={contacts}
            deleteContact={deleteContact}
          />
        </div>
      </Section>
    </>
  );
};

App.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string,
};
