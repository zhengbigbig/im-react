import {REG_STATE_CHANGE} from '../actions/actiontypes';

export default function signReducer(state = {
    regState: 0, //1 注册开始， 2 注册成功， 3 注册失败
}, action) {
    switch (action.type) {
        case REG_STATE_CHANGE:
            return Object.assign({}, state, {
                regState: action.payload.state
            });
        default:
            return state;
    }
    return state;
}