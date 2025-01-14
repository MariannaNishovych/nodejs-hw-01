import { readContacts } from '../utils/readContacts.js';
import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeLastContact = async () => {
  try {
    const allContacts = await readContacts();
    allContacts.pop();
    await fs.writeFile(PATH_DB, JSON.stringify(allContacts, null, 2));
  } catch (error) {
    console.error(error.message);
  }
};

removeLastContact();
