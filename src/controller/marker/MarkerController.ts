import { MarkedTestUseCaseImpl } from '@domain/usecase/test/MarkedTestUseCase';
import { setAnswers, setSelectedTestStructure } from '@utils/redux/reducers/marker-reducer';
import BaseController from '../BaseController';
import { MarkedTest } from '@domain/model/MarkedTest';
import { TestStructure } from '@domain/model/TestStructure';

class MarkerController extends BaseController {
    private markedTestUseCase;
    constructor() {
        super();
        this.markedTestUseCase = new MarkedTestUseCaseImpl();
    }

    public setAnswers = (answers: Array<string>) => {
        this.dispatch(setAnswers(answers));
    };

    public saveMarkedTest = (markedTest: MarkedTest) => {
        this.markedTestUseCase.addMarkedTest(markedTest);
    };

    public selectTestStructure = (testStructure: TestStructure) => {
        this.dispatch(setSelectedTestStructure(testStructure));
    };
}

export default MarkerController;
