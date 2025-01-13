import { PATH_DB } from '../constants/contacts.js';
import fs from 'node: fs/promises';

export const writeContacts = async (updatedContacts) => {
    try {
    const data = JSON.stringify(updatedContacts);
    await fs.writeFile(PATH_DB, data, 'utf-8');
    console.log('Contacts successfully written to file!');
    } catch (error) {
    console.error('Oops, an error occurred while written a file', error);
    }
};
