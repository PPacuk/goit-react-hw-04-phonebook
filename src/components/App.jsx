import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import Section from './Section/Section';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  addContact = event => {
    event.preventDefault();
    const contactCard = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contactCard],
    }));
    this.setState({ name: '', number: '' });
  };

  nameInputHandler = event => {
    this.setState({ name: event.target.value });
  };

  numberInputHandler = event => {
    this.setState({ number: event.target.value });
  };
  searchInputHandler = event => {
    this.setState({ filter: event.target.value });
  };

  render() {
    const { contacts, name, number, filter } = this.state;

    return (
      <>
        <Section title="Phonebook">
          <ContactForm
            name={name}
            number={number}
            addContact={this.addContact}
            nameInputHandler={this.nameInputHandler}
            numberInputHandler={this.numberInputHandler}
          />
        </Section>
        <Section title="Contacts">
          <>
            <Filter searchInputHandler={this.searchInputHandler} />
            <ContactList filter={filter} contacts={contacts} />
          </>
        </Section>
      </>
    );
  }
}
