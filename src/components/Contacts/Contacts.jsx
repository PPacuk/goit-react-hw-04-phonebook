import { Component } from 'react';
import css from './Contacts.module.css';

export default class Contacts extends Component {
  render() {
    return this.props.contacts.map(contact => (
      <li className={css.contactsList} key={contact.id}>
        {contact.name} : {contact.number}
      </li>
    ));
  }
}