import { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './app.module.css';
import ContactForm from './contactForm/contactForm';
import Filter from './filter/filter';
import ContactList from './contactList/contactList';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  formSubmit = event => {
    event.preventDefault();
    const { contacts } = this.state;
    const { name, number } = event.target;
    // console.log(event.target);
    this.setState({
      contacts: [
        ...contacts,
        {
          id: nanoid(),
          name: name.value,
          number: number.value,
        },
      ],
    });
    event.currentTarget.reset();
  };

  deleteContact = event => {
    const { contacts } = this.state;
    const { id } = event.currentTarget.parentElement;

    this.setState({
      contacts: contacts.filter(contact => contact.id !== id),
    });
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className={css.phonebook}>
        <h1 className={css.phonebook__title}>Phonebook</h1>
        <ContactForm state={this.state} formSubmit={this.formSubmit} />
        <h2 className={css.phonebook__contactsTitle}>Contacts</h2>
        <Filter
          contacts={this.state.contacts}
          filter={this.state.filter}
          handleInputChange={this.handleInputChange}
        />
        <ContactList
          contacts={this.state.contacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
