import { TestStructureEntity } from '../database/entity/TestStructureEntity';
import { MarkedTest } from '@domain/model/MarkedTest';
import { TestStructure } from '@domain/model/TestStructure';

export default interface TestDataSource {
    addMarkedTest: (item: MarkedTest) => Promise<void>;
    addTestStructure: (item: TestStructure) => Promise<void>;
    getAllTestStructures: () => Promise<Array<TestStructureEntity>>;
}
