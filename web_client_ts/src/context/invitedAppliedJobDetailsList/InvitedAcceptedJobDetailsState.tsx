import { useReducer } from 'react';
import { InvitedAppliedJobDetailsListContext } from './InvitedAcceptedJobDetailsContext';
import { InvitedAcceptedJobDetailsListReducer } from '../../reducers/invitedAppliedJobReducers/InvitedAppliedJobReducer';

const InvitedAppliedJobListState = (props: any) => {
    const [invitedAppliedJobDetailsListDetails, invitedAppliedJobListDispatch] = useReducer(InvitedAcceptedJobDetailsListReducer, {
        isInvitedFetched: false,
        isAcceptedFetched: false,
        invitedJobList: [],
        acceptedJobList: [],
    });
    return (
        <div>
            <InvitedAppliedJobDetailsListContext.Provider value={{ invitedAppliedJobDetailsListDetails, invitedAppliedJobListDispatch }}>
                {props.children}
            </InvitedAppliedJobDetailsListContext.Provider>
        </div>
    )
}

export default InvitedAppliedJobListState
