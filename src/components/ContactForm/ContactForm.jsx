import { Component } from 'react';
import css from './ContactForm.module.css';
import { PropTypes } from 'prop-types';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputOnChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onAddContact({ ...this.state });
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    const { handleInputOnChange, handleSubmit } = this;

    return (
      <form className={css.formWrapper} onSubmit={handleSubmit}>
        <p>Name</p>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' ][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          className={css.formInput}
          placeholder='f.e Mateusz Bambik'
          value={name}
          onChange={handleInputOnChange}
        />

        <p>Number</p>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[.\s]?\(?\d{1,3}?\)?[.\s]?\d{1,4}[.\s]?\d{1,4}[.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          className={css.formInput}
          placeholder='666 666 666'
          value={number}
          onChange={handleInputOnChange}
        />
        <button type="submit" className={css.formBnt}>
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};
