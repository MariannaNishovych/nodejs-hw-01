import { readContacts } from '../utils/readContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const addOneContact = async () => {
try {
    const contacts = await readContacts();

    const newContact = createFakeContact();

    contacts.push(newContact);

    await fs.writeFile(PATH_DB,
        JSON.stringify(contacts, null, 2),
        'utf-8',
    );
    console.log('New contact added successfully!');
} catch (error) {
    console.error('Something went wrong', error);
}
};

addOneContact();
