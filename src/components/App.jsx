import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Section from './Section/Section';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
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
    } else {
      Notify.failure(`${name} is already in contact list!`);
    }
  };

  deleteContact = contactId => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  searchInputHandler = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  render() {
    const { contacts, filter } = this.state;

    return (
      <>
        <Section title="Phonebook">
          <ContactForm onAddContact={this.addContact} />
        </Section>
        <Section title="Contacts">
          <>
            <Filter searchInputHandler={this.searchInputHandler} />
            <ContactList
              filter={filter}
              contacts={contacts}
              deleteContact={this.deleteContact}
            />
          </>
        </Section>
      </>
    );
  }
}
