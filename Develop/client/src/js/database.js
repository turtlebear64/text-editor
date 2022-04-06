import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

  // TODO: Add logic for a method that gets all the content from the database
export const getDb = async (value) => console.log('getting data from DB');
     const jateDB = await openDB('jate', 1);
     
     const tx = jateDB.transaction('jate', 'readwrite');
     const store = tx.objectstore('jate');
     const req = store.getAll();
    const res = await req;
    console.log('data saved to the DB', res);
     

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => console.error('putDb not implemented');
       const jateDB = await openDB('jate', 1);
       const tx = jateDB.transaction('jate', 'readwrite');
       const store = tx.objectstore('jate');
       const req = store.put({jate: value})
       const res = await req
       console.log('data now saved to DB', res);


initdb();
