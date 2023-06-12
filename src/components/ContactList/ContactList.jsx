import { Component } from 'react';
import css from './ContactList.module.css';

export default class ContactList extends Component {
  render() {
    const { contacts, filter } = this.props;

    return (
      <ul>
        {contacts
          .filter(contact =>
            contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
          )
          .map(contact => (
            <li className={css.contactsList} key={contact.id}>
              {contact.name} : {contact.number}
            </li>
          ))}
      </ul>
    );
  }
}
