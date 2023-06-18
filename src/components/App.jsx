import { Component } from 'react';
import { PropTypes } from 'prop-types';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Section from './Section/Section';
import Filter from './Filter/Filter';
import css from './App.module.css';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const contactCard = {
      id: nanoid(),
      name: name,
      number: number,
    };

    const isOnList = this.state.contacts
      .map(contact => contact.name.toLocaleLowerCase())
      .includes(name.toLocaleLowerCase());

    if (!isOnList) {
      this.setState(prev => ({
        contacts: [...prev.contacts, contactCard],
      }));
      Notify.success(`${name} added to contact list!`);
      localStorage.setItem('phonebook', JSON.stringify(this.state.contacts));
    } else {
      Notify.failure(`${name} is already in contact list!`);
    }
  };

  deleteContact = contactId => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  searchInputHandler = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  componentDidMount() {
    if (JSON.parse(localStorage.getItem('phonebook') === null)) {
      localStorage.setItem('phonebook', JSON.stringify([]));
    }
    this.setState({
      contacts: JSON.parse(localStorage.getItem('phonebook')),
    });
  }

  componentDidUpdate() {
    localStorage.setItem('phonebook', JSON.stringify(this.state.contacts));
  }

  render() {
    const { contacts, filter } = this.state;
    const { addContact, searchInputHandler, deleteContact } = this;

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
  }
}

App.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string,
};
