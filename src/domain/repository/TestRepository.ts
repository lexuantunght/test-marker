import { MarkedTest } from '../model/MarkedTest';

export interface TestReposity {
    addMarkedTest: (item: MarkedTest) => Promise<void>;
}
