import {CHANGE_PAGE} from './constants';
export default function globalReducer(state = {
    page: 'singin' //登录页面，signup 注册页面， chat 聊天页面
}, action) {
    
    switch (action.type) {
        
        case CHANGE_PAGE:
            return Object.assign({}, state, {
                page: action.payload.page
            })
    }
    return state;
}