import {GET_MSGS, SEND_TEXT_MSG} from '../actions/actiontypes';

//
// msglist {'zhangsan': [], 'lisi': []}
//
export default function messageReducer(state = {
    msglist: {},
    currentMsgs: []
}, action) {
    switch (action.type) {
        case SEND_TEXT_MSG:
            return Object.assign({}, state, {
                msglist: addTextMessage(action.payload.to, action.payload.msg, state.msglist)
            });
        case GET_MSGS:
            return Object.assign({}, state, {
                currentMsgs: getMsgs(action.payload.to, state.msglist)
            });
        default:
            return state;
    }
    return state;
}

function getMsgs(to, msglist) {
    if (msglist[to]) {
        return [];
    }
    return [...msglist[to]];
}

function addTextMessage (to, msg, msglist)  {
    let list = msglist[to] || [];
    //list = [...list];
    list.push(msg);
    msglist[to] = list;
    return Object.assign({} , msglist);
}