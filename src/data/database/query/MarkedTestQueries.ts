import { IndexedDBAdapter } from '../adapter/IndexedDBAdapter';
import { MarkedTestEntity } from '../entity/MarkedTestEntity';

export class MarkedTestQueries {
    private adapter;

    constructor() {
        this.adapter = new IndexedDBAdapter('zmarker');
    }

    public getAllMarkedTests(structureId?: string) {
        if (structureId) {
            return this.adapter.getAsArray('marked_test', {
                where: 'structure_id',
                equals: structureId,
            });
        }
        return this.adapter.getAsArray('marked_test');
    }

    public putMarkedTest(markedTest: MarkedTestEntity) {
        this.adapter.put('marked_tests', markedTest);
    }
}
