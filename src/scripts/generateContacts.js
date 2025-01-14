import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const generateContacts = async (number) => {
try {
    const existingContacts = await readContacts();

    const newContact = [];

    for (let i = 0; i < number; i++) {
    const contact = createFakeContact();
    newContact.push(contact);
    }

    const updatedContacts = [...existingContacts, ...newContact];

    await fs.writeFile( PATH_DB,
        JSON.stringify(updatedContacts, null, 2),
        'utf-8',
    );
    console.log('Successful contacts generete!');
} catch (error) {
    console.error(
    'Oops, an error occurred while genereting of contacts',
    error,
    );
}
};

generateContacts(5);
