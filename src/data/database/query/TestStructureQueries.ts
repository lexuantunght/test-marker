import { IndexedDBAdapter } from '../adapter/IndexedDBAdapter';
import { TestStructureEntity } from '../entity/TestStructureEntity';

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

    public addStructure(item: TestStructureEntity) {
        this.adapter.put('test_structures', item);
    }
}
