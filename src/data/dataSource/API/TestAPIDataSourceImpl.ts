import { TestStructureQueries } from '../../database/query/TestStructureQueries';
import { MarkedTest } from '@domain/model/MarkedTest';
import { TestStructure } from '@domain/model/TestStructure';
import { MarkedTestQueries } from '../../database/query/MarkedTestQueries';
import TestDataSource from '../TestDataSource';

export class TestAPIDataSourceImpl implements TestDataSource {
    private markedTestQuery;
    private testStructureQuery;

    constructor() {
        this.markedTestQuery = new MarkedTestQueries();
        this.testStructureQuery = new TestStructureQueries();
    }
    public async addMarkedTest(item: MarkedTest) {
        return this.markedTestQuery.putMarkedTest(item);
    }

    public async addTestStructure(item: TestStructure) {
        return this.testStructureQuery.addStructure(item);
    }

    public async getAllTestStructures() {
        return this.testStructureQuery.getAllStructures();
    }
}

export const testDataSource = new TestAPIDataSourceImpl();
