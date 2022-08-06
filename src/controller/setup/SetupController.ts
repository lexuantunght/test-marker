import BaseController from '../BaseController';
import { TestData } from '@domain/model/TestData';
import { setQuestionCount, setTestStructures } from '@utils/redux/reducers/setup-reducer';
import { TestStructure } from '@domain/model/TestStructure';
import { TestStructureUseCaseImpl } from '@domain/usecase/test/TestStructureUseCase';

class SetupController extends BaseController {
    private testStructureUseCase;
    constructor() {
        super();
        this.testStructureUseCase = new TestStructureUseCaseImpl();
    }

    public setTestData = (testData: TestData) => {
        this.dispatch(setQuestionCount(testData.questionCount));
    };

    public addTestStructure = (testStructure: TestStructure) => {
        this.dispatch(setTestStructures([...this.getState().setup.testStructures, testStructure]));
        this.testStructureUseCase.addTestStructure(testStructure);
    };

    public getAllTestStructures = () => {
        this.testStructureUseCase
            .getAllTestStructures()
            .then((data) => this.dispatch(setTestStructures(data)));
    };
}

export default SetupController;
