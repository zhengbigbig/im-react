export function createAction(type, ...argNames) {
    return function (...args) {
        let action = {type, payload: {}};
        argNames.forEach((arg, index) => {
            action.payload[argNames[index]] = args[index];
        });
        return action;
    }
}
export function createAsyncAction(resolve, reject) {
    return function () {
        return (dispatch, getState) => {
            try {
                return resolve(dispatch, getState);
            } catch(e) {
                return reject && reject(dispatch, getState);
            }
        }
    }
}
export const CHANGE_PAGE = 'change_page';