import { Component } from 'react';
import PhonebookForm from './PhonebookForm/PhonebookForm';
import { nanoid } from 'nanoid';
import Section from './Section/Section';
import SearchBox from './SearchBox/SearchBox';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: [],
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
    const newContacts = [...this.state.contacts, contactCard];
    this.setState({ contacts: newContacts, name: '', number: '' });
  };

  nameInputHandler = event => {
    const newValue = event.target.value;
    this.setState({ name: newValue });
  };

  numberInputHandler = event => {
    const newValue = event.target.value;
    this.setState({ number: newValue });
  };
  searchInputHandler = event => {
    const newValue = event.target.value;
    this.setState(prev => ({
      filter: [...prev.contacts].filter(ct =>
        ct.name.toLocaleLowerCase().includes(newValue.toLocaleLowerCase())
      ),
    }));
  };

  render() {
    const { contacts, name, number, filter } = this.state;
    const addContact = event => this.addContact(event);
    const nameInputHandler = event => this.nameInputHandler(event);
    const numberInputHandler = event => this.numberInputHandler(event);
    const searchInputHandler = event => this.searchInputHandler(event);

    return (
      <>
        <Section title="Phonebook">
          <PhonebookForm
            name={name}
            number={number}
            addContact={addContact}
            nameInputHandler={nameInputHandler}
            numberInputHandler={numberInputHandler}
          />
        </Section>
        <Section title="Contacts">
          <SearchBox
            filter={filter}
            contacts={contacts}
            searchInputHandler={searchInputHandler}
          />
        </Section>
      </>
    );
  }
}
