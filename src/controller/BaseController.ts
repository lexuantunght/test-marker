import { createDraftSafeSelector } from '@reduxjs/toolkit';
import store, { RootState } from '@utils/redux/store';

class BaseController {
    protected dispatch;

    constructor() {
        this.dispatch = store.dispatch;
    }

    public getState = () => {
        return store.getState();
    };

    protected createSelector = <T>(selector: (state: RootState) => T) => {
        return createDraftSafeSelector(selector, (state) => state);
    };
}

export default BaseController;
