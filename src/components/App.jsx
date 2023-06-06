import { Component } from 'react';
import Form from './Form/Form';
import { nanoid } from 'nanoid';
import Contacts from './Contacts/Contacts';
import Section from './Section/Section';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson' },
      { id: 'id-2', name: 'Hermione Kline' },
      { id: 'id-3', name: 'Eden Clements' },
      { id: 'id-4', name: 'Annie Copeland' },
    ],
    name: '',
  };

  addContact = event => {
    event.preventDefault();
    const contactCard = {
      id: nanoid(),
      name: this.state.name,
    };
    const newContacts = [...this.state.contacts, contactCard];
    this.setState({ contacts: newContacts });
    this.setState({ name: '' });
  };

  inputHandler = event => {
    const newValue = event.target.value;
    this.setState({ name: newValue });
  };

  render() {
    const { contacts, name } = this.state;
    const addContact = event => this.addContact(event);
    const inputHandler = event => this.inputHandler(event);

    return (
      <>
        <Section title="Phonebook">
          <Form
            name={name}
            addContact={addContact}
            inputHandler={inputHandler}
          />
        </Section>
        <Section title="Contacts">
          <Contacts  contacts={contacts} />
        </Section>
      </>
    );
  }
}
