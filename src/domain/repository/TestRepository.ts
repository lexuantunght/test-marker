import { TestStructure } from '../model/TestStructure';
import { MarkedTest } from '../model/MarkedTest';

export interface TestReposity {
    addMarkedTest: (item: MarkedTest) => Promise<void>;
    addTestStructure: (item: TestStructure) => Promise<void>;
    getAllTestStructures: () => Promise<Array<TestStructure>>;
}
