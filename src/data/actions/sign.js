// export function login(state) {
//     return {
//         type: 'LOGIN_START',
//         payload: {
//             state: state
//         }
//     }
// }


// REG_START/REG_SUCCESS/REG_ERROR 1 2 3

import {createAction, REG_STATE_CHANGE} from './actiontypes';

export const regStatus = createAction(REG_STATE_CHANGE, 'state');
export function reg(options) {
    return (dispatch, getState) => {
        return new Promise((resolve, reject) => {
            let onSuccess = options.success;
            let onError = options.error;
            options.success = function() {
                onSuccess && onSuccess();
                dispatch(regStatus(2));
                resolve();

            }
            options.error = function(e) {
                onError && onError();
                dispatch(regStatus(3));
                reject();
            };
            dispatch(regStatus(1));
            sdk.conn.registerUser(options);
        });
    }
}

export function login(options) {
    return (dispatch, getState) => {
        return new Promise((resolve, reject) => {
            options.success = function(token) {
                resolve(token);
            }
            options.error = function(e) {
                reject(e);
            };
            sdk.conn.open(options);
        });
    }
} 
