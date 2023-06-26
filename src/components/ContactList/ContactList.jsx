import { PropTypes } from 'prop-types';
import css from './ContactList.module.css';

export const ContactList = ({ filter, contacts, deleteContact }) => {
  return (
    <ul className={css.contactsList}>
      {contacts
        .filter(contact =>
          contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
        )
        .map(contact => (
          <li key={contact.id}>
            {contact.name} : {contact.number}{' '}
            <button
              className={css.contactsBtn}
              onClick={() => deleteContact(contact.id)}
            >
              delete
            </button>
          </li>
        ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string,
};
