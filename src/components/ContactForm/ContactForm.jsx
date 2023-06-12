import { Component } from 'react';
import css from './ContactForm.module.css';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputOnChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onAddContact({ ...this.state });
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form className={css.formWrapper} onSubmit={this.handleSubmit}>
        <p>Name</p>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' ][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          className={css.formInput}
          value={name}
          onChange={this.handleInputOnChange}
        />

        <p>Number</p>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[.\s]?\(?\d{1,3}?\)?[.\s]?\d{1,4}[.\s]?\d{1,4}[.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          className={css.formInput}
          value={number}
          onChange={this.handleInputOnChange}
        />
        <button type="submit" className={css.formBnt}>
          Add contact
        </button>
      </form>
    );
  }
}
