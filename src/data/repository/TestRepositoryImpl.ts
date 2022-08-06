import { MarkedTest } from '@domain/model/MarkedTest';
import { TestStructure } from '@domain/model/TestStructure';
import { TestReposity } from '@domain/repository/TestRepository';
import { testDataSource } from '../dataSource/API/TestAPIDataSourceImpl';
import TestDataSource from '../dataSource/TestDataSource';

export class TestRepositoryImpl implements TestReposity {
    private dataSource;

    constructor(_dataSource?: TestDataSource) {
        if (_dataSource) {
            this.dataSource = _dataSource;
        } else {
            this.dataSource = testDataSource;
        }
    }

    public addMarkedTest(item: MarkedTest) {
        return this.dataSource.addMarkedTest(item);
    }

    public addTestStructure(item: TestStructure) {
        return this.dataSource.addTestStructure(item);
    }

    public getAllTestStructures() {
        return this.dataSource.getAllTestStructures();
    }
}

export const testRepository = new TestRepositoryImpl();
