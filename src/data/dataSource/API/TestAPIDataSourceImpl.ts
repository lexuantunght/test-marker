import { MarkedTest } from '@domain/model/MarkedTest';
import { MarkedTestQueries } from '../../database/query/MarkedTestQueries';
import TestDataSource from '../TestDataSource';

export class TestAPIDataSourceImpl implements TestDataSource {
    private markedTestQuery;

    constructor() {
        this.markedTestQuery = new MarkedTestQueries();
    }
    public async addMarkedTest(item: MarkedTest) {
        return this.markedTestQuery.putMarkedTest(item);
    }
}

export const testDataSource = new TestAPIDataSourceImpl();
