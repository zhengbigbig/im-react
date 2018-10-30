import {SET_CURRENT_SESSION, SET_ROSTERS, createAction} from './actiontypes';

export let setCurrentSession = createAction(SET_CURRENT_SESSION, 'session');
export let setRosters = createAction(SET_ROSTERS, 'rosters');



export function getRosters() {
    //.....
    return (dispatch, getState) => {
        return new Promise((resolve, reject) => {
            sdk.conn.getRoster({
                success: (rosters) => {
                    rosters = rosters.filter((roster) => {
                        return roster.subscription === 'both';
                    });
                    dispatch(setRosters(rosters));
                    console.log(rosters);
                    resolve(rosters);
                },
                error: (e) => {
                    reject(e);
                }
            });
        });
    }
}

export function changeRosterWithMsg(msg) {

    return (dispatch, getState) => {
        let name = msg.body ? msg.body.to :  msg.from;
        let rosters = getState().session.rosters;
        let newRosters = rosters.map((roster) => {
            let newRoster = {...roster};
            if (roster.name === name) {
                newRoster.message = msg;
            }
            return newRoster;
        })

        dispatch(setRosters(newRosters));
    }

    
    
}