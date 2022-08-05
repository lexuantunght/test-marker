import { setAnswers } from '@utils/redux/reducers/marker-reducer';
import BaseController from '../BaseController';

class MarkerController extends BaseController {
    constructor() {
        super();
    }

    public setAnswers = (answers: Array<string>) => {
        this.dispatch(setAnswers(answers));
    };
}

export default MarkerController;
