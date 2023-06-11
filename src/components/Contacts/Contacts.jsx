import { Component } from 'react';
import css from './Contacts.module.css';

export default class Contacts extends Component {
  render() {
    const { contacts, filter } = this.props;

    return contacts
      .filter(contact =>
        contact.name
          .toLocaleLowerCase()
          .includes(filter.toLocaleLowerCase())
      )
      .map(contact => (
        <li className={css.contactsList} key={contact.id}>
          {contact.name} : {contact.number}
        </li>
      ));
  }
}
