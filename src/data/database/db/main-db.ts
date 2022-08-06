import Dexie from 'dexie';

const mainDB = new Dexie('zmarker');
mainDB.version(1.0).stores({
    test_structures: '_id',
    marked_tests: '_id, structure_id, [structure_id+marked_time]',
});

export default mainDB;
