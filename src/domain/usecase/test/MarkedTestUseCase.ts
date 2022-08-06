import { TestReposity } from '../../repository/TestRepository';
import { MarkedTest } from '../../model/MarkedTest';
import { testRepository } from '@data/repository/TestRepositoryImpl';

export interface MarkedTestUseCase {
    addMarkedTest: (item: MarkedTest) => Promise<void>;
}

export class MarkedTestUseCaseImpl implements MarkedTestUseCase {
    private testRepo: TestReposity;
    constructor(_testRepo?: TestReposity) {
        if (_testRepo) {
            this.testRepo = _testRepo;
        } else {
            this.testRepo = testRepository;
        }
    }

    public async addMarkedTest(item: MarkedTest) {
        return this.testRepo.addMarkedTest(item);
    }
}
