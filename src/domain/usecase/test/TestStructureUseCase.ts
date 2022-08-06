import { TestReposity } from '../../repository/TestRepository';
import { testRepository } from '@data/repository/TestRepositoryImpl';
import { TestStructure } from '../../model/TestStructure';

export interface TestStructureUseCase {
    addTestStructure: (item: TestStructure) => Promise<void>;
    getAllTestStructures: () => Promise<Array<TestStructure>>;
}

export class TestStructureUseCaseImpl implements TestStructureUseCase {
    private testRepo: TestReposity;
    constructor(_testRepo?: TestReposity) {
        if (_testRepo) {
            this.testRepo = _testRepo;
        } else {
            this.testRepo = testRepository;
        }
    }

    public async addTestStructure(item: TestStructure) {
        return this.testRepo.addTestStructure(item);
    }

    public async getAllTestStructures() {
        return this.testRepo.getAllTestStructures();
    }
}
