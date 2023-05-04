const contact = require('./db/contacts');
const argv = require('yargs').argv;

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      const contacts = await contact.listContacts();
      console.log(contacts);
      break;

    case 'get':
      const contactById = await contact.getContactById(id);
      console.log(contactById);
      break;

    case 'add':
      const newContact = await contact.addContact(name, email, phone);
      console.log(newContact);
      break;

    case 'remove':
      const deleteContact = await contact.removeContact(id);
      console.log(deleteContact);
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);
