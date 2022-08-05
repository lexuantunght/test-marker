import BaseController from '../BaseController';
import { TestData } from '@domain/model/TestData';
import { setQuestionCount } from '@utils/redux/reducers/setup-reducer';

class SetupController extends BaseController {
    constructor() {
        super();
    }

    public setTestData = (testData: TestData) => {
        this.dispatch(setQuestionCount(testData.questionCount));
    };
}

export default SetupController;
