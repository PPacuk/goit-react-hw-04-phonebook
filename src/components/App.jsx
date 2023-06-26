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
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const addContact = ({ name, number }) => {
    const contactCard = {
      id: nanoid(),
      name: name,
      number: number,
    };
    console.log(name, number);
    const isOnList = contacts
      .map(contact => contact.name.toLocaleLowerCase())
      .includes(name.toLocaleLowerCase());

    if (!isOnList) {
      setContacts(prev => [...prev, contactCard]);
      Notify.success(`${name} added to contact list!`);
      localStorage.setItem('phonebook', JSON.stringify(contacts));
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
    if (JSON.parse(localStorage.getItem('phonebook') === null)) {
      localStorage.setItem('phonebook', JSON.stringify([]));
    }
    setContacts(JSON.parse(localStorage.getItem('phonebook')));
  }, []);

  useEffect(() => {
    localStorage.setItem('phonebook', JSON.stringify(contacts));
  },[contacts]);

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
        <ContactForm onAddContact={addContact} />
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
