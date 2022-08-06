import { MarkedTestUseCaseImpl } from '@domain/usecase/test/MarkedTestUseCase';
import { setAnswers } from '@utils/redux/reducers/marker-reducer';
import BaseController from '../BaseController';
import { MarkedTest } from '@domain/model/MarkedTest';

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
}

export default MarkerController;
