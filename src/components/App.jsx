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
    this.setState({name: '', number: ''})
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
          <PhonebookForm
            name={name}
            number={number}
            addContact={this.addContact}
            nameInputHandler={this.nameInputHandler}
            numberInputHandler={this.numberInputHandler}
          />
        </Section>
        <Section title="Contacts">
          <SearchBox
            filter={filter}
            contacts={contacts}
            searchInputHandler={this.searchInputHandler}
          />
        </Section>
      </>
    );
  }
}
