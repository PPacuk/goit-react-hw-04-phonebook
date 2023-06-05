import { Component } from 'react';
import css from './Form.module.css';

export default class Form extends Component {
  render() {
    const { name, inputHandler, addContact } = this.props;
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
          onChange={inputHandler}
        />
        <button onClick={addContact} className={css.formBnt}>
          Add contact
        </button>
      </form>
    );
  }
}
