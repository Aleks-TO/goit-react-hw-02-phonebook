import { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './app.module.css';
import ContactForm from './contactForm/contactForm';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  render() {
    return (
      <div className={css.phonebook}>
        <h1 className={css.phonebook__title}>Phonebook</h1>
        <ContactForm />
        <h2 className={css.phonebook__contactsTitle}>Contacts</h2>
      </div>
    );
  }
}

export default App;
