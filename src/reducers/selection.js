// @flow

import * as types from '../actions/selections';
import type { AppState, Selection } from '../types/definitions';
import initialState from '../store/initialState';

export default (state: ?Selection, action: Object) => {
    switch (action.type) {
        case types.SELECT_KEY_WORD:
            return Object.assign({}, state, {currentWord: action.keyWord});
        default:
            return state || {};
    }
};
