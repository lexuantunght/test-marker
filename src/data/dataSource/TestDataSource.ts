import { MarkedTest } from '@domain/model/MarkedTest';

export default interface TestDataSource {
    addMarkedTest: (item: MarkedTest) => Promise<void>;
}
