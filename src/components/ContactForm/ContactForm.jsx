import { Component } from 'react';
import css from './ContactForm.module.css';

export default class ContactForm extends Component {
  render() {
    const { name, number, nameInputHandler, numberInputHandler, addContact } =
      this.props;
    return (
      <form className={css.formWrapper}>
        <p>Name</p>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          className={css.formInput}
          value={name}
          onChange={nameInputHandler}
        />

        <p>Number</p>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          className={css.formInput}
          value={number}
          onChange={numberInputHandler}
        />
        <button onClick={addContact} className={css.formBnt}>
          Add contact
        </button>
      </form>
    );
  }
}
