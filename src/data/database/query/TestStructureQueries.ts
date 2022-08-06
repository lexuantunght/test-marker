import { IndexedDBAdapter } from '../adapter/IndexedDBAdapter';

export class TestStructureQueries {
    private adapter;

    constructor() {
        this.adapter = new IndexedDBAdapter('zmarker');
    }

    public getAllStructures() {
        return this.adapter.getAsArray('test_structures');
    }

    public findStructure(_id: string) {
        return this.adapter.getAsArray('test_structures', { where: '_id', equals: _id });
    }
}
